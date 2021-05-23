<?php
session_start();
include '../../php/connection.php';


$userEmail=$_SESSION["username"];

// echo $userEmail;
$sqlchk = "SELECT w_balance from wallet where w_cm_email='" .$userEmail. "'";
$result = $conn->query($sqlchk);

			if ($result->num_rows > 0) {

    			while($row = $result->fetch_assoc()) {
    				echo $row["w_balance"];   				
    			}
			}
			else{
				echo "0";
			}
$conn->close();
?>