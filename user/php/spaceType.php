<?php
session_start();
require '../../php/connection.php';



$sql = "SELECT st_id,st_name FROM space_type";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

		
		// echo $row["pm_description"];

         echo '<a class="nav-link c_click" href="#">'.$row['st_name'].'</a><span style="display:none;">'.$row['st_id'].'</span>';
	}
	
}
else
{
	echo "No Space";
}
$conn->close();
?>