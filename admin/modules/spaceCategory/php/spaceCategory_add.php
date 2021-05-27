<?php
session_start();
include '../../../common/connection.php';


//$username = $_SESSION["username"];
$spaceCategory_name=$_POST["spaceCategory_name"];


$sqlchk = "SELECT st_name from space_type where st_name='" .$spaceCategory_name. "' and st_status = '1'";
$result = $conn->query($sqlchk);

			if ($result->num_rows > 0) {
				echo "Name already added..!";
			}
			else{
					$sql = "INSERT space_type (st_name) VALUES
					 		('".$spaceCategory_name."')" ;
					$insert = $conn->query($sql);
					if($insert > 0){

						echo "Space category added successfully..!";
					}else{
						echo "Space category not added..!";
					}
			}
$conn->close();
?>