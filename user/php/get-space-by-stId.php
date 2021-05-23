<?php
session_start();
require '../../php/connection.php';


$space_type_id=$_POST["get_space_type_id"];
$sql = "SELECT * FROM space WHERE space_type_id = '" . $space_type_id . "' AND space_status='available' ORDER BY space_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

		
		// echo $row["space_name"];

         /*echo '<a class="nav-link c_click" href="#">'.$row['st_name'].'</a><span style="display:none;">'.$row['st_id'].'</span>';*/

         echo '<div class="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div class="product-toys-info">
                           <div class="men-pro-item">
                              <div class="men-thumb-item">
                                 <img src="../' . $row["space_image1"] . '" height="250" width="250"  class="" alt="Not found">
                                 <div class="men-cart-pro">
                                    <div class="inner-men-cart-pro">
                                       <a href="#" class="link-product-add-cart c_quick_view">Quick View</a>
                                    </div>
                                 </div>
                                 <span class="product-new-top">New</span>
                              </div>
                              <div class="item-info-product">
                                 <div class="info-product-price">
                                    <div class="grid_meta">
                                       <div class="product_price">
                                       <span style="display:none;">'.$row["space_id"].'</span>
                                          <h4>
                                             <a href="#" class="c_space_name">'.$row["space_name"].'</a>
                                          </h4>
                                          <div class="grid-price mt-2">
                                             <span class="money ">'.$row["space_area"].','.$row["space_location"].'</span>
                                             <span class="money float-right">Rs. '.$row["space_price"].'/'.$row["space_duration"].' <b>Only Space.</b></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>';
	}
	
}
else
{
	// echo "Workspace empty";
   echo "<h3 class='text-center col-md-12'>No workspace available..</h3>";
}
$conn->close();
?>