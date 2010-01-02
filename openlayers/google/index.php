<?php

$title = 'OpenLayers Google';

$scripts = array(
  'http://maps.google.com/maps?file=api&v=2&key=ABQIAAAABzFDgIPMFMMGKfy0EaR4OxRnQLa6sFdVrTuMof2V6wbeGkIubhTupv3YJ-OFoCwI19wUDO1VgvFQCA',
  'http://openlayers.org/api/OpenLayers.js',
  );
  
$styles = array(
  'http://openlayers.org/api/theme/default/style.css',
  'http://openlayers.org/dev/examples/style.css',
  );  
  
require dirname(__FILE__) . '/../../core.php';
