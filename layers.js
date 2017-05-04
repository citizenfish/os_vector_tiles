var layers_config = [
  {
    "id": "highway-motorway-casing",
    "type": "line",
    "source": "vector_layer_",
    "source-layer": "motorway",
    "minzoom": 4,
    "maxzoom": 20,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#505050",
      "line-width": {
        "base": 3.0,
        "stops": [
           [4,0],
          [6.5,10],
          [20,22]
        ]
      },
      "line-opacity": {
        "stops": [
          [
            4,
            0
          ],
          [
            5,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "highway-motorway",
    "type": "line",
    "source": "vector_layer_",
    "source-layer": "motorway",
    "minzoom": 5,
    "maxzoom": 20,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#06B1CA",
      "line-width": {
        "base": 1.2,
        "stops": [
          [
            6.5,
            0
          ],
          [
            7,
            0.5
          ],
          [
            20,
            18
          ]
        ]
      }
    }
  },
  {
    "id": "openmap-building",
    "type": "fill",
    "source": "vector_layer_",
    "source-layer": "openmap_building",
    "minzoom": 13,
    "maxzoom": 20,
    "layout": {
      "visibility" : "visible"
    },
    "paint": {
      "fill-color" : "hsl(35, 8%, 85%)"
    }
  }
];