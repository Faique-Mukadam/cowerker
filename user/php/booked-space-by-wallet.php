<?php
session_start();
include '../../php/connection.php';

$fullName = $_POST["fullName"];
$companyEmail=$_POST["companyEmail"];
$companyName=$_POST["companyName"];
$mobile=$_POST["mobile"];
$bookingDate=$_POST["bookingDate"];
$space_duration_temp=$_POST["space_duration_temp"];
$paymentType=$_POST["paymentType"];
$totalAmount=$_POST["totalAmount"];
$space_id=$_POST["space_id"];
$userName=$_SESSION["username"];

$user_id;
$temp_balance;
$update_balance;
$space_endDate;

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
$sqlbalance = "SELECT w_balance from wallet where w_cm_email='" .$userName. "'";
$resultbalance = $conn->query($sqlbalance);

			if ($resultbalance->num_rows > 0) {

			    while($row = $resultbalance->fetch_assoc()) {

					  $temp_balance=$row["w_balance"];	
					  
				}
			}
			else{
					// echo "Customer id not found..!";
			}

if ($space_duration_temp == 'Daily') {

			$space_endDate = strtotime($bookingDate);
			$space_endDate = strtotime("+1 day", $space_endDate);
			$space_endDate = date('Y-m-d h:i:s', $space_endDate);

			$sql = "INSERT space_booking (sb_name,sb_companyEmail,sb_companyName,sb_mobile,sb_bdate,sb_endDate,sb_paymentType,sb_smount,sb_space_id,sb_cm_id) VALUES
						 		('".$fullName."','".$companyEmail."','".$companyName."','".$mobile."','".$bookingDate."','".$space_endDate."','".$paymentType."','".$totalAmount."','".$space_id."','".$user_id."')" ;
					$insert = $conn->query($sql);

					if($insert > 0){
						
						$sqlchk = "UPDATE space SET space_status = 'booked' where space_id='" .$space_id. "'" ;
					    $update = $conn->query($sqlchk);
					          	if($update > 0){

						          	$final_amount = $temp_balance - $totalAmount;
						            $sqlwallet = "UPDATE wallet SET w_balance = '" .$final_amount. "' where w_cm_email='" .$userName. "'" ;
						    		$updateBalance = $conn->query($sqlwallet);
						    		if ($updateBalance > 0) {
						    			
						    		}
						    		else{

						    		}

					          	}else{
					            // echo "Space Not Updated";
					          	}
					    echo "Space Booked Successfully..!";
					}else{
						echo "Space Not Booked..!";
					}
}
elseif ($space_duration_temp == 'Weekly') {

			$space_endDate = strtotime($bookingDate);
			$space_endDate = strtotime("+7 day", $space_endDate);
			$space_endDate = date('Y-m-d h:i:s', $space_endDate);

			$sql = "INSERT space_booking (sb_name,sb_companyEmail,sb_companyName,sb_mobile,sb_bdate,sb_endDate,sb_paymentType,sb_smount,sb_space_id,sb_cm_id) VALUES
						 		('".$fullName."','".$companyEmail."','".$companyName."','".$mobile."','".$bookingDate."','".$space_endDate."','".$paymentType."','".$totalAmount."','".$space_id."','".$user_id."')" ;
					$insert = $conn->query($sql);

					if($insert > 0){
						
						$sqlchk = "UPDATE space SET space_status = 'booked' where space_id='" .$space_id. "'" ;
					    $update = $conn->query($sqlchk);
					          	if($update > 0){

						          	$final_amount = $temp_balance - $totalAmount;
						            $sqlwallet = "UPDATE wallet SET w_balance = '" .$final_amount. "' where w_cm_email='" .$userName. "'" ;
						    		$updateBalance = $conn->query($sqlwallet);
						    		if ($updateBalance > 0) {
						    			
						    		}
						    		else{

						    		}

					          	}else{
					            // echo "Space Not Updated";
					          	}
					    echo "Space Booked Successfully..!";
					}else{
						echo "Space Not Booked..!";
					}
}	
elseif ($space_duration_temp == 'Monthly') {

			$space_endDate = strtotime($bookingDate);
			$space_endDate = strtotime("+30 day", $space_endDate);
			$space_endDate = date('Y-m-d h:i:s', $space_endDate);

			$sql = "INSERT space_booking (sb_name,sb_companyEmail,sb_companyName,sb_mobile,sb_bdate,sb_endDate,sb_paymentType,sb_smount,sb_space_id,sb_cm_id) VALUES
						 		('".$fullName."','".$companyEmail."','".$companyName."','".$mobile."','".$bookingDate."','".$space_endDate."','".$paymentType."','".$totalAmount."','".$space_id."','".$user_id."')" ;
					$insert = $conn->query($sql);

					if($insert > 0){
						
						$sqlchk = "UPDATE space SET space_status = 'booked' where space_id='" .$space_id. "'" ;
					    $update = $conn->query($sqlchk);
					          	if($update > 0){

						          	$final_amount = $temp_balance - $totalAmount;
						            $sqlwallet = "UPDATE wallet SET w_balance = '" .$final_amount. "' where w_cm_email='" .$userName. "'" ;
						    		$updateBalance = $conn->query($sqlwallet);
						    		if ($updateBalance > 0) {
						    			
						    		}
						    		else{

						    		}

					          	}else{
					            // echo "Space Not Updated";
					          	}
					    echo "Space Booked Successfully..!";
					}else{
						echo "Space Not Booked..!";
					}
}
elseif ($space_duration_temp == 'Annually') {

			$space_endDate = strtotime($bookingDate);
			$space_endDate = strtotime("+365 day", $space_endDate);
			$space_endDate = date('Y-m-d h:i:s', $space_endDate);

			$sql = "INSERT space_booking (sb_name,sb_companyEmail,sb_companyName,sb_mobile,sb_bdate,sb_endDate,sb_paymentType,sb_smount,sb_space_id,sb_cm_id) VALUES
						 		('".$fullName."','".$companyEmail."','".$companyName."','".$mobile."','".$bookingDate."','".$space_endDate."','".$paymentType."','".$totalAmount."','".$space_id."','".$user_id."')" ;
					$insert = $conn->query($sql);

					if($insert > 0){
						
						$sqlchk = "UPDATE space SET space_status = 'booked' where space_id='" .$space_id. "'" ;
					    $update = $conn->query($sqlchk);
					          	if($update > 0){

						          	$final_amount = $temp_balance - $totalAmount;
						            $sqlwallet = "UPDATE wallet SET w_balance = '" .$final_amount. "' where w_cm_email='" .$userName. "'" ;
						    		$updateBalance = $conn->query($sqlwallet);
						    		if ($updateBalance > 0) {
						    			
						    		}
						    		else{

						    		}

					          	}else{
					            // echo "Space Not Updated";
					          	}
					    echo "Space Booked Successfully..!";
					}else{
						echo "Space Not Booked..!";
					}
}

/*$sql = "INSERT space_booking (sb_name,sb_companyEmail,sb_companyName,sb_mobile,sb_bdate,sb_paymentType,sb_smount,sb_space_id,sb_cm_id) VALUES
					 		('".$fullName."','".$companyEmail."','".$companyName."','".$mobile."','".$bookingDate."','".$paymentType."','".$totalAmount."','".$space_id."','".$user_id."')" ;
					$insert = $conn->query($sql);

					if($insert > 0){
						
						$sqlchk = "UPDATE space SET space_status = 'booked' where space_id='" .$space_id. "'" ;
					    $update = $conn->query($sqlchk);
					          	if($update > 0){

						          	$final_amount = $temp_balance - $totalAmount;
						            $sqlwallet = "UPDATE wallet SET w_balance = '" .$final_amount. "' where w_cm_email='" .$userName. "'" ;
						    		$updateBalance = $conn->query($sqlwallet);
						    		if ($updateBalance > 0) {
						    			
						    		}
						    		else{

						    		}

					          	}else{
					            // echo "Space Not Updated";
					          	}
					    echo "Space Booked Successfully..!";
					}else{
						echo "Space Not Booked..!";
					}*/


$conn->close();
?>