/**
 * Add a custom marker to map
 * @param {} map, Leaflet map object
 * @param {} url, URL to GeoJSON data 
 * @param {*} layerName 
 * @param {*} showByDefault, true/false 
 * @param {*} customIcon, this an object 
 * @param {*} customStyle, this an object 
 * @param {*} customOperation, this a function 
 */
function addGeoJsonToMap(map, url, layerName, showByDefault, customIcon, customStyle, customOperation) {    
    // Asynchronous call
    $.get(url, function(data) {
        var layer =
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, customIcon ? {icon: customIcon} : {});
            } ,
            style: customStyle, 
            onEachFeature: customOperation 
        });
        if (showByDefault) {
            layer.addTo(map);
        }  
        
        layersCtrl.addOverlay(layer, layerName); // this is a global variable defined in basemap.js        
    });     
}   