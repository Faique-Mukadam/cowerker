<?php
session_start();
require 'connection.php';

if(!isset($_SESSION["username"])){
	echo "login.html";
	
}else {
	//echo $_SESSION["username"];
	$sql = "SELECT cm_email FROM customer_master where cm_email='" . $_SESSION["username"] . "'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		 while($row = $result->fetch_assoc()) {
		 	echo $row["cm_email"];
			// echo $row["firstname"] ." ". $row["lastname"];
		 }
}
else
{
	echo "Username and password did not matched";
}
}
$conn->close();
?>