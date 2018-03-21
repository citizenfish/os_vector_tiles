var colour_map = {
    land : {
        outline : {

        },
        fill : {
            water : "rgb(158,189,255)",
            land  : "rgb(249,248,243)",
            urban_region : "rgb(251,224,191)",
            woodland_region :  "rgb(209,240,206)",
            national_park :  "rgb(232,249,228)",
            lakes_region : "rgb(213,244,248)",
            foreshore_sand_region : "rgb(255,255,204)",
            foreshore_other_region : "rgb(239,231,189)",

        }
    },
    road: {
        casing: {
            motorway: "rgb(120,120,120)",
            primary: "rgb(119,119,119)",
            secondary: "rgb(119,119,119)",
            b: "rgb(119,119,119)",
            minor: '#505050',
            other: '#505050'
        },
        fill: {
            motorway: "rgb(6,177,202)",
            motorway_centre: "rgb(255,255,255)",
            primary: "rgb(136,194,152)",
            secondary: 'rgb(255,255,255)',
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

var widths = {
    motorway : 4,
    primary: 3,
    secondary: 1,
    unclassified : 0.5,
    river_small :  0.1,
    river_large : 0.2,
    railway_line: 0.2
};

var index_map = {
    "land" : 0,
    "national_park" : 1,
    "urban_region" : 2,
    "woodland_region" : 3,
    "lakes_region" : 4,

    "river"    : 10,
    "rail"     : 10,

    "motorway" : 20,
    "primary" : 25,


};


var layer_styles = {
    "world_coast"   : [{fcolor : colour_map.land.fill.land, zIndex : index_map.land}],
    "national_park" : [{fcolor : colour_map.land.fill.national_park, zIndex : index_map.national_park}],
    "uk_urban_region"  : [{fcolor : colour_map.land.fill.urban_region, zIndex : index_map.urban_region}],
    "uk_woodland_region"  : [{fcolor : colour_map.land.fill.woodland_region, zIndex : index_map.woodland_region}],
    "uk_lakes_region"  : [{fcolor : colour_map.land.fill.lakes_region, zIndex : index_map.lakes_region}],
    "uk_motorway_overview"      : [{scolor : colour_map.road.casing.motorway, zIndex : index_map.motorway, width : widths.motorway},{scolor : colour_map.road.fill.motorway, zIndex : index_map.motorway + 1, width : widths.motorway - 0.5}],
    "uk_primary_overview" : [{scolor : colour_map.road.casing.primary, zIndex : index_map.primary, width : widths.primary},{scolor : colour_map.road.fill.primary, zIndex : index_map.primary + 1, width : widths.primary - 0.5}],
    "uk_secondary_overview" : [{scolor : colour_map.road.casing.secondary, zIndex : index_map.primary, width : widths.secondary},{scolor : colour_map.road.fill.secondary, zIndex : index_map.primary + 1, width : widths.secondary -0.5}],
    "uk_unclassified_overview" : [{scolor : colour_map.road.casing.secondary, zIndex : index_map.primary, width : widths.unclassified}],
    "uk_railway_line" : [{scolor : colour_map.rail.fill.rail_line, zIndex : index_map.rail, width : widths.railway_line}],
    "uk_river_line" : function(properties,resolution) {

        if([5211,5221,5230].indexOf(properties.CODE) !== -1) {
            return [{scolor : colour_map.river.fill.river_line, zIndex : index_map.river, width : widths.river_large}];
        }

        return [{scolor : colour_map.river.fill.river_line, zIndex : index_map.river, width : widths.river_small}];
    },
    "uk_transport_text" : function(properties,resolution) {

        //Motorway label
        if(properties.CODE == 5031) {
            return [{text: properties.NAME, labelOnly: true, textFill: colour_map.road.fill.motorway, textColor: colour_map.road.fill.motorway_centre}];
        }

        //Primary rtoad label
        if([5032,5033].indexOf(properties.CODE) !== -1 && resolution < 200) {
            return [{text: properties.NAME, labelOnly: true, textFill: colour_map.road.fill.primary, textColor: colour_map.road.fill.motorway_centre}];
        }
        return [];
    },
    "uk_settlement_seed" : function(properties,resolution) {

        //City Labels
        if(properties.CODE == 5427) {
            return [{text: properties.NAME, labelOnly: true, textFill: colour_map.label.city.city_label, textColor: colour_map.label.city.city_halo}];
        }

        return [];
    }

};

var style_maker = function(params) {

    var fill =  new ol.style.Fill({ color : params.fcolor || ''}),
        stroke = new ol.style.Stroke({color : params.scolor || params.fcolor, width : params.width || 1});

    //TEXT LABEL
    if(params.text !== '') {

        var textStyle = new ol.style.Text({
            font : params.font || '10px sans-serif',
            fill : new ol.style.Fill({color: params.textFill || 'rgb(0,0,0)'}),
            stroke: new ol.style.Stroke({color: params.textColor || 'rgb(0,0,0)', width: params.textWidth || 1}),
            text: params.text
        });

        if(params.labelOnly) {
            return new ol.style.Style({text : textStyle});
        } else {
            return new ol.style.Style({fill : fill, stroke : stroke, zIndex : params.zIndex || 0, text : textStyle});
        }

    }

    return  new ol.style.Style({fill : fill, stroke : stroke, zIndex : params.zIndex || 0});

};

var os_opendata_style = function(feature,resolution) {

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