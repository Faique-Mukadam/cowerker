<?php
session_start();
require '../../../common/connection.php';

$space_id = $_POST['space_id'];

$sql = "UPDATE space SET 	space_status='unAvailable' WHERE space_id = '" .$space_id. "'";
$result = $conn->query($sql);

if($result){
	echo "Space Deleted Successfully..!";
}
else{
	echo "Space Not Deleted..!";
}

$conn->close();

?>

