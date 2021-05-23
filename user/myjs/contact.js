$(document).ready(function(e){
	
	addEnquiry();

	function addEnquiry(){

		$("#id_btnContact").click(function(e) { 

		  sessionCheck();
	      var nameRegex = /^[a-zA-Z ]{2,30}$/;
	      var numberRegex = /^[0-9]{1,10}$/;
	      var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	  	  var name,email,mobile,enquiry;
	      name = $("#id_name").val();
	      email = $("#id_email").val();
	      mobile = $("#id_mobile").val();
	      enquiry = $("#id_enquiry").val();

	      if($('#id_name').val() == undefined || $('#id_name').val() == "")
	      {
	      		alert("Name should not empty.!!");
	      
	      
	      $('#id_name').focus();
	        return false;
	          
	      }
	     else if($('#id_email').val() == undefined || $('#id_email').val() == "")
	      {
	      		alert("Email should not empty.!!");
	      
	      
	      $('#id_email').focus();
	        return false;
	          
	      } 
	      else if($('#id_mobile').val() == undefined || $('#id_mobile').val() == "")
	      {
	      		alert("Mobile Number should not empty.!!");
	      
	      
	      $('#id_mobile').focus();
	        return false;
	          
	      } 
	      else if($('#id_enquiry').val() == undefined || $('#id_enquiry').val() == "")
	      {
	      		alert("Password should not empty.!!");
	      
	      
	      $('#id_enquiry').focus();
	        return false;
	          
	      } 
	      else if(!emailRegex.test($('#id_email').val())){

	      	  alert("Invalid Email.");
	          $('#id_email').focus();
	          return false;
	      }
	      else{

		      	$.ajax({
	                type: 'GET',
	                url: '../php/Session_check.php',
	                data: {}
	                })
		      		.done(function (data){
	                  if(data=="login.html"){
	                    
	                    alert("For sending enquiry you need to first login..!");
	                    window.location = "index.html";              
	                  }
	                  else{

					      $.ajax({
					        type: 'POST',
					        url: 'php/contact.php',
					        data: {name : name,email : email, mobile : mobile, enquiry : enquiry}        
					      })
					      .done(function(response){ 

						      	alert(response);
							    window.location = "contact.html";
					        

					      }) //end done()
					      .fail(function(response) {
					          alert(response);
					      });

	                	}
	              	})
	                .fail(function() { // if fail then getting message
	              
	                // just in case posting your form failed
	                  alert("connection Failed");
	                });
		  	}
		});
	}

	function sessionCheck(){
    

	}

	
});