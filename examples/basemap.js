// Global variables
var geoserver_wms = "http://gis.amazonicdata.com/geoserver/wms?";
var owner_attribution = "Geomap - Pucallpa city, Perú";

// Set the position(center x,y) and zoom level of the map
var map = L.map("mapid").setView([-8.3857379, -74.5739388], 13);

// Initialize the base layer by default
var osm_mapnik = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

// Set default basemap
var square_layer = L.tileLayer
  .wms(geoserver_wms, {
    layers: "geomap:manzanas",
    format: "image/png",
    transparent: true,
    version: "1.1.0",
    attribution: owner_attribution
  })
  .addTo(map);

// Create base layers group object
var baseLayers = {
  "OSM Mapnik": osm_mapnik,
  Squares: square_layer
};

// Overlay layers
var sector_layer = L.tileLayer.wms(geoserver_wms, {
  layers: "geomap:sectores",
  format: "image/png",
  transparent: true,
  version: "1.1.0",
  attribution: owner_attribution
});

var street_layer = L.tileLayer.wms(geoserver_wms, {
  layers: "geomap:vias",
  format: "image/png",
  transparent: true,
  version: "1.1.0",
  attribution: owner_attribution
});

var block_layer = L.tileLayer.wms(geoserver_wms, {
  layers: "geomap:lotes",
  format: "image/png",
  transparent: true,
  version: "1.1.0",
  attribution: owner_attribution
});

var park_layer = L.tileLayer.wms(geoserver_wms, {
  layers: "geomap:area_verde",
  format: "image/png",
  transparent: true,
  version: "1.1.0",
  attribution: owner_attribution
});

// Create overlay layers group object
var overlayBase = {
  Blocks: block_layer,
  Parks: park_layer,
  Streets: street_layer,
  Sectors: sector_layer
};

map.addLayer(sector_layer);
map.addLayer(street_layer);
map.addLayer(park_layer);
map.addLayer(block_layer);

// Add baseLayers & overlay to the map
L.control.layers(baseLayers, overlayBase).addTo(map);
L.control.scale().addTo(map);
