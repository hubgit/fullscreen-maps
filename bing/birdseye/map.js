var bing = new Bing();
bing.load();

map.HideDashboard();

map.AttachEvent("onobliqueenter", function (){
  if (map.IsBirdseyeAvailable())
    map.SetBirdseyeScene(new VELatLong(lat, lon));
});
