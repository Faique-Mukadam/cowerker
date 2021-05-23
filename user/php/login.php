<?php
session_start();
require '../../php/connection.php';


$email=$_POST["email"];
$pass=$_POST["password"];
$role=$_POST["role"];

$sql = "SELECT cm_id, cm_email, cm_password FROM customer_master where cm_email='" . $email . "' AND cm_password='" .$pass . "' AND cm_role='" .$role."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

		// $_SESSION["username"] = $email;
		$_SESSION["username"] = $row["cm_email"];

		header( "Content-type: application/json" );
				$response = array('success' => true,'message' => 'Login Successfull','cm_email' => $row["cm_email"]);
				echo json_encode($response);
	}
	
}
else
{
	echo "Username and password did not matched";
}
$conn->close();
?>