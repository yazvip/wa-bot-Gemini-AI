<?php
$node_check = shell_exec('node -v');
?>

<!DOCTYPE html>
<html>
<head>
  <title>Installation Check</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .status { padding: 10px; border-radius: 5px; }
    .success { background-color: #d4edda; color: #155724; }
    .error { background-color: #f8d7da; color: #721c24; }
  </style>
</head>
<body>
  <h1>Installation Check</h1>

  <h2>Node.js</h2>
  <?php if ($node_check): ?>
    <p class="status success">Node.js is installed: <?php echo $node_check; ?></p>
  <?php else: ?>
    <p class="status error">Node.js is not installed or not in the system's PATH.</p>
  <?php endif; ?>

  <h2>Next Steps</h2>
  <ol>
    <li>Ensure you have set up the Node.js application in your cPanel.</li>
    <li>Run <code>npm install</code> in the application's directory.</li>
    <li>Start the application through the cPanel interface.</li>
    <li>Access the application at your domain. You will be prompted to enter your API keys.</li>
  </ol>
</body>
</html>
