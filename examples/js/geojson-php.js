var popup = L.popup();
var lgeojson;
var geojsonAPI = "http://localhost:8083/get_features.php";

function onMapClick(e) {
  console.log("lat: " + e.latlng.lat);
  console.log("lng: " + e.latlng.lng);
  $.getJSON(geojsonAPI, {
    lat: e.latlng.lat,
    lng: e.latlng.lng
  }).done(function(data) {
    console.log(data);
    var popupContent = "";
    if (lgeojson != null) {
      map.removeLayer(lgeojson);
    }
    lgeojson = L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        popupContent +=
          "Block with id table: " +
          feature.properties.gid +
          "<br>" +
          "Code catastrade: " +
          feature.properties.cod_lote;
      },
      style: {
        color: "blue",
        weight: 2
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
