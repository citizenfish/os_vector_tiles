if (window.styles === undefined) {
    window.styles = {};
    window.colour_map = {};

}

window.colour_map =   {
    land : {
        outline : {
            black : "rgb(0,0,0)",
            black_trans: "rgb(0,0,0,0.25)"
        },
        fill : {
            water : "rgb(213,244,248)",
            land  : "rgb(249,248,243)",
            urban_region : "rgb(251,224,191)",
            woodland_region :  "rgb(209,240,206)",
            national_park :  "rgb(232,249,228)",
            lakes_region : "rgb(213,244,248)",
            foreshore_sand_region : "rgb(255,255,204)",
            foreshore_other_region : "rgb(239,231,189)",
            uk_tidal_water : "rgb(213,244,248)",
            uk_foreshore: "rgb(230,235,228)",
            uk_building: "rgb(254,222,183)",
            uk_important_building: "rgb(254,222,183,0.25)",
            air_transport : "rgb(255,255,127,0.25)",
            education : "rgb(219,127,255,0.25)",
            medical_centre: "rgb(127,255,136, 0.25)",
            road_transport: "rgb(255,138,127,0.25)",
            water_transport: "rgb(127,168,255,0.25)",
            uk_tidal_boundary: "rgb(0,169,202)"

        }
    },
    road: {
        casing: {
            motorway: "rgb(120,120,120)",
            primary: "rgb(119,119,119)",
            secondary: "rgb(119,119,119)",
            b: "rgb(119,119,119)",
            minor: '#505050',
            other: '#505050',
            uk_unclassified : "rgb(80,80,80)",
            uk_local : "rgb(80,80,80)",
            uk_b : "rgb(80,80,80)",
            uk_a : "rgb(80,80,80)",
            uk_motorway : "rgb(80,80,80)"
        },
        fill: {
            motorway: "rgb(6,177,202)",
            motorway_centre: "rgb(255,255,255)",
            primary: "rgb(136,194,152)",
            secondary: 'rgb(255,255,255)',
            a: "rgb(255,179,193)",
            b: "rgb(230,210,115)",
            minor: 'rgb(255,255,255)',
            other: 'rgb(255,255,255)',
            uk_roadtunnel : "rgb(80,80,80)",
            uk_unclassified : "rgb(255,255,255)",
            uk_unclassified_centreline : "rgb(80,80,80)",
            uk_local : "rgb(255,255,255)",
            uk_local_centreline : "rgb(80,80,80)",
            uk_b : "rgb(255,192,115)",
            uk_b_centreline : "rgb(80,80,80)",
            uk_a : "rgb(255,135,158)",
            uk_primary : "rgb(255,255,255)",
            uk_a_centreline : "rgb(255,255,255)",
            uk_motorway: "rgb(114,198,202)"
        },
        label :{
            motorway_junction : {
                colour: "#36B1D2"
            }
        }
    },
    rail :{
        fill : {
            rail_line : "rgb(100,100,100)"
        }
    },
    river : {
        fill : {
            river_line : "rgb(0,169,202)"
        }
    },
    label : {
        city: {
            city_label: "rgb(96,96,96)",
            city_halo: "rgb(255,255,255)"
        }
    }
};

window.styles.vbase = function(feature,resolution) {


    var colour_map =window.colour_map;
    var widths = {

        secondary: 1,
        unclassified : 0.5,
        river_small :  0.1,
        river_large : 0.2,
        railway_line: 0.2,
        building_outline : 0.2,
        tidal_boundary_high: 2,
        tidal_boundary_low: 1,
        surfacewater_line: 1.5,
        uk_unclassified_case: [[13,2], [14,2], [15,5],[17,12]],
        uk_unclassified_fill: [[13,1], [14,1.5], [15,4],[17,11]],
        uk_unclassified_centreline: [[13,0.5], [14,0.5], [15,1]],
        uk_local_case: [[13,2], [14,2], [15,5],[17,12]],
        uk_local_fill: [[13,1], [14,1.5], [15,4],[17,11]],
        uk_local_centreline: [[13,0.5], [14,0.5], [15,1]],
        uk_b_case: [[13,2], [14,3], [15,7],[17,14]],
        uk_b_fill: [[13,1], [14,2.5], [15,6],[17,13]],
        uk_b_centreline: [[13,0.5], [14,0.5], [15,1]],
        uk_a_case: [[6,1],[12,2.5],[13,2], [14,3], [15,7],[17,14]],
        uk_a_fill: [[6,0.5],[12,2],[13,1], [14,2.5], [15,6],[17,13]],
        uk_a_centreline: [[13,0.5], [14,0.5], [15,1]],
        uk_motorway_case: [[6,1],[13,3], [14,4], [15,8],[17,15]],
        uk_motorway_fill: [[6,0.5],[13,2], [14,3.5], [15,6],[17,13]],
        uk_motorway_centreline: [[13,0.5], [14,0.5], [15,1]]
    };

    var index_map = {
        land : 0,
        national_park : 1,
        urban_region : 2,
        woodland_region : 3,
        lakes_region : 4,

        river    : 10,
        rail     : 10,

        motorway : 20,
        primary : 25,

        uk_woodland : 26,
        uk_tidal_water : 27,
        uk_water_area:    28,
        uk_foreshore:     29,
        uk_building: 32,
        uk_functional_site : 31,
        uk_important_building: 30,
        uk_tidal_boundary: 33,
        uk_surface_water_line: 34,

        uk_road_unclassified_case: 71,
        uk_road_local_case: 72,
        uk_road_b_case: 73,
        uk_road_a_case: 74,
        uk_road_primary_case: 75,
        uk_road_motorway_case: 76,

        uk_roundabout_unclassified_case: 77,
        uk_roundabout_local_case: 78,
        uk_roundabout_b_case: 79,
        uk_roundabout_a_case: 80,
        uk_roundabout_primary_case: 81,
        uk_roundabout_motorway_case: 82,

        uk_road_unclassified_fill: 83,
        uk_road_local_fill: 84,
        uk_road_b_fill: 85,
        uk_road_a_fill: 86,
        uk_road_primary_fill: 87,
        uk_road_motorway_fill: 88,

        uk_road_unclassified_centre: 89,
        uk_road_local_centre: 90,
        uk_road_b_centre: 91,
        uk_road_a_centre: 92,
        uk_road_primary_centre: 93,
        uk_road_motorway_centre: 94,

        uk_roundabout_unclassified_fill: 95,
        uk_roundabout_local_fill: 96,
        uk_roundabout_b_fill: 97,
        uk_roundabout_a_fill: 98,
        uk_roundabout_primary_fill: 99,
        uk_roundabout_motorway_fill: 100
        
    };

    var line_dashes = {

        uk_road_tunnel : [5,5]
    };

    var padding = {
        uk_primary_overview : [[6,[50,50,50,50]], [10, [100,100,100,100], [13,[200,200,200,200]]]]
    };

    var layer_styles = {
        world_coast                 : [{fcolor : colour_map.land.fill.land, zIndex : index_map.land}],
        national_park               : [{fcolor : colour_map.land.fill.national_park, zIndex : index_map.national_park}],
        uk_urban_region             : [{fcolor : colour_map.land.fill.urban_region, zIndex : index_map.urban_region}],
        uk_woodland_region          : [{fcolor : colour_map.land.fill.woodland_region, zIndex : index_map.woodland_region}],
        uk_lakes_region             : [{fcolor : colour_map.land.fill.lakes_region, zIndex : index_map.lakes_region}],
        uk_motorway_overview        : [{scolor : colour_map.road.casing.motorway, zIndex : index_map.motorway, width : widths.uk_motorway_case},{scolor : colour_map.road.fill.motorway, zIndex : index_map.motorway + 1, width : widths.uk_motorway_fill}],

        uk_secondary_overview       : [{scolor : colour_map.road.casing.secondary, zIndex : index_map.primary, width : widths.secondary},{scolor : colour_map.road.fill.secondary, zIndex : index_map.primary + 1, width : widths.secondary -0.5}],
        uk_unclassified_overview    : [{scolor : colour_map.road.casing.secondary, zIndex : index_map.primary, width : widths.unclassified}],
        uk_railway_line             : [{scolor : colour_map.rail.fill.rail_line, zIndex : index_map.rail, width : widths.railway_line}],
        uk_woodland                 : [{fcolor : colour_map.land.fill.woodland_region, zIndex : index_map.uk_woodland}],
        uk_tidal_water              : [{fcolor : colour_map.land.fill.uk_tidal_water, zIndex : index_map.uk_tidal_water}],
        uk_water_area               : [{fcolor : colour_map.land.fill.uk_water_area, zIndex : index_map.uk_water_area}],
        uk_foreshore                : [{fcolor : colour_map.land.fill.uk_foreshore, zIndex : index_map.uk_foreshore}],
        uk_building                 : [{fcolor : colour_map.land.fill.uk_building, zIndex : index_map.uk_building, scolor: colour_map.land.outline.black, width: widths.building_outline}],
        uk_important_building       : [{fcolor : colour_map.land.fill.uk_important_building, scolor: colour_map.land.outline.black_trans, width: widths.building_outline, zIndex : index_map.uk_important_building}],
        uk_surfacewater_line        : [{fcolour: colour_map.river.fill.river_line, width : widths.uk_surface_water_line, zIndex :index_map.uk_surface_water_line}],
        uk_roadtunnel               : [{fcolour: colour_map.road.fill.uk_roadtunnel, linedash: line_dashes.uk_road_tunnel, zIndex: index_map.uk_road_tunnel}],
        uk_primary_overview         : function(properties){

                return [
                    {text : properties.roadnumber, padding: padding.uk_primary_overview ,textFill:colour_map.road.fill.primary, textColor:colour_map.road.fill.primary, scolor: colour_map.road.casing.primary, zIndex : index_map.primary, width : widths.uk_a_case},
                    {scolor : colour_map.road.fill.primary, zIndex : index_map.primary + 1, width : widths.uk_a_fill}]
        },

        uk_road                     : function(properties,resolution) {

            var styles = [];
            ///UNCLASSIFIED
            if(['Guided Busway Carriageway', 'Restricted Local Access Road', 'Shared Use Carriageway'].indexOf(properties.CLASSIFICA) !== -1 ) {

                    //Case
                    styles.push({fcolor: colour_map.road.casing.uk_unclassified, width: widths.uk_unclassified_case, zIndex: index_map.uk_road_unclassified_case});
                    //Fill
                    styles.push({fcolor: colour_map.road.fill.uk_unclassified, width: widths.uk_unclassified_fill, zIndex: index_map.uk_road_unclassified_fill});

                    if(properties.CLASSIFICA == 'Guided Busway Carriageway') {
                        styles.push({fcolor: colour_map.road.fill.uk_unclassified_centreline, width: widths.uk_unclassified_centreline, zIndex: index_map.uk_road_unclassified_centre});
                    }
            }
            ///LOCAL
            if(['Local Access Road', 'Local Road', 'Minor Road, Collapsed Dual Carriageway', 'Minor Road'].indexOf(properties.CLASSIFICA) !== -1 ) {

                //Case
                styles.push({fcolor: colour_map.road.casing.uk_local, width: widths.uk_local_case, zIndex: index_map.uk_road_local_case});
                //Fill
                styles.push({fcolor: colour_map.road.fill.uk_local, width: widths.uk_local_fill, zIndex: index_map.uk_road_local_fill});

                if(properties.CLASSIFICA == 'Minor Road, Collapsed Dual Carriageway') {
                    styles.push({fcolor: colour_map.road.fill.uk_local_centreline, width: widths.uk_local_centreline, zIndex: index_map.uk_road_local_centre});
                }
            }

            ///B
            if(['B Road, Collapsed Dual Carriageway', 'B Road'].indexOf(properties.CLASSIFICA) !== -1 ) {

                //Case
                styles.push({fcolor: colour_map.road.casing.uk_b, width: widths.uk_b_case, zIndex: index_map.uk_road_b_case});
                //Fill
                styles.push({fcolor: colour_map.road.fill.uk_b, width: widths.uk_b_fill, zIndex: index_map.uk_road_b_fill});

                if(properties.CLASSIFICA == 'B Road, Collapsed Dual Carriageway') {
                    styles.push({fcolor: colour_map.road.fill.uk_b_centreline, width: widths.uk_b_centreline, zIndex: index_map.uk_road_b_centre});
                }
            }

            //A
            if(['A Road, Collapsed Dual Carriageway', 'A Road','Primary Road, Collapsed Dual Carriageway','Primary Road'].indexOf(properties.CLASSIFICA) !== -1 ) {

                //Case
                styles.push({fcolor: colour_map.road.casing.uk_a, width: widths.uk_a_case, zIndex: index_map.uk_road_a_case});
                //Fill
                if(['A Road, Collapsed Dual Carriageway', 'A Road'].indexOf(properties.CLASSIFICA)) {
                    styles.push({fcolor: colour_map.road.fill.uk_a, width: widths.uk_a_fill, zIndex: index_map.uk_road_a_fill});
                } else {
                    styles.push({fcolor: colour_map.road.fill.uk_primary, width: widths.uk_a_fill, zIndex: index_map.uk_road_a_fill});
                }

                if(properties.CLASSIFICA == 'A Road, Collapsed Dual Carriageway' || properties.CLASSIFICA == 'Primary Road, Collapsed Dual Carriageway') {
                    styles.push({fcolor: colour_map.road.fill.uk_a_centreline, width: widths.uk_a_centreline, zIndex: index_map.uk_road_a_centre});
                }
            }

            ///MOTORWAY
            if(['Motorway, Collapsed Dual Carriageway', 'Motorway'].indexOf(properties.CLASSIFICA) !== -1 ) {

                //Case
                styles.push({fcolor: colour_map.road.casing.uk_motorway, width: widths.uk_motorway_case, zIndex: index_map.uk_road_motorway_case});
                //Fill
                styles.push({fcolor: colour_map.road.fill.uk_motorway, width: widths.uk_motorway_fill, zIndex: index_map.uk_road_motorway_fill});

                if(properties.CLASSIFICA == 'Motorway, Collapsed Dual Carriageway') {
                    styles.push({fcolor: colour_map.road.fill.uk_motorway_centreline, width: widths.uk_motorway_centreline, zIndex: index_map.uk_road_motorway_centre});
                }
            }

            return styles;
        },
        uk_river_line : function(properties) {

            if([5211,5221,5230].indexOf(properties['CODE']) !== -1) {
                return [{scolor : colour_map.river.fill.river_line, zIndex : index_map.river, width : widths.river_large}];
            }
            return [{scolor : colour_map.river.fill.river_line, zIndex : index_map.river, width : widths.river_small}];
        },
        uk_transport_text_ignore : function(properties,resolution) {

            //Motorway label
            if(properties['CODE'] === 5031) {
                return [{text: properties['NAME'], labelOnly: true, textFill: colour_map.road.fill.motorway, textColor: colour_map.road.fill.motorway_centre}];
            }

            //Primary road label
            if([5032,5033].indexOf(properties['CODE']) !== -1 && resolution < 400) {
                return [{text: properties['NAME'], labelOnly: true, textFill: colour_map.road.fill.primary, textColor: colour_map.road.fill.motorway_centre}];
            }
            return [];
        },
        uk_settlement_seed : function(properties) {

            //City Labels
            if(properties['CODE'] === 5427) {
                return [{text: properties['NAME'], labelOnly: true, font: '12px sans-serif', textFill: colour_map.label.city.city_label, textColor: colour_map.label.city.city_halo}];
            }
            return [];
        },
        uk_functionalsite : function(properties) {

            var colours  = {
                "Air Transport" :   colour_map.land.fill.air_transport,
                "Education"     :   colour_map.land.fill.education,
                "Medical Care"  :   colour_map.land.fill.medical_centre,
                "Road Transport":   colour_map.land.fill.road_transport,
                "Water Transport":  colour_map.land.fill.water_transport
            };

            return [{fcolor : colours[properties.SITETHEME], zIndex : index_map.uk_functional_site}];

        },
        uk_tidal_boundary : function(properties) {
            return [ {fcolour : colour_map.land.fill.uk_tidal_boundary, width : properties.CLASSIFICA = 'High Water Mark' ? widths.tidal_boundary_high : widths.tidal_boundary_low, zIndex: index_map.uk_tidal_boundary}];
        }

    };

    var style_maker = function(params) {


        //Set item based on zoom level if it comes in as an array

        for (var i in params) {

            if(Array.isArray(params[i]) && i !== 'linedash') {
                var val = params[i][0][1];
                for(var j =0; j < params[i].length; j++) {
                    if(params[i][j][0] > map.getView().getZoom()){
                        break;
                    }
                    val = params[i][j][1];
                }
                params[i] = val;
            }

        }

        var fill =  new ol.style.Fill({ color : params.fcolor || ''}),
            stroke = new ol.style.Stroke({color : params.scolor || params.fcolor, width : params.width || 1});

        //TEXT LABEL
        if(params.text !== '') {
            var textStyle = new ol.style.Text({
                font : params.font || '10px sans-serif',
                fill : new ol.style.Fill({color: params.textFill || 'rgb(0,0,0)'}),
                stroke: new ol.style.Stroke({color: params.textColor || 'rgb(0,0,0)', width: params.textWidth || 1}),
                text: params.text,
                padding:  params.padding || [20,20,20,20]
            });

            if(params.labelOnly) {
                return new ol.style.Style({text : textStyle});
            } else {
                return new ol.style.Style({fill : fill, stroke : stroke, zIndex : params.zIndex || 0, text : textStyle});
            }

        }

        //LINE DASH
        if(params.linedash) {
            stroke.linedash = params.linedash;
        }

        return  new ol.style.Style({fill : fill, stroke : stroke, zIndex : params.zIndex || 0});

    };

    //NOTE WELL resolution is metres per pixel
    //Units are in pixels
    var properties = feature.getProperties();

    var style_array = [];

    if(layer_styles[properties.layer] !== undefined && Array.isArray(layer_styles[properties.layer])) {
        for(var i = 0; i < layer_styles[properties.layer].length; i++) {
            style_array.push(new style_maker(layer_styles[properties.layer][i]));
        }
    }

    if(layer_styles[properties.layer] !== undefined && typeof(layer_styles[properties.layer]) === "function") {

        var styles = layer_styles[properties.layer](properties,resolution);
        for(var j = 0; j < styles.length; j++) {
            style_array.push(new style_maker(styles[j]));
        }

    }

    return style_array;
};