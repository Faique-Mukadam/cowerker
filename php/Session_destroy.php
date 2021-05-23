<?php
session_start();
// echo $_SESSION["username"];
session_destroy();
$_SESSION["username"] = '';
echo "index.html";


?>