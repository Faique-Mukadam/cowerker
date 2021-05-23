<?php
session_start();
require '../../php/connection.php';
$sql = "SELECT distinct(space_location) FROM space WHERE space_status='available' ORDER BY space_id DESC limit 6";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

          $sqlchk = "SELECT COUNT(space_location) as spaceCount,space_location,space_image1 FROM space WHERE space_location='".$row["space_location"]."' AND space_status='available' ORDER BY space_id DESC";
          $resultchk = $conn->query($sqlchk);

          if ($resultchk->num_rows > 0) {

              while($row = $resultchk->fetch_assoc()) {

                  echo '<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers" id="id_topCity">
                            <img src="../' . $row["space_image1"] . '" height="300" width="300" class="img-thumbnail1" alt="">
                            <div class="banner-right-icon">
                               <h4 class="pt-3 c_spaceName" style="color: black;">'.$row["space_location"].'</h4>
                            </div>
                            <div class="outs_more-buttn mb-2">
                               <span style="display:none;">'.$row["space_location"].'</span>
                               <a href="#">'.$row["spaceCount"].' spaces</a>
                               <a href="#" class=" c_topCity">Know More</a>
                            </div>
                         </div> ';

              }

          }

	}
	
}
else
{
	echo "<h3 class='text-center col-md-12'>No workspace available..</h3>";
}
?>
<style>
  #id_topCity:hover{
    border: 2px solid red;
    border-radius: 5px;
  }
</style>
<?php
$conn->close();
?>