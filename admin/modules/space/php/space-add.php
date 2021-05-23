<?php
session_start();
include '../../../common/connection.php';

$space_category_id=$_POST["space_category_name"];
$space_name=$_POST["space_name"];
$space_location=$_POST["space_location"];
$space_area=$_POST["space_area"];
$space_description=$_POST["space_description"];
$space_peopleQty=$_POST["space_peopleQty"];
$space_price=$_POST["space_price"];
$space_duration=$_POST["space_duration"];
$space_map=$_POST["space_map"];



$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
$path1 = "../../../../uploads/"; // upload directory
$path2 = "uploads/"; // upload directory

$path3 = "../../../../uploads/"; // upload directory
$path4 = "uploads/"; // upload directory

$path5 = "../../../../uploads/"; // upload directory
$path6 = "uploads/"; // upload directory



if(isset($_FILES['space_image1']) && isset($_FILES['space_image2']) && isset($_FILES['space_image3']))
{
	$img1 = $_FILES['space_image1']['name'];
	$tmp1 = $_FILES['space_image1']['tmp_name'];

	$img2 = $_FILES['space_image2']['name'];
	$tmp2 = $_FILES['space_image2']['tmp_name'];

	$img3 = $_FILES['space_image3']['name'];
	$tmp3 = $_FILES['space_image3']['tmp_name'];

	// get uploaded file's extension
	$ext1 = strtolower(pathinfo($img1, PATHINFO_EXTENSION));

	$ext2 = strtolower(pathinfo($img2, PATHINFO_EXTENSION));

	$ext3 = strtolower(pathinfo($img3, PATHINFO_EXTENSION));

	// can upload same image using rand function
	$final_image1 = rand(1000,1000000).$img1;
	$final_image2 = rand(1000,1000000).$img2;
	$final_image3 = rand(1000,1000000).$img3;

// check's valid format
	if(in_array($ext1, $valid_extensions) && in_array($ext2, $valid_extensions) && in_array($ext3, $valid_extensions)) 
	{ 
	$path1 = $path1.strtolower($final_image1); 
	$path2 = $path2.strtolower($final_image1);

	$path3 = $path3.strtolower($final_image2);
	$path4 = $path4.strtolower($final_image2);

	$path5 = $path5.strtolower($final_image3);
	$path6 = $path6.strtolower($final_image3);
	//echo $path;
	// $path1="Admin/".$path;

		if(move_uploaded_file($tmp1,$path1) && move_uploaded_file($tmp2,$path3) && move_uploaded_file($tmp3,$path5)) 
		{

		//echo $path1;
		$sql = "INSERT space(space_name,space_location,space_area,space_description,space_people_Qty,space_duration,space_price,space_map_location,space_image1,space_image2,space_image3,space_type_id) VALUES ('".$space_name."','".$space_location."','".$space_area."','".$space_description."','".$space_peopleQty."','".$space_duration."','".$space_price."','".$space_map."','".$path2."','".$path4."','".$path6."','".$space_category_id."')" ;

				$insert = $conn->query($sql);
				if($insert){
	
					/*$sqlchk = "SELECT space_id FROM space ORDER BY space_id DESC LIMIT 1";
					$result = $conn->query($sqlchk);

					if ($result->num_rows > 0) {

					    while($row = $result->fetch_assoc()) {

							  echo  $row["space_id"];			  
							  
						}
					}*/
					echo "Space Added Successfully.!!";
				}
				else{
					echo "Space Not Added.!!";
				}




		//echo $insert?'ok':'err';
		}
	} 
	else 
	{
	echo 'invalid';
	}
}

$conn->close();
?>



			