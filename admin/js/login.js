	$(document).ready(function(e){

	    $("#id_login").click(function(e) {
	        
	        var email,password;
    			email=$("#id_usename").val();
    			password=$("#id_pass").val();

	        if(email == undefined || email == "") {

	      		 alert("Email should not empty.!!");
      
              $('#id_usename').focus();
              return false;
          
          }
	       else if(password == undefined || password == "") {

	      		alert("Password should not empty.!!");
	      
	      
              $('#id_pass').focus();
                return false;
              
          }
	        else
	        {
    	          $.ajax({
    	                type: 'POST',
    	                url: 'php/login.php',
    	                data: {email : email, password : password, role : "admin"}        
    	           })
    	           .done(function(response){ 
                    if(response.success){

        				    $(".c_userEmail").text(response.cm_email);

                      	alert(response.message);
                      	window.location='index.html';

                    }else{
                    	alert(response);
                    }

                })
                .fail(function(response) {
                	alert(response);
                });
              
                return false;
          }
    });
});