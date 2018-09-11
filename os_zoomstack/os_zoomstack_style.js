if (window.styles === undefined) {
    window.styles = {};
    window.colour_map = {};
    window.labelcachearray = ['','','','','','','','','','',''];
}

function interpolate(interpolate,properties) {

    var zoom  = map.getView().getZoom();
    //Linear interpolation on zoom
    if(interpolate[0] == 'interpolate' && interpolate[1][0] == 'linear' && interpolate[2][0] =='zoom') {

        var value = interpolate[4];
        for(var i = 3; i < interpolate.length; i+= 2) {

            if(zoom >= interpolate[i] && zoom <= interpolate[i + 2]) {

                /** A horrible bit of code to cope with embedded match elements in interpolation arrays **/
                if(typeof(interpolate[i+1]) == 'object') {
                  /* TODO I currently hardcode to match/get/type*/
                    var ip_value = '';
                  var match =  interpolate[i+1];
                  for(var j = 2; j < match.length; j+=2){

                      if(properties[match[1][1]] == match[j]) {
                          ip_value = match[j+1];
                      }
                  }

                  //pick last value if no match made
                  if(ip_value == '') {
                      ip_value = match[j - 1];
                  }

                  //Now replace horrible array with the value
                  interpolate[i+1] = ip_value;

                }

                var m = (interpolate[i+3] - interpolate[i+1])/ (interpolate[i + 2] - interpolate[i]);
                var c = (interpolate[i+1]) - ( m * interpolate[i]);
                value = (m * zoom) + c;  //y = mX + C
                break;
            }
        }

        //if zoom was greater than range supplied
        if(value < interpolate[i - 1]) {
            value = interpolate[i - 1];
        }

    }

    return value.toFixed(2);
}
/**
 * This function takes a HEX/HSL colour and an array of zooms/opacity values and returns the most appropriate opacity to the current zoom level
 * @param colour
 * @param stops
 * @returns {string}
 */
function colour_setter(colour, stops) {

    var rgb;

    if(/#/.test(colour)) {
        rgb = hexToRgb(colour);
    }

    if(/hsl/.test(colour)) {
        rgb = hsl2rgb(colour);
    }

    var opacity;
    for(var i in stops) {
        if(stops[i][0] <= map.getView().getZoom()) {
            opacity = stops[i][1];
        }
    }

    //We send a single array if no interpolation required
    if(opacity === undefined) {
        opacity = stops[1];
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

function hsl2rgb (hsl) {

    var r, g, b, m, c, x,h,s,l;

    var matches = hsl.match(/hsl\(([0-9]+)[ ,]+([0-9]+)[ ,%]+([0-9]+)/);
    h = matches[1];
    s = matches[2];
    l = matches[3];

    if (!isFinite(h)) h = 0;
    if (!isFinite(s)) s = 0;
    if (!isFinite(l)) l = 0;

    h /= 60;
    if (h < 0) h = 6 - (-h % 6);
    h %= 6;

    s = Math.max(0, Math.min(1, s / 100));
    l = Math.max(0, Math.min(1, l / 100));

    c = (1 - Math.abs((2 * l) - 1)) * s;
    x = c * (1 - Math.abs((h % 2) - 1));

    if (h < 1) {
        r = c;
        g = x;
        b = 0
    } else if (h < 2) {
        r = x;
        g = c;
        b = 0
    } else if (h < 3) {
        r = 0;
        g = c;
        b = x
    } else if (h < 4) {
        r = 0;
        g = x;
        b = c
    } else if (h < 5) {
        r = x;
        g = 0;
        b = c
    } else {
        r = c;
        g = 0;
        b = x
    }

    m = l - c / 2;
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r: r, g: g, b: b };

}

/**
 * Make an Openlayers style from parameters
 * @param params
 * @returns {ol.style.Style}
 */

function styleMaker(style,properties,zIndex) {


    var ol_style_params = {zIndex : zIndex};

    //Apply any filters
    if(style.filter !== undefined && filter(style.filter, properties) == false) {
        return undefined;
    }

    if(style.type === 'fill') {


        //Allow for opacity stops
        var fcolor = 'rgb(255,255,255)';

        //Fill opacity is either a fixed value or a range of zoom stops in an array [5,0.9,10,0.3,...]
        if(style.paint['fill-opacity'] !== undefined) {
                fcolor = colour_setter(style.paint['fill-color'],  style.paint['fill-opacity'].stops !== undefined  ? style.paint['fill-opacity'].stops :
                                                                      typeof (style.paint['fill-opacity']) == 'object' ? [0,interpolate( style.paint['fill-opacity'])] :
                                                                      [0,style.paint['fill-opacity']]);
        } else {
            fcolor = colour_setter(style.paint['fill-color'], [0,1]);
        }

        ol_style_params['fill'] = new ol.style.Fill({color: fcolor});


        if(style.paint['fill-outline-color'] !== undefined) {
            ol_style_params['stroke'] = new ol.style.Stroke({ color : style.paint['fill-outline-color']});
        }

        return  new ol.style.Style(ol_style_params);
    }

    if(style.type === 'line') {

        var scolor,
            stroke_params ={},
            fill_params = {};

        //line join
        stroke_params['lineJoin'] = style.layout['line-join'] !== undefined ? style.layout['line-join'] : 'round';
        stroke_params['lineCap'] = style.layout['line-cap'] !== undefined ? style.layout['line-cap'] : 'round';

        //line width
        stroke_params['width'] = typeof (style.paint['line-width']) == 'object' ? interpolate(style.paint['line-width'],properties) : style.paint['line-width'];

        //Colour
        scolor = colour_setter(style.paint['line-color'], [0, style.paint['line-opacity'] != undefined ?  style.paint['line-opacity'] : 1 ]);
        stroke_params['color'] = scolor;


        //Stoke and fill
        if(style.paint['line-dasharray'] !== undefined) {
            stroke_params['lineDash'] = style.paint['line-dasharray'];
        }

        //Make our style from stroke and fill
        ol_style_params['stroke'] = new ol.style.Stroke(stroke_params);
        ol_style_params['fill']   = new ol.style.Fill({ color : scolor});
        return  new ol.style.Style(ol_style_params);

    }

    if(style.type === 'symbol') {


        var text_style = {padding: [100,100,100,100]},
        text_size;


        if(/{.*}/.test(style.layout['text-field'])) {
            text_style['text'] =  properties[style.layout['text-field'].match(/{(.*)}/)[1]];
           if(window.labelcachearray.includes(text_style['text'])){
               return undefined;
           }

            window.labelcachearray.unshift(text_style['text']);
            window.labelcachearray.pop();


        }

        text_size = typeof (style.layout['text-size']) == 'object' ? interpolate(style.layout['text-size']) : style.layout['text-size'];

        /** TO DO come back and test the fonts in order at moment I just chose safest **/
        text_style['font'] = text_size + 'px, "' + (typeof (style.layout['text-font']) == 'object' ? style.layout['text-font'][0] : style.layout['text-font'] ) +'"';
        text_style['fill'] = new ol.style.Fill({color: style.paint['text-color'] != undefined ? style.paint['text-color'] : '#000000'});


        if(style.paint['text-halo-color'] != undefined) {

            text_style['stroke'] = new ol.style.Stroke({color: style.paint['text-halo-color'], width : style.paint['text-halo-width']});

        }

        if(style.layout['symbol-placement'] != undefined) {
            text_style['placement'] = style.layout['symbol-placement'];
        }


        return new ol.style.Style({text: new ol.style.Text(text_style)});

    }
    return undefined;

};

function filter(filter,properties) {

    var type = filter[0];

    if(type === '==') {
        if(properties[filter[1]] == filter[2]) {
            return true;
        }
    }

    if(type === 'in' || type === '!in') {
        var attribute = filter[1];

        for(var i = 2; i < filter.length; i++) {

            if((type === 'in' && properties[attribute] === filter[i]) || (type === '!in' && properties[attribute] === filter[i])) {
                return true;
            }
        }

        return false;
    }

    if(type === 'all') {
        for(var i = 1; i < filter.length; i++) {
            var sub_filter = filter[i];
            if(sub_filter[0] == '==' && properties[sub_filter[1]] != sub_filter[2]) {
                return false;
            }
        }

        return true;
    }



    return false;
}

window.styles.vbase = function(feature,resolution) {


    var zoom = map.getView().getZoom(),
        style_array = [],
        properties = feature.getProperties();
    var    layer = properties.layer;

    //Look for our layer in the Mapbox style file
    for(var f = 0; f < styles.mb_style.layers.length; f++) {
        if(styles.mb_style.layers[f]['source-layer'] === layer) {

            var style = styles.mb_style.layers[f],
                style_params = {};

            // Check we are rendering at this zoom level //'sea','national-parks','foreshore','buildings','sites','greenspaces','woodland','waterlines','surfacewater',
            if( (style.minzoom === undefined || style.minzoom <= zoom) && (style.maxzoom === undefined || style.maxzoom >= zoom) ) {

                var olstyle = styleMaker(style,properties,f);
                if(olstyle !== undefined) {
                    style_array.push(olstyle);
                }
            }


        }
    }

    return style_array;
};