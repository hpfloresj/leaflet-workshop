/**
 * Add some color.
 * Now we need to color por square accoording to thir families number.  
 */
function getColor(d) {
    return d > 60 ? '#006837' :
        d > 50 ? '#31a354' :
            d > 30 ? '#78c679' :
                d > 20 ? '#addd8e' :
                    d > 10 ? '#d9f0a3' :
                        '#ffffcc';
}

/**
 * We define a style for our GeoJSON layer, so that it's fillcolor depends on 
 * feature.properties.families
 * @param {*} feature 
 */
function style(feature) {
    return {
        fillColor: getColor(feature.properties.families),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '1',
        fillOpacity: 1
    };
}

/**
 * Add popup interaction in choropleth map
 * @param {*} feature 
 * @param {*} layer 
 */
function popup(feature, layer) {
    layer.bindTooltip(feature.properties.sector + feature.properties.square + '<' + 'br' + '>' +
        feature.properties.families + ' families')
}