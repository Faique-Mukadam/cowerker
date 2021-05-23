<?php
session_start();
require '../../../common/connection.php';


$enquiry_id=$_POST["enquiry_id"];



$sql = "UPDATE user_enquiry SET ue_status = 'read' where ue_id='" .$enquiry_id. "'" ;
          
    $insert = $conn->query($sql);
    if($insert > 0){

      echo "Space Enquiry Updated Successfully";
    }else{
      echo "Space Enquiry Not Updated";
    }
$conn->close();
?>