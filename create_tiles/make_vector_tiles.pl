#!/usr/bin/perl

use JSON;
use Getopt::Long;
use File::Slurp;
use Data::Dumper;
use File::Basename;
use File::Path qw(make_path);
my $config = "./config.json";
my $skip_geo ='n';
GetOptions('config=s' => \$config, 'skip_geo=s' => \$skip_geo);


my $json = JSON->new->utf8;


print "READING $config\n";

my $json_text   = read_file($config);
my $layers = decode_json( $json_text );
my @tippecanoe;

# We need a tmp directory to mess about in
if(! -d $layers->{'config'}->{'tmp_dir'} ){
    make_path($layers->{'config'}->{'tmp_dir'});
} else {
    print "CLEANING TMP DIR\n";
    system('rm -rf '. $layers->{'config'}->{'tmp_dir'}.'*');
}

#First make our temp GeoJSON files

foreach my $keys (keys %{$layers->{'layers'}}) {

    print "KEY $keys\n";
    #$keys contains hashname and points to an array of layers
    foreach my $layer (@{$layers->{'layers'}->{$keys}}) {
        print "Constructing from source " . $layer->{'name'} . "\n";
        push (@tippecanoe, make_geojson($layer, $layers->{'config'}->{'tmp_dir'}, $keys, $skip_geo));

    }
}

#Now let's get canoeing

my $tippecanoe_command = 'tippecanoe -Z ' . $layers->{'config'}->{'minzoom'} . ' -z ' . $layers->{'config'}->{'maxzoom'} . ' -B ' . $layers->{'config'}->{'detail_level'};

foreach my $geojson (@tippecanoe) {

    $tippecanoe_command .= ' ' . $geojson;
}

$tippecanoe_command .= ' -f -o ' . $layers->{'config'}->{'output_file'};

print "$tippecanoe_command\n";
my $tipp = `$tippecanoe_command`;

sub make_geojson {
    my $layer = shift;
    my $tmp_dir = shift;
    my $tippecanoe_layer = shift;
    my $skip_geo = shift;

    my $command = 'ogr2ogr -f GeoJSON';

    #source SRS
    $command .= ' -s_srs ' . (exists($layer->{'s_srs'}) ? $layer->{'s_srs'} : 'EPSG:27700');
    $command .= ' -t_srs ' . (exists($layer->{'t_srs'}) ? $layer->{'t_srs'} : 'EPSG:4326');

    #output file name
    my($filename, $dirs, $suffix) = fileparse($layer->{'file'}, '.shp');

    print "FILENAME $filename\n";

    $filename = $tmp_dir . $filename . '.geojson';

    return '-L ' . $tippecanoe_layer . ':' . $filename if($skip_geo eq 'y');

    #Get layer name from the shapefile for use in the attribute selection SQL.
    my $get_layer_name = 'ogrinfo -al -so ' . $layer->{'file'} . ' | grep \'Layer name\'';
    my $layer_name = `$get_layer_name`;
    $layer_name =~ s/Layer name:|\R| //g;

    print "LAYER $layer_name\n";

    #New attributes can be added if so desired
    my $additional_attributes = '';

    foreach my $key (keys %{$layer->{'add'}}) {

        $additional_attributes .= ',\'''. $layer{'add'}->{$key} \' as ' . $key;

    }

    #attributes we want
    $command .=' -dialect SQLite -sql ' . (
                                           exists($layer->{'attrs'}->[0])   ?  '"SELECT '. join(',', @{$layer->{'attrs'}}) . ',geometry' .
                                                                                               $additional_attributes .
                                                                                               ' FROM ' . $layer_name.'" '
                                                                            :  '"SELECT geometry FROM ' . $layer_name.'" '
                                          );

    #final command construction
    $command .= $filename . '.tmp ' . $layer->{'file'};

    #Remove existing tmp file
    #unlink($filename . '.tmp');
    print "OGR COMMAND $command\n";
    my $result = `$command`;
    print "$layer_name". ($result eq '' ? " OGR complete\n" : " OGR failed $result\n");

    #I tried using jq but it is far too slow on large files
    #my $jqcommand = 'jq \'.features[].tippecanoe.minzoom = ' . $layer->{'minzoom'} . '| .features[].tippecanoe.maxzoom = ' . $layer->{'maxzoom'} .'\' ' . $filename . '.tmp > ' . $filename;
    #TUSING SED FOR SPEED

    my $sedcommand = 'sed \'s#"properties"#"tippecanoe" :{"minzoom" : '. $layer->{'minzoom'} .',"maxzoom" : '. $layer->{'maxzoom'} . '},"properties"#g\' '. $filename . '.tmp > ' . $filename;
    print "SED $sedcommand\n";
    $result = `$sedcommand`;
    print "$layer_name". ($result eq '' ? " SED complete\n" : " SED failed $result\n");
    return '-L ' . $tippecanoe_layer . ':' . $filename;

}