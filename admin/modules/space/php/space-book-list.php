<?php
session_start();
require '../../../common/connection.php';

$sno=0;
$sql = "SELECT * FROM space_booking ORDER BY sb_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {          
          
          
             echo '<tr class="table-active">
                      <th scope="row">'.++$sno.'</th>
                      <td>'.$row["sb_name"]. '<span style="display:none;">'.$row["sb_id"].'</span></td>
                      <td>'.$row["sb_companyName"].'</td>
                      <td>'. $row["sb_mobile"] .'</td>
                      <td>'. $row["sb_created_at"] .'</td>
                      <td>
                          <button class="btn waves-effect waves-light btn-primary c_edit"><i class="icofont icofont-star"></i>View More</button>
                      </td>
                   </tr>';
          
	  }
	
}
else
{
	echo "<h3 class='text-center col-md-12'>Book Space is empty...</h3>";
}
$conn->close();
?>