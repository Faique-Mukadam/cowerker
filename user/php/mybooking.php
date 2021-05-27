<?php
session_start();
require '../../php/connection.php';

$userName=$_SESSION["username"];
$user_id;
$i=0;


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



        
$sql = "SELECT sb_name,sb_companyName,sb_endDate FROM `space_booking` WHERE sb_cm_id = '".$user_id."'";
$result2 = $conn->query($sql);

if ($result2->num_rows > 0) {

    while($row = $result2->fetch_assoc()) {

        echo '<tr>        
                <th scope="row">'.++$i.'</th>
                <td>'.$row["sb_name"].'</td>
                <td>'.$row["sb_companyName"].'</td>
                <td>'.$row["sb_endDate"].'</td>
            </tr> ';

	}
	
}
else
{
	echo "<span class='text-center col-md-12'>No space booking..</span>";
}

$conn->close();
?>