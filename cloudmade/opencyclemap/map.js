var map = new CM.Map(mapContainerID, new CM.Tiles.OpenStreetMap.Cycle());
map.setCenter(new CM.LatLng(lat, lon), zoom);
map.addControl(new CM.SmallMapControl());
