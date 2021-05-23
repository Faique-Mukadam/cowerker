$(document).ready(function(e){
	
	getSpaceCategory();
	addSpace();

	function getSpaceCategory(){
	
		$.ajax({
			type: 'POST',
			url: '../php/get-spaceCategory.php',
			data: {}        
		})
		.done(function(response){
			$("#id_space_category_name").html(response);
		})
		.fail(function(response) {
				alert(response);
		});

	}


	function addSpace(){
		$("#id_spaceAdd_form").on("submit", (function(e) { 
			// e.preventDefault();
			var nameRegex = /^[a-zA-Z ]{2,30}$/;
			var numberRegex = /^[0-9]{1,10}$/;
			var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			var space_category_id,space_name,space_location,space_area,space_description,
			space_peopleQty,space_price,space_duration,space_map,space_url;
			
			
			space_category_id = $("#id_space_category_name").val();
			space_name = $("#id_space_name").val();
			space_location = $("#id_space_location").val();
			space_area = $("#id_space_area").val();
			space_description = $("#id_space_description").val();
			space_peopleQty = $("#id_space_quantity").val();
			space_price = $("#id_space_price").val();
			space_duration = $("#id_space-duration").val();
			space_map = $("#id_space_map").val();
			space_url = $("#id_space_image").val();

			if($('#id_space_name').val() == undefined || $('#id_space_name').val() == "")
			{	
				alert("Space name should not be empty..!");
				$('#id_space_name').focus();
				return false;
			} 
			else if($('#id_space_location').val() == undefined || $('#id_space_location').val() == "")
			{	
				alert("Space location should not be empty..!");		
				$('#id_space_location').focus();
				return false;
			}  
			if($('#id_space_area').val() == undefined || $('#id_space_area').val() == "")
			{
				alert("Space area should not be empty..!");		
				$('#id_space_area').focus();
				return false;
			} 
			else if($('#id_space_description').val() == undefined || $('#id_space_description').val() == "")
			{		    
				alert("Space description should not be empty..!");		  		
				$('#id_space_description').focus();
				return false;
			} 
			else if($('#id_space_quantity').val() == undefined || $('#id_space_quantity').val() == "")
			{		    
				alert("Space quantity should not be empty..!");		  		
				$('#id_space_quantity').focus();
				return false;
			} 
			else if($('#id_space_price').val() == undefined || $('#id_space_price').val() == "")
			{		    
				alert("Space price should not be empty..!");		  		
				$('#id_space_price').focus();
				return false;
			} 
			else if($('#id_space-duration').val() == undefined || $('#id_space-duration').val() == "")
			{		    
				alert("Space duartion should not be empty..!");		  		
				$('#id_space-duration').focus();
				return false;
			} 
			else if($('#id_space_map').val() == undefined || $('#id_space_map').val() == "")
			{		    
				alert("Space map should not be empty..!");		  		
				$('#id_space_map').focus();
				return false;
			} 
			else if($('#id_space_image').val() == undefined || $('#id_space_image').val() == "")
			{		    
				alert("Space image should not be empty..!");		  		
				$('#id_space_image').focus();
				return false;
			} 
			else if($('#id_space_category_name').val() == undefined || $('#id_space_category_name').val() == "")
			{			
				alert("Space Category name should not be empty..!");
				$('#id_space_category_name').focus();
				return false;
			}   
			else
			{
				$.ajax({
					url: '../php/space-add.php', // Url to which the request is send
					type: 'POST',	// Type of request to be send, called as method	        
					data: new FormData(this),  // Data sent to server, a set of key/value pairs (i.e. form fields and values)
					contentType : false, // The content type used when sending data to the server.
					cache : false,  // To unable request pages to be cached
					processData : false, // To send DOMDocument or non processed data file it is set to false
						success : function (data)
						{	
							// localStorage.setItem("admin_space_id", data);
							alert(data);
							$('#id_spaceAdd_form').trigger("reset");
							// window.location="addProductMen.html";
						}
				});		
		  	}
  		}));		
	}
});