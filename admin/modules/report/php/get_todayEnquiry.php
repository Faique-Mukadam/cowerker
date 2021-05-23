<?php
session_start();
require '../../../common/connection.php';

$sno=0;
$sql = "SELECT * FROM user_enquiry WHERE ue_status='unread' AND DATE(ue_created_at) = CURDATE() order by ue_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {          
          
          
             echo '<tr class="table-active">
                      <th scope="row">'.++$sno.'</th>
                      <td>'.$row["ue_name"]. '<span style="display:none;">'.$row["ue_id"].'</span></td>
                      <td>'.$row["ue_email"].'</td>
                      <td>'.$row["ue_mobile"].'</td>
                      <td>'.$row["ue_description"].'</td>
                      <td>
                          <button class="btn waves-effect waves-light btn-primary c_edit"><i class="icofont icofont-star"></i>Reply</button>
                      </td>
                   </tr>';
          
	  }
	
}
else
{
	echo "No Enquiry Today";
}
$conn->close();
?>