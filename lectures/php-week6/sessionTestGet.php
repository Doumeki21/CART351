<?php
session_start();
?>
<html>
<body>
<?php
echo "My session id: ".session_id()."<br>";
// Echo session variables that were set on previous page
echo "Favorite color is " . $_SESSION["favColor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favAnimal"] . ".".".<br>";
//output the array
var_dump($_SESSION);
?>
</body>
</html>