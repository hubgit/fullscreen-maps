var Bing = function(){  
  map = new VEMap(mapContainerId);
  map.SetDashboardSize(VEDashboardSize.Tiny);
  
  this.addLayer = function(id, url, bounds, minZoomLevel, maxZoomLevel){
    map.onLoadMap = function(){
      var layer = new VETileSourceSpecification(id, url);
      layer.Bounds = bounds;
      layer.MinZoomLevel = minZoomLevel;
      layer.MaxZoomLevel = maxZoomLevel;

      map.AddTileLayer(layer, false);
      map.SetCenter(new VELatLong(lat, lon));
      map.ShowTileLayer(id);
    }
  };
  
  this.load = function(){
    map.LoadMap(new VELatLong(lat, lon), zoom, VEMapStyle.Road);
  };
};