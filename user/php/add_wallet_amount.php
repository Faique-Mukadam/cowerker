<?php
session_start();
include '../../php/connection.php';

$card_name = $_POST["card_name"];
$card_number = $_POST["card_number"];
$card_cvv = $_POST["card_cvv"];
$card_expiry = $_POST["card_expiry"];
$userEmail = $_POST["userEmail"];
$amount=$_POST["amount"];
$temp_addition;
$temp_substraction;

// echo $card_name." ".$card_number." ".$card_cvv." ".$card_expiry." ".$userEmail." ".$amount;

$temp_bid;
$temp_cName;
$temp_cNumber;
$temp_cvv;
$temp_expire;
$temp_balance;
$update_balance;
$space_endDate;

$sqlcard = "SELECT * FROM bank_account WHERE ba_email='".$userEmail."'";
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
	else if($temp_balance < $amount){
		echo "Balance is less than your total amount..";
	}
	else{
		$sqlchk = "SELECT w_balance FROM `wallet` WHERE w_cm_email='" .$userEmail. "'";
		$result = $conn->query($sqlchk);

			if ($result->num_rows > 0) {

				while($row = $result->fetch_assoc()) {

					$temp_addition = $row["w_balance"] + $amount;
					// echo $temp_addition;
					$sqlupdatewallet = "UPDATE wallet SET w_balance = $temp_addition where w_cm_email='" .$userEmail. "'";
					$resultwallet = $conn->query($sqlupdatewallet);
					if ($resultwallet > 0) {
						// echo "Balance Update Successfully..!";
						$temp_substraction = $temp_balance - $amount;
						$sqlUpdateBankAmount = "UPDATE bank_account SET ba_balance = $temp_substraction where ba_email='" .$userEmail. "'";
						$resultBankAmount = $conn->query($sqlUpdateBankAmount);
						if($resultBankAmount > 0){
							// echo"Bank Amount Minus successfully.";
						}
						else{
							// echo"Bank Amount Minus is Failed.";
						}
					}
					else{
						// echo "Balance Not Update Successfully..!";					
					}					
				}
				// echo "Amount Added Successfully..!";
				header( "Content-type: application/json");
						$response = array('success' => true,'message' => 'Amount Added Successfully..!','wallet_amount' => $temp_addition);
						echo json_encode($response);
			}
			else{
				echo "Amount Not Added Successfully..!";
			}
	}


$conn->close();
?>