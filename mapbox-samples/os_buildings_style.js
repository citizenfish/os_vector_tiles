var buildings_colour_map = {
    land : {
        outline : {

        },
        fill : {
            water : "rgb(158,189,255)",
            land  : "rgb(255,255,255)",
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

var buildings_layers_config = [
    {   /* BACKGROUND OF MAP IS SET TO WATER */
        "id": "background",
        "type": "background",
        "paint": {
            "background-color": buildings_colour_map.land.fill.water
        }
    },


    {
        /* LAND POLYGON COLOUR */
        "id": "uk_land",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "strategi_coast",
        "paint": {
            "fill-color": buildings_colour_map.land.fill.land
        }
    },
    {
        /* URBAN REGION */
        "id": "strategi_urban_region",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "strategi_urban_region",
        "paint": {
            "fill-color": buildings_colour_map.land.fill.urban_region
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
            "text-halo-width": 1.5
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
                        14
                    ],
                    [
                        11,
                        24
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
        //BUILDINGS
        "id": "building",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "openmap_building",
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        "#f2eae2"
                    ],
                    [
                        16,
                        "#dfdbd7"
                    ]
                ]
            },
            "fill-antialias": true
        }
    },
    {
        //BUILDINGS
        "id": "building-top",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "openmap_building",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-translate": {
                "base": 1,
                "stops": [
                    [
                        14, [
                        0,
                        0
                    ]
                    ],
                    [
                        16, [-2, -2]
                    ]
                ]
            },
            "fill-outline-color": "#dfdbd7",
            "fill-color": "#f2eae2",
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        13,
                        0
                    ],
                    [
                        16,
                        1
                    ]
                ]
            }
        }
    },
    {
        //FUNCTIONAL SITE
        "id": "openmap_functionalsite-top",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "openmap_functionalsite",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-translate": {
                "base": 1,
                "stops": [
                    [
                        14, [
                        0,
                        0
                    ]
                    ],
                    [
                        16, [-2, -2]
                    ]
                ]
            },
            "fill-outline-color": "#dfdbd7",
            "fill-color": "#f2eae2",
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        13,
                        0
                    ],
                    [
                        16,
                        1
                    ]
                ]
            }
        }
    },
    {
        //FUNCTIONAL SITE
        "id": "openmap_functionalsite",
        "type": "fill",
        "source": "vector_layer_",
        "source-layer": "openmap_functionalsite",
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        "#f2eae2"
                    ],
                    [
                        16,
                        "#dfdbd7"
                    ]
                ]
            },
            "fill-antialias": true
        }
    }
];


///NOTE WELL fonts built locally via https://github.com/openmaptiles/fonts

var os_buildings_style = {
    version: 8,
    sources: {
        'vector_layer_': {
            type: 'vector',
            url: 'http://localhost:8080/data/os.json'
        }
    },
    layers: buildings_layers_config,
    "sprite": "https://openmaptiles.github.io/osm-bright-gl-style/sprite",
    "glyphs": "fonts/{fontstack}/{range}.pbf"
};

