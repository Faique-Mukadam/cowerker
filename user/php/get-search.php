<?php
session_start();
require '../../php/connection.php';


$searchName=$_POST["searchName"];
$sql = "SELECT space_id,space_name,space_location,space_area FROM space WHERE space_location LIKE '%$searchName%' AND  space_status='available'";

/*$sql = "SELECT space_id,space_name,space_location,space_area FROM space WHERE space_name LIKE '%$searchName%' AND  space_location LIKE '%$searchName%' AND  space_area LIKE '%$searchName%' AND space_status='available' ";*/
$result = $conn->query($sql);

if ($result->num_rows > 0) {
      echo "
         <style>
            p{
               cursor:pointer;
            }
            p:hover {
              background-color: #ea1d5d;
            }
         </style>";
    while($row = $result->fetch_assoc()) {

		
		// echo $row["space_location"];

         /*echo '<a class="nav-link c_click" href="#">'.$row['st_name'].'</a><span style="display:none;">'.$row['st_id'].'</span>';*/

         echo '<p class="c_spaceDeatils"><span style="display:none;">'.$row['space_id'].'</span>'.$row['space_name'].','.$row['space_area'].','.$row['space_location'].'</p>';
	}
	
}
else
{
	echo "<p class='text-center col-md-12'>No location available..</p>";
}
$conn->close();
?>