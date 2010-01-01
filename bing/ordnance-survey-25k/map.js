zoom = 15;

// Tan Hill
lat = 54.4558333;
lon = -2.1594444;

var bing = new Bing();
var bounds = [new VELatLongRectangle(new VELatLong(59, -7), new VELatLong(50, 3))];
bing.addLayer("os25k", "http://ecn.t0.tiles.virtualearth.net/tiles/r%4.png?g=41&productSet=mmOS", bounds, 12, 16);
bing.load();

