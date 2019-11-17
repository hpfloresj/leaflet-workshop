var exteriorStyle = {
  color: "#ffffff",
  weight: 0,
  fillOpacity: 0.75
};

var steets_json = new L.GeoJSON(streets_data, { style: exteriorStyle });

var searchControl = new L.Control.Search({
  layer: steets_json,
  propertyName: "nomvia_com",
  circleLocation: false,
  moveToLocation: function(latlng, title, map) {
    //map.fitBounds( latlng.layer.getBounds() );
    var zoom = map.getBoundsZoom(latlng.layer.getBounds());
    map.setView(latlng, zoom); // access the zoom
  }
});

searchControl
  .on("search_locationfound", function(e) {
    e.layer.setStyle({ fillColor: "#3f0", color: "#0f0" });
    if (e.layer._popup) e.layer.openPopup();
  })
  .on("search_collapsed", function(e) {
    steets_json.eachLayer(function(layer) {
      //restore feature color
      steets_json.resetStyle(layer);
    });
  });

//inizialize search control
map.addControl(searchControl);
