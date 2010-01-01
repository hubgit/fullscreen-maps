zoom = 15;

var bing = new Bing();
var bounds = [new VELatLongRectangle(new VELatLong(53,-1),new VELatLong(51,1))];
bing.addLayer("lsm", "http://ecn.t6.tiles.virtualearth.net/tiles/r%4.png?g=41&productSet=mmCB", bounds, 12, 16);
bing.load();
