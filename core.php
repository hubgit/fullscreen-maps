<?php

function print_html($text){
  print filter_var($text, FILTER_SANITIZE_SPECIAL_CHARS);
}

if (is_string($scripts))
  $scripts = array($scripts);

$scripts[] = '../../core.js';
$scripts[] = 'map.js';
  
if (is_string($styles))
  $styles = array($styles);

$styles[] = '../../style.css';
?>

<html>
<head>
  <meta http-equiv="content-type" value="text/html;charset=utf-8">
  <title><?php print_html($title); ?></title>
    
  <?php foreach ($styles as $style): if (!empty($style)): ?>
  <link rel="stylesheet" href="<?php print $style; ?>"/>
  <?php endif; endforeach; ?>
</head>

<body>
  <!-- Bing needs inline style attribute on the map div -->
  <div id="map" style="height: 100%; width: 100%"></div>
  
  <?php foreach ($scripts as $script): if (!empty($script)): ?>
  <script src="<?php print $script; ?>"></script>
  <?php endif; endforeach; ?>

</body>
</html>