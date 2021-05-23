<?php
session_start();
require '../../../common/connection.php';

$i='';
$sno=0;
$sql = "SELECT * FROM space WHERE space_status='available' order by space_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {          
          
          
             echo '<tr class="table-active">
                      <th scope="row">'.++$sno.'</th>
                      <td>'.$row["space_name"]. '<span style="display:none;">'.$row["space_id"].'</span></td>
                      <td>'.$row["space_location"].' '.$row["space_area"].'</td>
                      <td><img src="../../../../' . $row["space_image1"] . '" height="100" width="100"></td>
                      <td>
                          <button class="btn waves-effect waves-light btn-primary c_edit"><i class="icofont icofont-star"></i>Edit</button>

                          <button class="btn waves-effect waves-light btn-danger c_delete"><i class="icofont icofont-eye-alt"></i>Delete</button>
                      </td>
                   </tr>';
          
	  }
	
}
else
{
	echo "<h3 class='text-center col-md-12'>Space is empty...</h3>";
}
$conn->close();
?>