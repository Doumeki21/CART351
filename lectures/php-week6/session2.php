<?php
// Start the session
session_start();
?>
<html>
<body>
<?php
echo "My session id: ".session_id()."<br>";
// Set session variables
$_SESSION["favColor"] = "light-blue";
$_SESSION["favAnimal"] = "iguana";
echo "Session variables are set.";
?>
</body>
</html>