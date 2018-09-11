# Overview

These notes describe the work done to create native openlayers styles and maps for the Ordnance Survey Zoomstack vector tiles stack. 

Oh and YES I know about this https://github.com/boundlessgeo/ol-mapbox-style countless people have pointed me at it ...but just try with the Zoomstack styles and you will wonder why the interpolate functions are not working.....The boundless implementation does not support stops, interpolation

## OS Documentation Links

Overview page https://www.ordnancesurvey.co.uk/business-and-government/products/os-open-zoomstack.html

# Style File

Openlayers handles feature styling in an entirely different manner to mapbox-gl. Styles are rendered via a style function which offers a huge degree of flexibility but equally causes complexity and complications. mapbox-gl uses a json style file to control feature rendering and the capabilities of this style fle are fixed.

Our approach has been to write a parser that reads the OS Zoomstack style files and parses them into Openlayers styles. This has the advantage that style maintenance is easier as we can load in OS updates as and when they change the style. Additionally we can load third party style files and adapt these accordingly.

# Caveats/Limitations

The converter is not a full implementation of the mapbox-gl style capabilities. It is basically doing enough to convert the elements found within the OS styles. For example; only linear interpolation is supported at present.

# Uploading tiles to Amazon S3

Vector tiles can be served in a serverless manner. This is done by unloading the tiles from the mbtiles database format and uploading them to an Amazon s3 directory structure. Process is as follows:-

Install mb-utils: https://github.com/mapbox/mbutil

Install s3-parallel-put: https://github.com/mishudark/s3-parallel-put

Break tiles into file system locally

```
mb-utils os-zoomstack.mbtiles os-zoomstack
```

Export Amazon credentials locally:-

```
export AWS_ACCESS_KEY=<your key to S3>
export AWS_SECRET_ACCESS_KEY=<your deadly secret>
```

Create a batch file **load_levels.sh** to load tiles:-

```text
for ZOOM_LEVEL in "$@"
do
        /usr/bin/s3-parallel-put --put=add --bucket=<bucket name> --prefix=<s3 prefix>/$ZOOM_LEVEL --insecure --host=s3.amazonaws.com --bucket_region=<bucket region> $ZOOM_LEVEL/
done
```

And then upload them all

```text

cd os-zoomstack
load_levels.sh 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14

```


