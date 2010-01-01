<?php $root = dirname(__FILE__); ?>

<ul>
  <?php foreach (glob($root . '/*', GLOB_ONLYDIR) as $dir): foreach (glob($dir . '/*', GLOB_ONLYDIR) as $subdir): ?>
    <?php $source = basename($dir); $type = basename($subdir); ?>
    
    <?php if ($source != $old_source): $old_source = $source; ?>
    </ul><h2><?php print $source; ?></h2><ul>
    <?php endif; ?>
    
    <li><a href="<?php printf('%s/%s', $source, $type); ?>"><?php print $type; ?></a></li>
  <?php endforeach; endforeach; ?>
</ul>