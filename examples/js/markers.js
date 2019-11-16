// L.icon define the icon we're going to use for the rodent points.
var markerIcon = new L.Icon({
    iconSize: [24, 24], // is a two-number array of the pixel width and height of the icon
    iconAnchor: [12, 12],
    popupAnchor: [0, -18],
    iconUrl: 'image/marker-pink.png'
});

// this is an anonymous function (an unnamed function)
// functions stored in variables do not need a name, but rather are called using the variable name
var queryMarker = function(feature, layer) {
    console.log(feature);
    if (feature.properties && feature.properties.cod_lote) {
        // Add message in html format
        layer.bindPopup(
            'Block code: ' + feature.properties.cod_lote + '<br>' + 
            'Date request:' + new Date()
        ); 
    }
}

addGeoJsonToMap(map, 'data/hospital.json', 'Hospitals', true, markerIcon, null, queryMarker);

// Bonus: create an empty popup element
/*var popup = L.popup();

// write a function that will populate the popup element using methods from the popup object
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// on click, run function to populate popup and open it on the map
map.on('click', onMapClick);
*/