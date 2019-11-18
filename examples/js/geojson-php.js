var popup = L.popup();
var lgeojson;
var url = "http://localhost:8083/get_features.php";

function onMapClick(e) {
  $.getJSON(url, {
    lat: e.latlng.lng,
    lng: e.latlng.lat
  }).done(function(data) {
    var popupContent = "";
    if (lgeojson != null) {
      map.removeLayer(lgeojson);
    }
    lgeojson = L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        popupContent += "hola";
      },
      style: {
        color: "blue",
        weight: 10
      }
    });
    popup
      .setLatLng(e.latlng)
      .setContent(popupContent)
      .openOn(map);
    lgeojson.addTo(map);
  });
}

map.on("click", onMapClick);
