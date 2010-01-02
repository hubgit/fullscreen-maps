// WMS services from http://www.perrygeo.net/wordpress/?p=35 and http://trac.openlayers.org/wiki/AvailableWMSServices

zoom = 5;
lat = 40;
lon = -95;

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3; OpenLayers.Util.onImageLoadErrorColor = "transparent"; // Avoid pink error tiles

map = new OpenLayers.Map(mapContainerId);

map.addLayers([                    
  new OpenLayers.Layer.WMS("USGS Topo", "http://terraservice.net/ogcmap.ashx", { layers: "DRG" }),  
  new OpenLayers.Layer.WMS("US Aerial", "http://terraservice.net/ogcmap.ashx", { layers: "DOQ" }),
  
  new OpenLayers.Layer.WMS("NEXRAD Base Reflectivity (Weather Radar)", "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", { layers: "nexrad-n0r-m45m", transparent: "true", format: "image/png" }),
  
  //new OpenLayers.Layer.WMS("USGS National Landcover", "http://gisdata.usgs.net/servlet/com.esri.wms.Esrimap?ServiceName=USGS_WMS_NLCD", { layers: "US_NLCD" }),
  //new OpenLayers.Layer.WMS("USGS National Elevation - Shaded Relief", "http://ims.cr.usgs.gov:80/servlet19/com.esri.wms.Esrimap/USGS_EDC_Elev_NED_3", {layers: "HR-NED.IMAGE", reaspect: "false", transparent: "true"}),
  //new OpenLayers.Layer.WMS("USGS Reference Maps", "http://gisdata.usgs.net:80/servlet/com.esri.wms.Esrimap?servicename=USGS_WMS_REF", { layers: "US_NLCD" }),
  //new OpenLayers.Layer.WMS("USGS National Landcover", "http://gisdata.usgs.net/servlet/com.esri.wms.Esrimap?ServiceName=USGS_WMS_NLCD", { layers: "States,County,Roads,Route_Numbers,Streams,Federal_Lands" }),
  
  //new OpenLayers.Layer.WMS("Life Mapper: Black Bears", "http://www.lifemapper.org/Services/WMS/?ScientificName=Ursus%20americanus", { layers: "Species Distribution Models,Political Boundaries,Species Data Points" }),
]);

map.addControl(new OpenLayers.Control.LayerSwitcher());
map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);