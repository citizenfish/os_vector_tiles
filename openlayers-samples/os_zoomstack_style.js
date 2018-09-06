if (window.styles === undefined) {
    window.styles = {};
    window.colour_map = {};

}

/**
 * This function takes a HEX colour and an array of zooms/opacity values and returns the most appropriate opacity
 * @param colour
 * @param stops
 * @returns {string}
 */
function zoom_set_opacity(colour, stops) {

    var rgb = hexToRgb(colour);
    var opacity = 1;
    for(var j =0; j < stops[i].length; j++) {
        if(stops[i][j][0] <= map.getView().getZoom()){
            break;
        }
        opacity = stops[i][j][1];
    }

    return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')';
}

/**
 * Convert a hex colour value to rgb
 * @param hex
 * @returns {*}
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
}
/*
 Main function called for each feature in the vector layer
 */

window.styles.vbase = function(feature,resolution) {


    var zoom = map.getView().getZoom(),
        style_array = [],
        properties = feature.getProperties();
    var    layer = properties.layer

    if(layer == 'sea') {
        style_array.push(new ol.style.Style({fill : '#c5cdd0', zIndex : 0}));
    }

    if(layer == 'foreshore' && zoom >= 5){
        style_array.push(new ol.style.Style({fill : '#e9e7e2', zIndex : 1}));
    }

    if(layer == 'national-parks' && zoom > =5 && zoom <= 12){
        style_array.push(new ol.style.Style({fill : zoom_set_opacity('#d8ddd4', [[5,0.7],[9,0.5],[12,0.1]]), zIndex : 1}));
    }

    if(layer == 'buildings' && zoom >= 5 && zoom <= 11) {

    }

    return style_array;
};