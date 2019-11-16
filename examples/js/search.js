
var streetData = L.geoJson(streets_data,{});

var searchControl = new L.Control.Search({
    layer: streetData,
    propertyName: 'nomvia_com',
    marker: false,
    moveToLocation: function (latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
    }
});

map.addControl(searchControl);  //inizialize search control
