<?php
session_start();
require '../../php/connection.php';


$space_facility_id=$_POST["space_id"];

          $sql = "UPDATE space_facilities SET sf_status = 'want' where sf_space_id='" .$space_facility_id. "'" ;
          $insert = $conn->query($sql);
          if($insert > 0){

            echo "Space Category Updated Successfully";
          }else{
            echo "Space Category Not Updated";
          }
$conn->close();
?>