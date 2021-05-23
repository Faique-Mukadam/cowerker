<?php
session_start();
include '../../../common/connection.php';

$facility_name = $_POST["facility_name"];
$facility_price=$_POST["facility_price"];
$space_id=$_POST["space_id"];



$sqlchk = "SELECT sf_name from space_facilities where sf_name='" .$facility_name. "'";
$result = $conn->query($sqlchk);

			/*if ($result->num_rows > 0) {
				echo "Facility already Present";
			}
			else{*/
					$sql = "INSERT space_facilities (sf_name,sf_rate,sf_space_id) VALUES
					 		('".$facility_name."','".$facility_price."','".$space_id."')" ;
					$insert = $conn->query($sql);
					if($insert > 0){

						echo "Facility Added Successfully";
					}else{
						echo "Facility Not Added";
					}
			// }

$conn->close();
?>



			