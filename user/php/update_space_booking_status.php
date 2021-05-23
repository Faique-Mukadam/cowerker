<?php
session_start();
require '../../php/connection.php';



          $sql = "UPDATE space,space_booking SET space.space_status ='available' WHERE space_booking.sb_endDate < CURDATE() AND space.space_id = space_booking.sb_space_id" ;
          $insert = $conn->query($sql);
          if($insert > 0){

            echo "Space Updated Successfully";
          }else{
            echo "Space Not Updated";
          }
$conn->close();
?>