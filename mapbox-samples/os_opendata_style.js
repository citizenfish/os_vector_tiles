var colour_map = {
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
            minor: '#505050'
        },
        fill: {
            motorway: "rgb(153,165,255)",
            motorway_centre: "rgb(255,255,255)",
            primary: "rgb(136,194,152)",
            secondary: '#FFFFFF',
            a: "rgb(255,179,193)",
            b: "rgb(230,210,115)",
            minor: '#D3D3D3'
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

var layers_config = [
{   /* BACKGROUND OF MAP IS SET TO WATER */
    "id": "background",
    "type": "background",
    "paint": {
        "background-color": colour_map.land.fill.water
    }
},
/*
{
  // FORESHORE REGION SAND 
      "id": "strategi_foreshore_region_sand",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "strategi_foreshore_region",
      "filter": [
        "all",
        [
          "==",
          "CODE",
          5120
        ]
      ],
      "paint": {
        "fill-color": colour_map.land.fill.foreshore_sand_region
      }
},
{
  // FORESHORE REGION OTHER 
      "id": "strategi_foreshore_region_other",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "strategi_foreshore_region",
      "filter": [
        "all",
        [
          "==",
          "CODE",
          5122
        ]
      ],
      "paint": {
        "fill-color": colour_map.land.fill.foreshore_other_region
      }
}, */

{
	/* LAND POLYGON COLOUR */
    "id": "uk_land",
    "type": "fill",
    "source": "vector_layer_",
    "source-layer": "strategi_coast",
    "paint": {
        "fill-color": colour_map.land.fill.land
    }
},
{
	/* URBAN REGION */
      "id": "strategi_urban_region",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "strategi_urban_region",
      //"minzoom" : 9,
      "paint": {
        "fill-color": colour_map.land.fill.urban_region
      }
},
{
	/* WOODLAND REGION */
      "id": "strategi_woodland_region",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "strategi_woodland_region",
      "paint": {
        "fill-color": colour_map.land.fill.woodland_region
      }
},
{
	/* LAKES REGION */
      "id": "strategi_lakes_region",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "strategi_lakes_region",
      "paint": {
        "fill-color": colour_map.land.fill.lakes_region
      }
},
{
	/* RIVER MINOR */
      "id": "strategi_river_line_minor",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "strategi_river_line",
      "filter": [
        "any",
        ["==","CODE",5211],
        ["==","CODE",5221],
        ["==","CODE",5230],
      ],
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 9,
      "paint": {
        "line-color":colour_map.land.fill.river_line,
        "line-width": 0.8
      }
},
{
	/* RIVER LARGE */
      "id": "strategi_river_line_large",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "strategi_river_line",
      "filter": [
        "any",
        ["==","CODE",5212],
        ["==","CODE",5213],
        ["==","CODE",5222],
      ],
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 9,
      "paint": {
        "line-color":colour_map.land.fill.river_line,
        "line-width": 2
      }
},
{
	/* RIVER CANAL */
      "id": "strategi_river_line_canal",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "strategi_river_line",
      "filter": [
        "any",
        ["==","CODE",5240],
        ["==","CODE",5241],
        ["==","CODE",5242],
      ],
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 9,
      "paint": {
        "line-color":colour_map.land.fill.river_line,
        "line-width": 1.5,
        "line-dasharray": [
          3.00,
          2.00
        ]
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
        "line-color": colour_map.road.fill.minor,
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
        "line-color": colour_map.road.casing.b,
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
        "line-color": colour_map.road.fill.b,
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
        "line-color": colour_map.road.casing.a,
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
        "line-color": colour_map.road.fill.a,
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
        "line-color": colour_map.road.casing.primary,
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
        "line-color": colour_map.road.fill.primary,
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
        "line-color": colour_map.road.casing.motorway,
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
        "line-color": colour_map.road.fill.motorway,
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
        "line-color": colour_map.road.fill.motorway_centre,
        "line-width": 0.75
        
      }
},
{
	/* RAILWAY LINE */
      "id": "strategi_railway_line",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "strategi_railway_line",
      "minzoom" : 9,
      "filter" :[
      	"all",
      	["!=","CODE",5514]
      ],
      "minzoom" : 7,
      "layout": {
        "line-cap": "butt"
      },
      "paint": {
        "line-color": colour_map.rail.fill.line,
        "line-width": 0.75
        
      }
},




/*{
      "id": "motorway_junction_label",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "strategi_transport_text",
      "minzoom": 8,
      "filter" :[
      	"any",
      	["==","CODE",5043],
      	["==","CODE",5042]
      ],
      "layout": {
      	"icon-image" : "road_3",
      	"icon-size" : 0.8,
        "text-size": 10,
        "text-font": [
          "Open Sans Regular"
        ],
        "text-field": "J{NAME}",
        "text-rotation-alignment": "map"
      },
      "paint": {
      }
},
*/
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
/*
{
      "id": "strategi_area_labels",
      "type": "symbol",
      "source": "vector_layer_",
      "source-layer": "strategi_admin_seed",
      "maxzoom": 10,
      
      "layout": {
      	
        "text-size": 12,
        "text-font": [
          "Roboto Regular"
        ],
        "text-field": "{ADMIN_NAME}",
        "text-rotation-alignment": "map"
      },
      "paint": {
      	   	"text-color": "#333",
    		"text-halo-color": "rgba(255,255,255,0.8)",
    		"text-halo-width": 1.5
      }
},
*/

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

//** OPENMAP STYLES DOWN HERE */
{
    //BUILDINGS
    "id": "building",
    "type": "fill",
    "source": "vector_layer_",
    "source-layer": "openmap_building",
    "minzoom": 13,
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
    "minzoom": 13,
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
  /* WOODLAND */
      "id": "openmap_woodland",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "openmap_woodland",
      "paint": {
        "fill-color": colour_map.land.fill.woodland_region
      }
},
{
  /* TIDAL WATER */
      "id": "openmap_tidalwater",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "openmap_tidalwater",
      "paint": {
        "fill-color": colour_map.land.fill.water
      }
},
{
  /* SURFACEWATER AREA*/
      "id": "openmap_surfacewater_area",
      "type": "fill",
      "source": "vector_layer_",
      "source-layer": "openmap_surfacewaterarea",
      "paint": {
        "fill-color": colour_map.land.fill.lakes_region
      }
},
{
    //FUNCTIONAL SITE
    "id": "openmap_functionalsite-top",
    "type": "fill",
    "source": "vector_layer_",
    "source-layer": "openmap_functionalsite",
    "minzoom": 13,
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
    "minzoom": 13,
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
  /* MINOR ROAD CASING*/
      "id": "openmap_minor_road_casing",
      "type": "line",
      "source": "vector_layer_",
      "source-layer": "openmap_road",
      "filter" :[
        "any",
        ["==","CLASSIFICA","Minor Road"]
      ],
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 9,
      "paint": {
        "line-color": colour_map.road.casing.minor,
        "line-width": {
          "stops": [
                [13,2],
                [15,5],
                [16,14],
                [17,36]
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
      "filter" :[
        "any",
        ["==","CLASSIFICA","Minor Road"]
      ],
      "layout": {
        "line-cap": "round"
      },
      "minzoom" : 9,
      "paint": {
        "line-color": colour_map.road.fill.minor,
        "line-width": {
          "stops": [
                [13,1.8],
                [15,4.8],
                [16,13.8],
                [17,34.8]
            ]
        }
        
      }
}
];


///NOTE WELL fonts built locally via https://github.com/openmaptiles/fonts

var os_style = {
    version: 8,
    sources: {
        'vector_layer_': {
            type: 'vector',
            url: 'http://localhost:8080/data/os.json'
        }
    },
    layers: layers_config,
    "sprite": "https://openmaptiles.github.io/osm-bright-gl-style/sprite",
    "glyphs": "fonts/{fontstack}/{range}.pbf"
};

