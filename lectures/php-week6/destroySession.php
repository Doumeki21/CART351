<?php
session_start();
?>
<html>
<body>
<?php
echo "My session id: ".session_id()."<br>";
// remove all session variables
session_unset();
// destroy the session
session_destroy();
?>
</body>
</html>