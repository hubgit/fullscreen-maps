zoom = 13;

var map = new CM.Map(mapContainerId, new CM.Tiles.OpenStreetMap.Cycle());
map.setCenter(new CM.LatLng(lat, lon), zoom);
map.addControl(new CM.SmallMapControl());
