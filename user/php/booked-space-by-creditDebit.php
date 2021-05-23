<?php
session_start();
include '../../php/connection.php';

$card_name = $_POST["card_name"];
$card_number = $_POST["card_number"];
$card_cvv = $_POST["card_cvv"];
$card_expiry = $_POST["card_expiry"];
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
$temp_bid;
$temp_cName;
$temp_cNumber;
$temp_cvv;
$temp_expire;
$temp_balance;
$update_balance;
$space_endDate;

$sqlcard = "SELECT * FROM bank_account";
$resultcard = $conn->query($sqlcard);
	if ($resultcard->num_rows > 0) {

	    while($row = $resultcard->fetch_assoc()) {

			  $temp_bid=$row["ba_id"];
			  $temp_cName=$row["ba_holderName"];
			  $temp_cNumber=$row["bc_cardNumber"];
			  $temp_cvv=$row["ba_cvv"];
			  $temp_expire=$row["ba_expiryDate"];
			  $temp_balance=$row["ba_balance"];			  
			  
		}
		
	}

	if ($card_name != $temp_cName) {
		echo "Card Name Not Matched..";
	}
	else if($card_number != $temp_cNumber){
		echo "Card Number Not Matched..";
	}
	else if($card_cvv != $temp_cvv){
		echo "Card CVV Not Matched..";
	}
	else if($card_expiry != $temp_expire){
		echo "Card Expiry Date Not Matched..";
	}
	else if($temp_balance < $totalAmount){
		echo "Balance is less than your total amount..";
	}
	else{
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

									            // echo "Space Updated Successfully";
									          }else{
									            // echo "Space Not Updated";
									          }

									    $update_balance = $temp_balance - $totalAmount;
									    $sqlchk = "UPDATE bank_account SET ba_balance = '" .$update_balance. "' where ba_id='" .$temp_bid. "'" ;
									          $update = $conn->query($sqlchk);
									          if($update > 0){

									            // echo "Balance Updated Successfully";
									          }else{
									            // echo "Balance Not Updated";
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

									            // echo "Space Updated Successfully";
									          }else{
									            // echo "Space Not Updated";
									          }

									    $update_balance = $temp_balance - $totalAmount;
									    $sqlchk = "UPDATE bank_account SET ba_balance = '" .$update_balance. "' where ba_id='" .$temp_bid. "'" ;
									          $update = $conn->query($sqlchk);
									          if($update > 0){

									            // echo "Balance Updated Successfully";
									          }else{
									            // echo "Balance Not Updated";
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

									            // echo "Space Updated Successfully";
									          }else{
									            // echo "Space Not Updated";
									          }

									    $update_balance = $temp_balance - $totalAmount;
									    $sqlchk = "UPDATE bank_account SET ba_balance = '" .$update_balance. "' where ba_id='" .$temp_bid. "'" ;
									          $update = $conn->query($sqlchk);
									          if($update > 0){

									            // echo "Balance Updated Successfully";
									          }else{
									            // echo "Balance Not Updated";
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

									            // echo "Space Updated Successfully";
									          }else{
									            // echo "Space Not Updated";
									          }

									    $update_balance = $temp_balance - $totalAmount;
									    $sqlchk = "UPDATE bank_account SET ba_balance = '" .$update_balance. "' where ba_id='" .$temp_bid. "'" ;
									          $update = $conn->query($sqlchk);
									          if($update > 0){

									            // echo "Balance Updated Successfully";
									          }else{
									            // echo "Balance Not Updated";
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

							            // echo "Space Updated Successfully";
							          }else{
							            // echo "Space Not Updated";
							          }

							    $update_balance = $temp_balance - $totalAmount;
							    $sqlchk = "UPDATE bank_account SET ba_balance = '" .$update_balance. "' where ba_id='" .$temp_bid. "'" ;
							          $update = $conn->query($sqlchk);
							          if($update > 0){

							            // echo "Balance Updated Successfully";
							          }else{
							            // echo "Balance Not Updated";
							          }

							    echo "Space Booked Successfully..!";
							}else{
								echo "Space Not Booked..!";
							}*/
	}


$conn->close();
?>