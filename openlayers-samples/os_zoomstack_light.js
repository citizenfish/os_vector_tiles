window.style.mb_stylem = {
  "version": 8,
  "name": "OS Light",
  "metadata": {
    "mapbox:autocomposite": true,
    "mapbox:type": "template",
    "mapbox:print": {
      "units": "in",
      "width": 8.5,
      "height": 11,
      "resolution": 300,
      "format": "png"
    },
    "mapbox:sdk-support": {
      "js": "0.45.0",
      "android": "6.0.0",
      "ios": "4.0.0"
    },
    "mapbox:groups": {
      "95de6b6a9598813bfa2767abe8c13e6b": {
        "name": "Names Group",
        "collapsed": false
      },
      "b70308493053f7bbb91b528ae2a71241": {
        "name": "Road Level 0",
        "collapsed": true
      },
      "544b2a8d8b4148c11cbdbcbf6ea8173d": {
        "name": "Road Level 1",
        "collapsed": true
      }
    }
  },
  "center": [
    -1.4023986802819763,
    50.87045744102329
  ],
  "zoom": 15.568798662646008,
  "bearing": 0,
  "pitch": 39.00000000000001,
  "light": {
    "intensity": 0.2
  },
  "sources": {
    "composite": {
      "url": "mapbox://ADD SOURCE URL HERE",
      "type": "vector"
    }
  },
  "sprite": "mapbox://sprites/geodataviz/cjh68ksxr3tbw2rol4ra78lew",
  "glyphs": "mapbox://fonts/geodataviz/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {},
      "paint": {
        "background-color": "#f1efec"
      }
    },
    {
      "id": "sea",
      "type": "fill",
      "source": "composite",
      "source-layer": "sea",
      "layout": {},
      "paint": {
        "fill-color": "#c5cdd0"
      }
    },
    {
      "id": "foreshore",
      "type": "fill",
      "source": "composite",
      "source-layer": "foreshore",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "#e9e7e2"
      }
    },
    {
      "id": "national-parks",
      "type": "fill",
      "source": "composite",
      "source-layer": "national-parks",
      "minzoom": 5,
      "maxzoom": 12,
      "layout": {},
      "paint": {
        "fill-color": "#d8ddd4",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              5,
              0.7
            ],
            [
              9,
              0.5
            ],
            [
              12,
              0.1
            ]
          ]
        }
      }
    },
    {
      "id": "built up areas",
      "type": "fill",
      "source": "composite",
      "source-layer": "buildings",
      "minzoom": 5,
      "maxzoom": 11,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#e6e5e1",
        "fill-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.2,
          11,
          0.7
        ]
      }
    },
    {
      "id": "sites",
      "type": "fill",
      "source": "composite",
      "source-layer": "sites",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "hsl(34, 34%, 90%)",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "greenspaces",
      "type": "fill",
      "source": "composite",
      "source-layer": "greenspaces",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "hsl(94, 17%, 92%)",
        "fill-outline-color": "#d1e7c3",
        "fill-opacity": 1,
        "fill-antialias": false
      }
    },
    {
      "id": "woodland",
      "type": "fill",
      "source": "composite",
      "source-layer": "woodland",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "#d8ddd4",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              6,
              0.3
            ],
            [
              11,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "waterlines",
      "type": "line",
      "source": "composite",
      "source-layer": "waterlines",
      "minzoom": 5,
      "filter": [
        "in",
        "type",
        "Surface",
        "surface"
      ],
      "layout": {},
      "paint": {
        "line-color": "#c5cdd0"
      }
    },
    {
      "id": "surfacewater",
      "type": "fill",
      "source": "composite",
      "source-layer": "surfacewater",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "#c5cdd0"
      }
    },
    {
      "id": "buildings",
      "type": "fill",
      "source": "composite",
      "source-layer": "buildings",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "hsl(48, 10%, 87%)"
      }
    },
    {
      "id": "roads 0 Restricted Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "Restricted"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          3.5,
          17,
          7,
          22,
          60
        ],
        "line-dasharray": [
          2,
          0.5
        ]
      }
    },
    {
      "id": "roads 0 Local Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "Local"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          4.5,
          17,
          16,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 0 Minor Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "Minor"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 0 B Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "B Road"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 0 A Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "A Road"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 0 Primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "Primary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          6,
          17,
          22,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 0 Motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "0"
        ],
        [
          "==",
          "type",
          "Motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          6,
          17,
          22,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 Local Road case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Local"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          8.5,
          17,
          24,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 Minor Road case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Minor"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          9,
          17,
          28,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 B Road case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "B Road"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          9,
          17,
          28,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 A Road case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "A Road"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          9,
          17,
          28,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 Primary case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Primary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          10,
          17,
          32,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 Motorway case",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Motorway"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          6,
          15,
          10,
          17,
          32,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 1 Restricted Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Restricted"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          3.5,
          17,
          7,
          22,
          60
        ],
        "line-dasharray": [
          2,
          0.5
        ]
      }
    },
    {
      "id": "roads 1 Local Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Local"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          4.5,
          17,
          16,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 Minor Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Minor"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 B Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "B Road"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 A Road",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "A Road"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5.5,
          17,
          20,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 Primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Primary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          6,
          17,
          22,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 1 Motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "level",
          "1"
        ],
        [
          "==",
          "type",
          "Motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          6,
          17,
          22,
          22,
          100
        ]
      }
    },
    {
      "id": "roads 2 case",
      "type": "line",
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "==",
        "level",
        "2"
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f2f0ed",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          2.5,
          14,
          3,
          15,
          9,
          17,
          24,
          22,
          120
        ]
      }
    },
    {
      "id": "roads 2",
      "type": "line",
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "==",
        "level",
        "2"
      ],
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          0.35,
          10,
          1.75,
          14,
          2,
          15,
          5,
          17,
          18,
          22,
          100
        ]
      }
    },
    {
      "id": "rail",
      "type": "line",
      "source": "composite",
      "source-layer": "rail",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "line-color": "#a7a39b",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          [
            "match",
            [
              "get",
              "type"
            ],
            "Multi Track",
            0.6,
            "Single Track",
            0.5,
            "Narrow Gauge",
            0.5,
            "tunnel",
            0.6,
            0.5
          ],
          17,
          [
            "match",
            [
              "get",
              "type"
            ],
            "Multi Track",
            2,
            "Single Track",
            1.5,
            "Narrow Gauge",
            1,
            "tunnel",
            1,
            1
          ]
        ],
        "line-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          0.2,
          14,
          1
        ]
      }
    },
    {
      "id": "boundaries",
      "type": "line",
      "source": "composite",
      "source-layer": "boundaries",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "line-width": 1,
        "line-color": "hsl(206, 0%, 81%)",
        "line-opacity": 1
      }
    },
    {
      "id": "etl",
      "type": "line",
      "source": "composite",
      "source-layer": "etl",
      "minzoom": 5,
      "layout": {},
      "paint": {
        "line-dasharray": [
          10,
          5
        ],
        "line-color": "hsl(0, 32%, 27%)",
        "line-opacity": 0.2,
        "line-width": 1
      }
    },
    {
      "id": "road numbers",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "!in",
        "type",
        "Motorway",
        "Primary"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{number}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          7,
          15,
          11,
          22,
          20
        ],
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Primary road numbers",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "==",
        "type",
        "Primary"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{number}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          8,
          15,
          11,
          22,
          20
        ],
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Regular"
        ]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "text-color": "#6a6f73",
        "text-halo-blur": 0
      }
    },
    {
      "id": "Motorway numbers",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "==",
        "type",
        "Motorway"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{number}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          8,
          15,
          11,
          22,
          20
        ],
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Regular"
        ]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "text-color": "#6a6f73",
        "text-halo-blur": 0
      }
    },
    {
      "id": "road names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "roads",
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          8,
          15,
          10,
          22,
          20
        ],
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-max-angle": 35
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Motorway Junctions",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 14,
      "filter": [
        "==",
        "type",
        "Motorway Junction"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          14,
          11,
          22,
          20
        ]
      },
      "paint": {
        "text-halo-color": "hsl(207, 0%, 61%)",
        "text-color": "#fff",
        "text-halo-blur": 0,
        "text-halo-width": 10
      }
    },
    {
      "id": "Greenspace names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 13,
      "filter": [
        "==",
        "type",
        "Greenspace"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          9,
          14,
          11
        ],
        "text-line-height": 1
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#89a489"
      }
    },
    {
      "id": "Sites names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 13,
      "filter": [
        "==",
        "type",
        "Sites"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          9,
          14,
          11
        ],
        "text-line-height": 1
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Landform names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Landform"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          9,
          14,
          11
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Landcover names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Landcover"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          9,
          14,
          11
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Water names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Water"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          9,
          14,
          11
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "hsl(207, 18%, 51%)"
      }
    },
    {
      "id": "Woodland names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Woodland"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          9,
          14,
          11
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#89a489"
      }
    },
    {
      "id": "Small Settlement names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Small Settlements"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          9,
          14,
          11
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Suburban names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Suburban Area"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          10.5,
          14,
          14
        ],
        "text-padding": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          6,
          14,
          2
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73",
        "text-opacity": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          0.8,
          14,
          1
        ]
      }
    },
    {
      "id": "railwaystation names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "railwaystation",
      "minzoom": 5,
      "layout": {
        "text-line-height": 1,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          9,
          15,
          13
        ],
        "icon-image": [
          "match",
          [
            "get",
            "type"
          ],
          "Railway Station",
          "RS",
          "London Underground Station",
          "UG",
          "Light Rapid Transit Station",
          "LRTS",
          "Light Rapid Transit Station And London Underground Station",
          "LRTS-UG",
          "Light Rapid Transit Station And Railway Station",
          "RS-LRTS",
          "Railway Station And London Underground Station",
          "RS-UG",
          ""
        ],
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          "match",
          [
            "get",
            "type"
          ],
          "Railway Station",
          [
            "literal",
            [
              1,
              0
            ]
          ],
          "Light Rapid Transit Station",
          [
            "literal",
            [
              1,
              0
            ]
          ],
          "London Underground Station",
          [
            "literal",
            [
              1,
              0
            ]
          ],
          "Railway Station And London Underground Station",
          [
            "literal",
            [
              1.7,
              0
            ]
          ],
          "Light Rapid Transit Station And London Underground Station",
          [
            "literal",
            [
              1.5,
              0
            ]
          ],
          "Light Rapid Transit Station And Railway Station",
          [
            "literal",
            [
              1.7,
              0
            ]
          ],
          [
            "literal",
            [
              0,
              0
            ]
          ]
        ],
        "icon-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          0.4,
          15,
          1
        ],
        "text-anchor": "left",
        "text-field": [
          "to-string",
          [
            "get",
            "name"
          ]
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "airport names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "airports",
      "minzoom": 5,
      "layout": {
        "text-line-height": 1,
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          9,
          15,
          13
        ],
        "icon-image": "Airport",
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-justify": "left",
        "text-offset": [
          0.8,
          0
        ],
        "icon-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          0.8,
          15,
          1
        ],
        "text-anchor": "left",
        "text-field": [
          "to-string",
          [
            "get",
            "name"
          ]
        ]
      },
      "paint": {
        "text-halo-blur": 1,
        "text-halo-width": 1,
        "text-halo-color": "#f1efec",
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Village names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "in",
        "type",
        "Hamlet",
        "Village"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          9,
          9,
          14,
          15
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "Town names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Town"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          7,
          10,
          14,
          18
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#6a6f73"
      }
    },
    {
      "id": "City names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "City"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          6,
          10,
          14,
          20
        ]
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#55595c"
      }
    },
    {
      "id": "National Park names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "National Park"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          6,
          8,
          14,
          15
        ],
        "text-letter-spacing": 0.05,
        "text-line-height": 1
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#89a489",
        "text-opacity": 0.8
      }
    },
    {
      "id": "Capital City names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "filter": [
        "==",
        "type",
        "Capital"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          11,
          14,
          26
        ],
        "text-letter-spacing": 0.05
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#55595c"
      }
    },
    {
      "id": "Country names",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
      },
      "source": "composite",
      "source-layer": "names",
      "minzoom": 5,
      "maxzoom": 10,
      "filter": [
        "==",
        "type",
        "Country"
      ],
      "layout": {
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name}",
        "text-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          18,
          10,
          30
        ],
        "text-letter-spacing": 0.2,
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-color": "#f1efec",
        "text-halo-width": 1,
        "text-halo-blur": 1,
        "text-color": "#55595c",
        "text-opacity": 0.4
      }
    }
  ],
  "created": "2018-05-14T12:40:22.163Z",
  "id": "cjh68ksxr3tbw2rol4ra78lew",
  "modified": "2018-05-16T20:41:04.682Z",
  "owner": "Ordnance Survey",
  "visibility": "public",
  "draft": false
};