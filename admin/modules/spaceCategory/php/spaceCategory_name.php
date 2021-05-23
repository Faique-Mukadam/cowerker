<?php
session_start();
require '../../../common/connection.php';

$space_category_id = $_POST["space_category_id"];
$sql = "SELECT * FROM space_type WHERE st_id = '" . $space_category_id . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

         echo $row["st_name"];
	}
	
}
else
{
	echo "<h3 class='text-center col-md-12'>Space category name not found...</h3>";
}
$conn->close();
?>