zoom = 9;
lat = 44.414654778606874;
lon = -123.29029083251953;

map = new OpenLayers.Map(mapContainerId);

map.addLayers([
  new OpenLayers.Layer.VirtualEarth("Bing (Virtual Earth)"),
  new OpenLayers.Layer.Yahoo("Yahoo"),

  new OpenLayers.Layer.Google("Google Road", { type: G_NORMAL_MAP, numZoomLevels: 20 }),
  new OpenLayers.Layer.Google("Google Hybrid", { type: G_HYBRID_MAP, numZoomLevels: 20 }),
  new OpenLayers.Layer.Google("Google Terrain", { type: G_PHYSICAL_MAP, numZoomLevels: 20 }),
]);

map.addControl(new OpenLayers.Control.LayerSwitcher());
map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);