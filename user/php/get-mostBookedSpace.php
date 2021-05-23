<?php
session_start();
require '../../php/connection.php';

$first_mostBooked;
$second_mostBooked;


/*$sql = "select (SELECT MAX(sb_space_id) FROM space_booking) maxBooked,
  (SELECT MAX(sb_space_id) FROM space_booking
  WHERE sb_space_id NOT IN (SELECT MAX(sb_space_id) FROM space_booking )) as 2nd_max_booked";
*/  
$sql = "SELECT MAX(sb_space_id) as maxBooked FROM space_booking";
$result = $conn->query($sql);

   if ($result->num_rows > 0) {

       while($row = $result->fetch_assoc()) {
            $first_mostBooked = $row["maxBooked"];
            // $second_mostBooked = $row["2nd_max_booked"];
   	}
      // echo $first_mostBooked." : ".$second_mostBooked;
   }
   else
   {
   	echo "<h3 class='text-center col-md-12'>No Most Booked Spaces..</h3>";
   }

/*$sqlchk = "SELECT space_id,space_name,space_image1,space_price FROM space WHERE space_id IN($first_mostBooked,$second_mostBooked)";*/

$sqlchk = "SELECT space_id,space_name,space_image1,space_price FROM space WHERE space_status='available' AND space_id = '".$first_mostBooked."'";
$resultchk = $conn->query($sqlchk);
   if ($resultchk->num_rows > 0) {

       while($row = $resultchk->fetch_assoc()) {

         // echo $row["space_id"]." : ".$row["space_name"]." : ".$row["space_image1"]." : ".$row["space_price"];
         /*echo '<div class="col-xs-4 img-deals">
                           <img src="../' . $row["space_image1"] . '" width="50" height="60" alt="" class="img-fluid">
                        </div>
                        <div class="col-xs-8 img-deal1">
                           <h3>'.$row["space_name"].'</h3>
                           <a href="single.html">'.$row["space_price"].'</a>
                        </div>
                        <div class="clearfix"></div>';*/

         echo '<div style="cursor:pointer;" class="row special-sec1 c_clickMostBooked">
                           <div class="col-xs-6 img-deals1">
                              <span style="display:none;">'.$row["space_id"].'</span>
                              <img src="../' . $row["space_image1"] . '" width="50" height="60" alt="" class="img-fluid">
                           </div>
                           <div class="col-xs-6 img-deal1">
                              <h3>'.$row["space_name"].'</h3>
                              <a href="#">'.$row["space_price"].'</a>
                           </div>
                           <div class="clearfix"></div>
               </div><br>';

      }
   }
   else{
      echo "<h5 class='text-center col-md-12'>No Most Booked Spaces..</h5>";
   }
$conn->close();
?>