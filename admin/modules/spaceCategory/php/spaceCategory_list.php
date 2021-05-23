<?php
session_start();
require '../../../common/connection.php';

$i=0;
$sql = "SELECT * FROM space_type WHERE st_status = '1' ORDER BY st_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

         echo '<tr class="table-active">
                  <th scope="row">'.++$i.'</th>
                  <td>'.$row["st_name"]. '<span style="display:none;">'.$row["st_id"].'</span></td>
                  <td>
                      <button class="btn waves-effect waves-light btn-primary c_edit"><i class="icofont icofont-star"></i>Edit</button>

                      <button class="btn waves-effect waves-light btn-danger c_delete"><i class="icofont icofont-eye-alt"></i>Delete</button>
                  </td>
               </tr>';
	}
	
}
else
{
	echo "<h3 class='text-center col-md-12'>Space category is empty...</h3>";
}
$conn->close();
?>