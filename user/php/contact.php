<?php
session_start();
include '../../php/connection.php';


$name = $_POST["name"];
$email=$_POST["email"];
$mobile=$_POST["mobile"];
$enquiry=$_POST["enquiry"];
$userName=$_SESSION["username"];
$user_id;


$sqlchk = "SELECT cm_id from customer_master where cm_email='" .$userName. "'";
$result = $conn->query($sqlchk);

			if ($result->num_rows > 0) {

			    while($row = $result->fetch_assoc()) {

					  $user_id=$row["cm_id"];			  
					  
				}

			}
			else{
					echo "Customer id not found..!";
			}

$sql = "INSERT user_enquiry (ue_cm_id,ue_name,ue_email,ue_mobile,ue_description) VALUES
					 		('".$user_id."','".$name."','".$email."','".$mobile."','".$enquiry."')" ;
					$insert = $conn->query($sql);
					if($insert > 0){

						echo "Enquiry Send Successfully..!";
					}else{
						echo "Enquiry Not Send..!";
					}
$conn->close();
?>