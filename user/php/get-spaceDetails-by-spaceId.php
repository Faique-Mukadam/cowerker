<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];

/*$sql = "SELECT space.space_name,space.space_location,space.space_area,space.space_people_Qty,space.space_duration,space.space_price FROM space WHERE space_id = '" .$space_id. "' AND space_status='available'";*/
$sql = "SELECT space.space_name,space.space_location,space.space_area,space.space_people_Qty,space.space_duration,space.space_price FROM space WHERE space_id = '" .$space_id. "' AND space_status='available'";
$result = $conn->query($sql);

      if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        header( "Content-type: application/json" );
        $response = array('success' => true,'message' => 'Successfull','spaceName' => $row["space_name"],'spaceLocation' => $row["space_location"],'spaceArea' => $row["space_area"],'spacePQty' => $row["space_people_Qty"],'spaceDuration' => $row["space_duration"],'spacePrice' => $row["space_price"]);
        echo json_encode($response);
        
      }
      else{
        echo "0";
      }
$conn->close();
?>