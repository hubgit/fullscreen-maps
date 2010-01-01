<?php

function print_html($text){
  print filter_var($text, FILTER_SANITIZE_SPECIAL_CHARS);
}

if (!is_array($scripts))
  $scripts = array($scripts);
?>

<html>
<head>
  <meta http-equiv="content-type" value="text/html;charset=utf-8">
  <title><?php print_html($title); ?></title>
  <link rel="stylesheet" href="../../style.css">
</head>

<body>
  <!-- Bing needs inline style attribute on the map div -->
  <div id="map" style="height: 100%; width: 100%"></div>

  <!--<script src="../jquery.js"></script>-->
  
  <?php foreach ($scripts as $script): ?>
  <script src="<?php print $script; ?>"></script>
  <?php endforeach; ?>
  
  <script src="../../core.js"></script>
  <script src="map.js"></script>
</body>
</html>