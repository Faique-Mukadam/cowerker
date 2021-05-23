<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];
$sql = "SELECT space_price FROM space WHERE space_id='" . $space_id . "'";
$result = $conn->query($sql);
      
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {	
		

         echo "Rs.".$row["space_price"];
	}
	
}
else
{
	echo "No Space facilities";
}
$conn->close();
?>