var fs = require('fs');

fs.readFile('../os_zoomstack/os_zoomstack_light.js', 'utf8', function(err,data){

    if(err) throw err;

    let j_data ={};
    let json = eval(data.replace('window.styles.mb_style', 'j_data'));

    for(i in j_data.layers) {

        console.log(j_data.layers[i].type + ':' + j_data.layers[i].id + ':' + j_data.layers[i]['source-layer']);
    }
});

