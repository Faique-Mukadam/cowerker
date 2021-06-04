<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];



$sql = "SELECT * FROM space_facilities WHERE sf_space_id='" . $space_id . "'  AND sf_status='want' ORDER BY sf_space_id DESC";

// $sql = "SELECT sf.sf_id,sf.sf_name,sf.sf_rate FROM space_facilities sf ,space s WHERE sf.sf_space_id = s.space_id AND s.space_status='available' AND sf.sf_status='want' AND sf.sf_space_id='" . $space_id . "' ORDER BY sf.sf_space_id DESC";
$result = $conn->query($sql);


      
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {	
		

         echo '<tr class="table-active c_facilitiesData">
                <td class="ml-4">'.$row["sf_name"].'<span style="display:none;"></span> :</td>
                <td class="ml-4">'.$row["sf_rate"].'</td>
                <td>
                    <button class="btn waves-effect waves-light btn-danger c_delete" id=" '.$row["sf_id"].'"><i class="icofont icofont-eye-alt"></i>Remove</button><br>
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