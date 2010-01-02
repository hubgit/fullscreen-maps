zoom = 3;
lat = 20;
lon = 0;

// Avoid pink error tiles
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
OpenLayers.Util.onImageLoadErrorColor = "transparent";

map = new OpenLayers.Map(mapContainerId);

map.addLayers([  
  new OpenLayers.Layer.WMS("Human Footprint", "http://sedac.ciesin.columbia.edu/mapserver/map/HF_HII", {layers: "Human_Footprint_Index_tif"}),
  new OpenLayers.Layer.WMS("2005 Population Density", "http://sedac.ciesin.columbia.edu/mapserver/map/GPWv3", {layers: "GPWv3_2005_Pop_Density_tif"}),
]);

var onearth = [
  new OpenLayers.Layer.WMS("NASA Global Mosaic", "http://wms.jpl.nasa.gov/wms.cgi", { layers: "modis,global_mosaic" }),
  new OpenLayers.Layer.WMS("OnEarth Daily Planet", "http://wms.jpl.nasa.gov/wms.cgi", { layers: "daily_planet" }),
];

onearthTileSize = new OpenLayers.Size(512,512);
for (var i in onearth){
  layer = onearth[i];
  layer.setTileSize(onearthTileSize);
  map.addLayer(layer);
}

map.addControl(new OpenLayers.Control.LayerSwitcher());
map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);