<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];
$sql = "SELECT * FROM space_facilities WHERE sf_space_id='" . $space_id . "'  AND sf_status='want' ORDER BY sf_space_id DESC";
$result = $conn->query($sql);


      
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {	
		

         echo '<tr class="table-active">
                <td class="ml-4">'.$row["sf_name"].'<span style="display:none;">'.$row["sf_id"].'</span> :</td>
                <td class="ml-4">'.$row["sf_rate"].'</td>
                <td>
                    <button class="btn waves-effect waves-light btn-danger c_delete"><i class="icofont icofont-eye-alt"></i>Remove</button><br>
                </td>
             </tr>';
	}
	
}
else
{
	echo "No Space facilities";
}
$conn->close();
?>