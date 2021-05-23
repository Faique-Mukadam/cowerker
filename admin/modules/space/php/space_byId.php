<?php
session_start();
require '../../../common/connection.php';


$space_id=$_POST["space_id"];




$sqlchk = "SELECT * FROM space WHERE space_id='".$space_id."'";

$result = $conn->query($sqlchk);

      if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        header( "Content-type: application/json" );
        $response = array('success' => true,'message' => 'Successfull','space_name' => $row["space_name"],'space_location' => $row["space_location"],'space_area' => $row["space_area"],'space_description' => $row["space_description"],'space_people_Qty' => $row["space_people_Qty"],'space_price' => $row["space_price"],'space_map_location' => $row["space_map_location"],'space_image1' => $row["space_image1"],'space_image2' => $row["space_image2"],'space_image3' => $row["space_image3"]);
        echo json_encode($response);
        
      }
      else{
        echo "0";
      }

$conn->close();
?>