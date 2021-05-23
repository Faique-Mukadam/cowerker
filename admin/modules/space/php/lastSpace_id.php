<?php
session_start();
require '../../../common/connection.php';

$sqlchk = "SELECT space_id FROM space ORDER BY space_id DESC LIMIT 1";
		$result = $conn->query($sqlchk);

		if ($result->num_rows > 0) {

		    while($row = $result->fetch_assoc()) {

				  echo  $row["space_id"];			  
				  
			}
		}

$conn->close();

?>

