<?php
session_start();
require '../../../common/connection.php';


$space_category_id=$_POST["space_category_id"];
$space_category_name=$_POST["space_category_name"];



$sqlchk = "SELECT st_name from space_type where st_name='" .$space_category_name. "'";
$result = $conn->query($sqlchk);

      if ($result->num_rows > 0) {
        echo "Name already present..!";
      }
      else{
          $sql = "UPDATE space_type SET st_name = '" .$space_category_name. "' where st_id='" .$space_category_id. "'" ;
          $insert = $conn->query($sql);
          if($insert > 0){

            echo "Space Category Updated Successfully";
          }else{
            echo "Space Category Not Updated";
          }
      }
$conn->close();
?>