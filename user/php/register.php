<?php
session_start();
include '../../php/connection.php';


$name = $_POST["name"];
$email=$_POST["email"];
$pass=$_POST["pass"];
$role=$_POST["role"];
$w_amount=$_POST["w_amount"];



$sqlchk = "SELECT cm_email from customer_master where cm_email='" .$email. "'";
$result = $conn->query($sqlchk);

			if ($result->num_rows > 0) {
				echo "Already Registered";
			}
			else{
					$sql = "INSERT customer_master (cm_name,cm_email,cm_password,cm_role) VALUES
					 		('".$name."','".$email."','".$pass."','".$role."')" ;
					$insert = $conn->query($sql);
					if($insert > 0){

						$sqlwallet = "INSERT wallet (w_cm_email,w_balance) VALUES
					 		('".$email."','".$w_amount."')" ;
						$resultwallet = $conn->query($sqlwallet);
						if ($resultwallet > 0) {
						}

						echo "Registration Successfully";
					}else{
						echo "Registration Failed";
					}
			}
$conn->close();
?>