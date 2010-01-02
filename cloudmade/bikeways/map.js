var cloudmade = new CM.Tiles.CloudMade.Web({ key: "b553a588affe448f80266392d610d1f0", styleId: 1924 });
map = new CM.Map(mapContainerId, cloudmade);
map.setCenter(new CM.LatLng(lat, lon), zoom);
map.addControl(new CM.SmallMapControl());

