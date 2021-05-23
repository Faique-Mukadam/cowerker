<?php
session_start();
include '../../../common/connection.php';
 


$temp_userId;
$sql="SELECT COUNT(space_id) AS spaceId FROM space WHERE space_status='available'";


$result = $conn->query($sql);

$list = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
				// echo $row['cmId'];
				// $temp_userId = $row['cmId'];
				header( "Content-type: application/json" );
				$response = array('success' => true,'message' => 'Login Successfull','space_id' => $row["spaceId"]);
				echo json_encode($response);

		// array_push($list,array($row["userId"],$row["created_at"]));
    }
} 

$conn->close();
?>

