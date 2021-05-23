<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];
$sql = "SELECT SUM(sf_rate) as faclitiySum FROM space_facilities WHERE sf_space_id='" . $space_id . "' AND sf_status='want'";
$result = $conn->query($sql);
      
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {	
		

         echo "Rs.".$row["faclitiySum"];
	}
	
}
else
{
	echo "No Space facilities";
}
$conn->close();
?>