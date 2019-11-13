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
    $.get(url, function(data) {
        var layer =
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, customIcon ? {icon: customIcon} : {});
            } ,
            onEachFeature: customOperation,
            style: customStyle 
        });
        if (showByDefault) {
            layer.addTo(map);
        }  
        L.control.addOverlay(layer, layerName);          
    });    
}   