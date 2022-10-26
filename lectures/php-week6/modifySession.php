<?php
session_start();
?>
<html>
<body>
<?php
echo "My session id: ".session_id()."<br>";
// to change a session variable, just overwrite it
$_SESSION["favColor"] = "red";
$_SESSION["favFood"] = "lasagna";
var_dump($_SESSION);
?>
</body>
</html>