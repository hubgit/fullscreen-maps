zoom = 9;

map = new OpenSpace.Map(mapContainerId);
var point = new OpenSpace.GridProjection().getMapPointFromLonLat(new OpenLayers.LonLat(lon, lat));

map.setCenter(point, zoom);