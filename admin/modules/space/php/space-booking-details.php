<?php
session_start();
require '../../../common/connection.php';


$space_booking_id=$_POST["space_booking_id"];




$sqlchk = "SELECT * FROM space_booking WHERE sb_id='".$space_booking_id."'";

$result = $conn->query($sqlchk);

      if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        header( "Content-type: application/json" );
        $response = array('success' => true,'message' => 'Successfull','sb_id' => $row["sb_id"],'sb_name' => $row["sb_name"],'sb_companyEmail' => $row["sb_companyEmail"],'sb_companyName' => $row["sb_companyName"],'sb_mobile' => $row["sb_mobile"],'sb_bdate' => $row["sb_bdate"],'sb_paymentType' => $row["sb_paymentType"],'sb_smount' => $row["sb_smount"]);
        echo json_encode($response);
        
      }
      else{
        echo "0";
      }

$conn->close();
?>