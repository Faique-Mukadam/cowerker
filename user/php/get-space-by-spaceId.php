<?php
session_start();
require '../../php/connection.php';


$space_id=$_POST["space_id"];
/*$sql = "SELECT SUM(sf.sf_rate) as sf_amount, s.space_image1,s.space_image2,s.space_image3,s.space_id,s.space_name,s.space_area,s.space_location,s.space_people_Qty,s.space_description,s.space_price,s.space_duration FROM space s,space_facilities sf WHERE s.space_id = sf.sf_space_id AND s.space_id = '" . $space_id . "' AND s.space_status='available' ORDER BY s.space_id DESC";*/

$sql = "SELECT space_image1,space_image2,space_image3,space_id,space_name,space_area,space_location,space_people_Qty,space_description,space_price,space_duration,space_map_location FROM space WHERE space_id = '" . $space_id . "' AND space_status='available' ORDER BY space_id DESC";
$result = $conn->query($sql);


echo '
      <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all">';
      
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

		
		// echo $row["space_name"];

         /*echo '<a class="nav-link c_click" href="#">'.$row['st_name'].'</a><span style="display:none;">'.$row['st_id'].'</span>';*/

         echo '<section class="banner-bottom py-lg-5 py-3">
            <div class="container">
               <div class="inner-sec-shop pt-lg-4 pt-3">
                  <div class="row">

                     <div id="demo" class="carousel slide" data-ride="carousel">

                          <!-- Indicators -->
                          <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                          </ul>

                          <!-- The slideshow -->
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="../' . $row["space_image1"] . '" height="250" width="250"  class="" alt="Not found">
                            </div>
                            <div class="carousel-item">
                              <img src="../' . $row["space_image2"] . '" height="250" width="250"  class="" alt="Not found">
                            </div>
                            <div class="carousel-item">
                              <img src="../' . $row["space_image3"] . '" height="250" width="250"  class="" alt="Not found">
                            </div>
                          </div>

                          <!-- Left and right controls -->
                          <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </a>
                          <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </a>
                     </div>
                     <div class="col-lg-8 ml-4 single-right-left simpleCart_shelfItem">
                           <h3 class="c_sname">'.$row["space_name"].'</h3>
                           </p>
                           <h5><i class="fa fa-map-marker" aria-hidden="true"></i> Location/Address : <span class="c_address">'.$row["space_area"].','.$row["space_location"].'</span></h5>
                           <div class="color-quality mt-4">
                              <div class="color-quality-right">
                                 <div class="row">
                                    <div class="col-md-6">
                                       <h5><i class="fa fa-user" aria-hidden="true"></i>&nbsp; People :<span class="c_qty"> '.$row["space_people_Qty"].'</span></h5>
                                    </div>
                                    <div class="col-md-6">
                                       <h5><i class="fas fa-rupee-sign">.</i> Price :<span> '.$row["space_price"].'/'.$row["space_duration"].'</span></h5>
                                    </div>
                                 </div>
                              </div> 
                           </div>
                           <div class="c_description mt-3">
                              <h5 class="mb-3"><i class="fa fa-info-circle" aria-hidden="true"></i> Description :</h5>
                              <span class="text-center ml-4 mt-3">'.$row["space_description"].'</span>                              
                           </div>
                        <div class="container-fluid mt-4">
                           <button type="button" class="btn btn-outline-info btn-md float-right c_btnBook">Book Now</button>
                        </div>
                     </div>
                     <div class="clearfix"> </div>                     
                  </div>
               </div>
            </div>
         </section>
         <!--subscribe-address-->
         <section class="subscribe">
            <div class="container-fluid">
            <div class="row">
               <div class="col-lg-12 col-md-12 map-info-right px-0">
                  <iframe width="600" height="500" id="gmap_canvas" src='.$row["space_map_location"].' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="overflow:auto;"></iframe>
               </div>
           </div>
         </section>';
	}
	
}
else
{
	// echo "No Space";
  echo "<h3 class='text-center col-md-12'>No workspace available..</h3>";
}
$conn->close();
?>