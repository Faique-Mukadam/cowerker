<?php
session_start();
include '../../../common/connection.php';

$space_id=$_POST["id_space_id"];
$space_name=$_POST["space_name"];
$space_location=$_POST["space_location"];
$space_area=$_POST["space_area"];
$space_description=$_POST["space_description"];
$space_peopleQty=$_POST["space_peopleQty"];
$space_price=$_POST["space_price"];
$space_duration=$_POST["space_duration"];
$space_map=$_POST["space_map"];


// echo $space_duration." : ".$space_map;

$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
$path1 = "../../../../uploads/"; // upload directory
$path2 = "uploads/"; // upload directory

$path3 = "../../../../uploads/"; // upload directory
$path4 = "uploads/"; // upload directory

$path5 = "../../../../uploads/"; // upload directory
$path6 = "uploads/"; // upload directory

	if ($_FILES['space_image1']['name'] != '' && $_FILES['space_image2']['name'] != '' && $_FILES['space_image3']['name'] != '') {

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
				
				// $path1="Admin/".$path;

				if(move_uploaded_file($tmp1,$path1) && move_uploaded_file($tmp2,$path3) && move_uploaded_file($tmp3,$path5)) 
				{

					$sql = "UPDATE space SET space_name='".$space_name."',space_location='".$space_location."',space_area='".$space_area."',space_description='".$space_description."',space_people_Qty='".$space_peopleQty."',space_duration='".$space_duration."',space_price='".$space_price."',space_map_location='".$space_map."',space_image1='".$path2."',space_image2='".$path4."',space_image3='".$path6."' WHERE space_id = '".$space_id."' " ;
						$insert = $conn->query($sql);
						if($insert){                
						   header( "Content-type: application/json" );
						   $response = array('success' => true,'message' => 'Space Updated Successfully','details' => 'details');
						   echo json_encode($response);
			            }				
						else{                
						header( "Content-type: application/json" );
						$response = array('success' => false,'message' => 'Space Not Updated','details' => 'details');
						echo json_encode($response);
			            }

				//echo $insert?'ok':'err';
				}
			} 
			else 
			{
				echo 'invalid file.';
			}
		}
	}
	else{		
				
        $sql = "UPDATE space SET space_name='".$space_name."',space_location='".$space_location."',space_area='".$space_area."',space_description='".$space_description."',space_people_Qty='".$space_peopleQty."',space_price='".$space_price."',space_duration='".$space_duration."',space_map_location='".$space_map."' WHERE space_id = '".$space_id."' " ;

	        $insert = $conn->query($sql);
	        if($insert){                
	           header( "Content-type: application/json" );
	           $response = array('success' => true,'message' => 'Space Updated Successfully','details' => 'details');
	           echo json_encode($response);
	        }				
	        else{                
		        header( "Content-type: application/json" );
		        $response = array('success' => false,'message' => 'Space Not Updated','details' => 'details');
		        echo json_encode($response);
	        }
	}
		
?>