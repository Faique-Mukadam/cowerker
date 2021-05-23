$(document).ready(function(e){
// Start insert customer registration 
	$("#id_cregisterbtn").click(function(e) { 
	      var nameRegex = /^[a-zA-Z ]{2,30}$/;
	      var numberRegex = /^[0-9]{1,10}$/;
	      var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	  	  var name,email,pass,cpass
	      name = $("#id_name").val();
	      email = $("#id_email").val();
	      pass = $("#id_password").val();
	      cpass = $("#id_cpassword").val();

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
	      else if($('#id_password').val() == undefined || $('#id_password').val() == "")
	      {
	      		alert("Password should not empty.!!");
	      
	      
	      $('#id_password').focus();
	        return false;
	          
	      } 
	      else if($('#id_cpassword').val() == undefined || $('#id_cpassword').val() == "")
	      {
	      		alert("Password should not empty.!!");
	      
	      
	      $('#id_cpassword').focus();
	        return false;
	          
	      } 
	      else if(!emailRegex.test($('#id_email').val())){

	      	  alert("Invalid Email.");
	          $('#id_email').focus();
	          return false;
	      }
	      
		      if(cpass != pass){

		      	alert("Password Does not match.");
	      } 
	      else{
	      $.ajax({
	        type: 'POST',
	        url: 'php/register.php',
	        data: {name : name,email : email, pass : pass,role:"user",w_amount : "500"}        
	      })
	      .done(function(response){ 

		      	alert(response);
			    window.location = "index.html";
	        

	      }) //end done()
	      .fail(function(response) {
	          alert(response);
	      });
	      
	      return false;
	    }
	});
	// End customer registration
});