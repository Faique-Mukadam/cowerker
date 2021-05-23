<?php
session_start();
require '../../../common/connection.php';

$space_category_id = $_POST['space_category_id'];

$sql = "UPDATE space_type SET st_status=0 WHERE st_id = '" .$space_category_id. "'";
$result = $conn->query($sql);

if($result){
	echo "Category Deleted";
}
else{
	echo "Category Not Deleted";
}

$conn->close();

?>

