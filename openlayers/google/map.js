zoom = 14;

map = new OpenLayers.Map(mapContainerId);
map.addLayer(new OpenLayers.Layer.Google("Google Road", { type: G_NORMAL_MAP, numZoomLevels: 20 }));
map.addLayer(new OpenLayers.Layer.Google("Google Hybrid", { type: G_HYBRID_MAP, numZoomLevels: 20 }));
map.addLayer(new OpenLayers.Layer.Google("Google Terrain", { type: G_PHYSICAL_MAP, numZoomLevels: 20 }));
map.addControl(new OpenLayers.Control.LayerSwitcher());
map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);