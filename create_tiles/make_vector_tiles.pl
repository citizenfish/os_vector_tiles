#!/usr/bin/perl

use JSON;
use Getopt::Long;
use File::Slurp;
use Data::Dumper;
use File::Basename;

my $config = "./config.json";
GetOptions('database=s' => \$config);


my $json = JSON->new->utf8;

my $json_text   = read_file($config);
my $layers = decode_json( $json_text );
my @tippecanoe;

#First make our temp GeoJSON files

foreach my $keys (keys %{$layers->{'layers'}}) {

        #$keys contains hashname and points to an array of layers
        foreach my $layer (@{$layers->{'layers'}->{$keys}}) {
                print "Constructing from source " . $layer->{'name'} . "\n";
                 push (@tippecanoe, make_geojson($layer, $layers->{'config'}->{'tmp_dir'}, $keys));

        }
}

#Now let's get canoeing

my $tippecanoe_command = 'tippecanoe -Z ' . $layers->{'config'}->{'minzoom'} . ' -z ' . $layers->{'config'}->{'maxzoom'} . ' -B ' . $layers->{'config'}->{'detail_level'};

foreach my $geojson (@tippecanoe) {

        $tippecanoe_command .= ' ' . $geojson;
}

$tippecanoe_command .= ' -f -o ' . $layers->{'config'}->{'output_file'};

#print "$tippecanoe_command\n";

sub make_geojson {
        my $layer = shift;
        my $tmp_dir = shift;
    my $tippecanoe_layer = shift;

        my $command = 'ogr2ogr -f GeoJSON';

        #source SRS
        $command .= ' -s_srs ' . (exists($layer->{'s_srs'}) ? $layer->{'s_srs'} : 'EPSG:27700');
        $command .= ' -t_srs ' . (exists($layer->{'t_srs'}) ? $layer->{'t_srs'} : 'EPSG:4326');

        #output file name
        my($filename, $dirs, $suffix) = fileparse($layer->{'file'}, '.shp');
        $filename = $tmp_dir . $filename . '.geojson';

        #Get layer name for attribite selection
        my $get_layer_name = 'ogrinfo -al -so ' . $layer->{'file'} . ' | grep \'Layer name\'';
        my $layer_name = `$get_layer_name`;
        $layer_name =~ s/Layer name:|\R| //g;

        print "LAYER $layer_name\n";

        #attributes we want
        $command .=' -dialect SQLite -sql ' . (exists($layer->{'attrs'}->[0]) ? '"SELECT '. join(',', @{$layer->{'attrs'}}) . ',geometry FROM ' . $layer_name.'" ' : '"SELECT geometry FROM ' . $layer_name.'" ');

        #final command construction
        $command .= $filename . '.tmp ' . $layer->{'file'};
  #Remove existing tmp file
         unlink($filename . '.tmp');
         my $result = `$command`;
         print "$layer_name". ($result eq '' ? " OGR complete\n" : " OGR failed $result\n");

         #Now add in zoom details
         my $jqcommand = 'jq \'.features[].tippecanoe.minzoom = ' . $layer->{'minzoom'} . '| .features[].tippecanoe.maxzoom = ' . $layer->{'maxzoom'} .'\' ' . $filename . '.tmp > ' . $filename;

         $result = `$jqcommand`;
         print "$layer_name". ($result eq '' ? " JQ complete\n" : " JQ failed $result\n");
         return '-L ' . $tippecanoe_layer . ':' . $filename;

 }