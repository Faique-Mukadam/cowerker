<?php
session_start();
include '../../../common/connection.php';

$sqlchk = "SELECT * FROM space_type where st_status = 1 order by st_id desc";
$result = $conn->query($sqlchk);

		if ($result->num_rows > 0) {
			echo '<option selected disabled>Select Space Category</option>';
		    while($row = $result->fetch_assoc()) {

		    	echo '<option value='.$row["st_id"].'>'.$row["st_name"].'</option>';
		    }
		} else {
		    echo "Space Category Empty";
		}
$conn->close();
?>