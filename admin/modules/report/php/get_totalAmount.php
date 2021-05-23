<?php
session_start();
include '../../../common/connection.php';
 

$sql="SELECT SUM(space_price) as totalAmount FROM space WHERE space_status = 'booked'";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    		// echo $row["totalAmount"];
				header( "Content-type: application/json" );
				$response = array('success' => true,'message' => 'Login Successfull','space_price' => $row["totalAmount"]);
				echo json_encode($response);

		// array_push($list,array($row["userId"],$row["created_at"]));
    }
} 

$conn->close();
?>

