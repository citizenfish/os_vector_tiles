# Creating Vector Tiles from Ordnance Survey Opendata

This repository contains the presentation materials, samples and code for talk given by Dave Barter at the [FOSS4G 2018](http://uk.osgeo.org/foss4guk2018/) Open Source conference.

## Creating Tiles

[create_tiles](create_tiles) contains the **make_vector_tiles.pl** script which provides a wrapper around the workflow necessary to create MVT format vector tiles from multiple shape files. This requires a config file **config.json**

The config must include a config section:

```json
 "config": {
    "output_file": "/opt/nautoguide/gisraw/vector_tiles/os_all.mbtiles",
    "tmp_dir": "/tmp/os_opendata/",
    "minzoom": 0,
    "maxzoom": 16,
    "detail_level": 8
  }
```


**minzoom** and **maxzoom** set the zoom level range for the tiles

**detail_level** sets the detail level (-d) parameter of tippecanoe, more detail at [this link](https://github.com/mapbox/tippecanoe)

Individual layers  are formatted as follows:-

```json
"openmap_railwaystation": [
      {
        "name": "Openmap Railway Station",
        "file": "/opt/nautoguide/gisraw/os-opendata-2016/openmap_vector/data/RailwayStation.shp",
        "maxzoom": 16,
        "minzoom": 13,
        "attrs": [
          "distname,classifica,featcode"
        ],
        "add": {
          "name": "Openmap Railway Station"
        }
      }
    ]
```

**file** must point to an ESRI shapefile in EPSG:27700

The **maxzoom** and **minzoom** attributes are used to restrict the zoom levels for this layer

The **attrs** array selects the attributes from the shapefile to be copied into the layer attributes

The **add** structure allows you to add fixed data to the layer attributes

## OS Opendata Mapbox Style

This is very much work in progress but the latest style can be found in the [mapbox-samples](mapbox-samples) directory in the file **os_opendata_style.js**
