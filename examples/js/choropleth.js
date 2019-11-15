
// GeoJSON layer to map
addGeoJsonToMap(map, 'data/choropleth_square.json', 'Choropleth families', true, null, style, popup);

// Legend Custom Leaflet Control*/
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    var grades = [0, 10, 20, 30, 50, 60];
        
    div.innerHTML += '<h4>Families/Square</h4>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? ' - ' + grades[i + 1] + ' <br>' : ' +');
    }

    return div;
};

legend.addTo(map);