google.setOnLoadCallback(function(){
  var map = new GStreetviewPanorama(mapContainer);

  new GStreetviewClient().getNearestPanorama(new GLatLng(lat, lon), function(data){
    if (data.code == 200)
      map.setLocationAndPOV(data.location.latlng, {});
    else
      streetViewError(data.code);
  });
  
  document.body.addEventListener("unload", GUnload, true);
});

google.load("maps", "2");

function streetViewError(errorCode){
  var text;
  switch(errorCode){
    case 600: //google.maps.StreetviewPanorama.ErrorValues.NO_NEARBY_PANO:
      text = "StreetView isn't currently available for that location.";
    break;
    
    case 603: //google.maps.StreetviewPanorama.ErrorValues.FLASH_UNAVAILABLE:
      text = "Flash doesn't appear to be supported by your browser.";
    break; 
    
    default:
      text = "There was an error loading StreetView for this location.";
    break;
  }
  alert(text);
}