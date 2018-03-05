var roads_colour_map = {
    land : {
        outline : {

        },
        fill : {
            water : "rgb(158,189,255)",
            land  : "rgb(255,67,34)",
            urban_region : "hsla(0, 3%, 85%, 0.84)",
            woodland_region :  "rgb(214,243,206)",
            lakes_region : "rgb(217,234,238)",
            foreshore_sand_region : "rgb(255,255,204)",
            foreshore_other_region : "rgb(239,231,189)",
            river_line : "rgb(182,215,223)"
        }
    },
    road: {
        casing: {
            motorway: "rgb(102,102,102)",
            primary: "rgb(119,119,119)",
            a: "rgb(119,119,119)",
            b: "rgb(119,119,119)",
            minor: '#505050',
            other: '#505050'
        },
        fill: {
            motorway: "rgb(153,165,255)",
            motorway_centre: "rgb(255,255,255)",
            primary: "rgb(136,194,152)",
            secondary: '#FFFFFF',
            a: "rgb(255,179,193)",
            b: "rgb(230,210,115)",
            minor: 'rgb(255,255,255)',
            other: 'rgb(255,255,255)'
        },
        label :{
            motorway_junction : {
                colour: "#36B1D2"
            }
        }
    },
    rail :{
        fill : {
            line : "#BBB"
        }
    }
};

var road_layers_config = [
    {   /* BACKGROUND OF MAP IS SET TO WATER */
        "id": "background",
        "type": "background",
        "paint": {
            "background-color": roads_colour_map.land.fill.water
        }
    },
    {
        /* LAND POLYGON COLOUR */
        "id": "uk_land",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "strategi_coast",
        "paint": {
            "fill-color": roads_colour_map.land.fill.land
        }
    },

    {
        /* MINOR ROAD */
        "id": "strategi_minor_road",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_minor_road",
        "layout": {
            "line-cap": "round"
        },
        "minzoom" : 9,
        "paint": {
            "line-color": roads_colour_map.road.fill.minor,
            "line-width": 0.75

        }
    },
    {
        /* B ROAD CASING */
        "id": "strategi_b_road_casing",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_b_road",
        "layout": {
            "line-cap": "round"
        },
        "minzoom" : 9,
        "paint": {
            "line-color": roads_colour_map.road.casing.b,
            "line-width": 2

        }
    },
    {
        /* B ROAD FILL */
        "id": "strategi_b_road_fill",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_b_road",
        "layout": {
            "line-cap": "round"
        },
        "minzoom" : 9,
        "paint": {
            "line-color": roads_colour_map.road.fill.b,
            "line-width": 1.66

        }
    },
    {
        /* A ROAD CASING */
        "id": "strategi_a_road_casing",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_a_road",
        "minzoom" : 9,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.casing.a,
            "line-width": 2.5

        }
    },
    {
        /* A ROAD FILL */
        "id": "strategi_a_road_fill",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_a_road",
        "minzoom" : 9,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.fill.a,
            "line-width": 2.1

        }
    },
    {
        /* PRIMARY ROAD CASING */
        "id": "strategi_primary_road_casing",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_primary",
        "minzoom" : 7,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.casing.primary,
            "line-width": 3

        }
    },
    {
        /* PRIMARY ROAD FILL */
        "id": "strategi_primary_road_fill",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_primary",
        "minzoom" : 0,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.fill.primary,
            "line-width": {
                "stops" :[[0,0.5],[5,1],[7,1.5]]
            }

        }
    },{
        /* MOTORWAY  CASING */
        "id": "strategi_motorway_casing",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_motorway",
        "minzoom" : 7,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.casing.motorway,
            "line-width": 4

        }
    },
    {
        /* MOTORWAY FILL */
        "id": "strategi_motorway_fill",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_motorway",
        "minzoom" : 0,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.fill.motorway,
            "line-width": {
                "stops" :[[0,1],[5,1.75],[7,2.5]]
            }

        }
    },
    {
        /* MOTORWAY CENTRE LINE */
        "id": "strategi_motorway_centreline",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "strategi_motorway",
        "minzoom" : 7,
        "layout": {
            "line-cap": "round"
        },
        "paint": {
            "line-color": roads_colour_map.road.fill.motorway_centre,
            "line-width": 0.75

        }
    },
    {
        "id": "strategi_motorway_road_label",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_transport_text",
        "minzoom": 8,
        "filter" :[
            "any",
            ["==","CODE",5031]
        ],
        "layout": {
            "icon-image" : "road_6",
            "icon-size" : 0.8,
            "text-size": 10,
            "text-font": [
                "Roboto Regular"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
        }
    },
    {
        "id": "strategi_main_road_label",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_transport_text",
        "minzoom": 10,
        "filter" :[
            "any",
            ["==","CODE",5031],
            ["==","CODE",5032],
            ["==","CODE",5033]
        ],
        "layout": {
            "icon-image" : "road_6",
            "icon-size" : 0.8,
            "text-size": 10,
            "text-font": [
                "Roboto Regular"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
        }
    },
    {
        "id": "strategi_b_road_label",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_transport_text",
        "minzoom": 10,
        "filter" :[
            "any",
            ["==","CODE",5034]
        ],
        "layout": {
            "icon-image" : "road_6",
            "icon-size" : 0.8,
            "text-size": 10,
            "text-font": [
                "Roboto Regular"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
        }
    },
    {
        "id": "strategi_town_labels",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_settlement_seed",
        //"maxzoom": 10,
        "filter" :[
            "all",
            ["==","CODE",5413]
        ],
        "layout": {

            "text-size": 12,
            "text-font": [
                "Roboto Regular"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
            "text-color": "#333",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 0.5
        }
    },
    {
        "id": "strategi_city_labels",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_settlement_seed",
        //"maxzoom": 10,
        "filter" :[
            "all",
            ["==","CODE",5427]
        ],
        "layout": {
            "text-size": {
                "base": 1.2,
                "stops": [
                    [
                        7,
                        24
                    ],
                    [
                        11,
                        34
                    ]
                ]
            },
            "text-font": [
                "Roboto Medium"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
            "text-color": "#333",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.2
        }
    },
    {
        "id": "strategi_village_labels",
        "type": "symbol",
        "source": "vector_layer_",
        "source-layer": "strategi_settlement_seed",
        "minzoom": 10,
        "filter" :[
            "all",
            ["==","CODE",5416]
        ],
        "layout": {

            "text-size": 10,
            "text-font": [
                "Roboto Regular"
            ],
            "text-field": "{NAME}",
            "text-rotation-alignment": "map"
        },
        "paint": {
            "text-color": "#333",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.5
        }
    },
    {
        /* MINOR ROAD CASING*/
        "id": "openmap_minor_road_casing",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "openmap_road",
        "layout": {
            "line-cap": "round"
        },
        "minzoom" : 9,
        "paint": {
            "line-color": roads_colour_map.road.casing.minor,
            "line-width": {
                "stops": [
                    [13,2],
                    [15,4],
                    [16,12],
                    [17,24]
                ]
            }

        }
    },
    {
        /* MINOR ROAD FILL*/
        "id": "openmap_minor_road_fill",
        "type": "line",
        "source": "vector_layer_",
        "source-layer": "openmap_road",
        "layout": {
            "line-cap": "round"
        },
        "minzoom" : 9,
        "paint": {
            "line-color": roads_colour_map.road.fill.minor,
            "line-width": {
                "stops": [
                    [13,1.8],
                    [15,3.8],
                    [16,11.8],
                    [17,22.8]
                ]
            }

        }
    }
];


///NOTE WELL fonts built locally via https://github.com/openmaptiles/fonts

var os_road_style = {
    version: 8,
    sources: {
        'vector_layer_': {
            type: 'vector',
            url: 'http://localhost:8080/data/os.json'
        }
    },
    layers: road_layers_config,
    "sprite": "https://openmaptiles.github.io/osm-bright-gl-style/sprite",
    "glyphs": "fonts/{fontstack}/{range}.pbf"
};

