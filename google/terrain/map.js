map = new google.maps.Map(mapContainer, {
  zoom: zoom,
  center: new google.maps.LatLng(lat, lon),
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  mapTypeControl: true,
  mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU  },
  navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
});    
