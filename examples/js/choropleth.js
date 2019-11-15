
//var info = L.control({position: 'topright'});

addGeoJsonToMap(map, 'data/choropleth_square.json', 'Choropleth families', true, null, style, null);

/****************** Style *********************/
/**
 * Add some color.
 * Now we need to color por square accoording to thir families number.  
 */
function getColor(d) {
    return d > 60   ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 30   ? '#FEB24C' :
           d > 20   ? '#800026' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

/**
 * We define a style for our GeoJSON layer, so that it's fillcolor depends on 
 * feature.properties.families
 * @param {*} feature 
 */
function style(feature) {
    return {
        fillColor: getColor(feature.properties.families),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

/****************** Add interaction *********************/
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    // Todo for update info
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}



/****************** Add info *********************/


/****************** Add legend *********************/