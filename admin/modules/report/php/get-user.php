<?php
session_start();
include '../../../common/connection.php';
 


$temp_userId;
$sql="SELECT COUNT(cm_id) AS cmId FROM customer_master WHERE cm_role='user'";


$result = $conn->query($sql);

$list = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
				// echo $row['cmId'];
				// $temp_userId = $row['cmId'];
				header( "Content-type: application/json" );
				$response = array('success' => true,'message' => 'Login Successfull','cm_id' => $row["cmId"]);
				echo json_encode($response);

		// array_push($list,array($row["userId"],$row["created_at"]));
    }
} 

$conn->close();
?>

