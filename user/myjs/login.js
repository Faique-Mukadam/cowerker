	$(document).ready(function(e){

	    $("#id_login").click(function(e) {
	        
	        var email,password;
			email=$("#id_usename").val();
			password=$("#id_pass").val();

	        if(email == undefined || email == "") {

	      		alert("Email should not empty.!!");
      
              $('#login-email').focus();
              return false;
          
          }
	       else if(password == undefined || password == "") {

	      		alert("Password should not empty.!!");
	      
	      
              $('#login-pass').focus();
                return false;
              
          }
	        else
	        {
    	          $.ajax({
    	                type: 'POST',
    	                url: 'php/login.php',
    	                data: {email : email, password : password, role : "user"}        
    	           })
    	           .done(function(response){ 
                    if(response.success){

        				$("#id_userEmail").text(response.cm_email);

                      	alert(response.message);
                      	// window.location='index.html';
                        location.reload();
                      
                          /*swal.fire({
                        icon: 'success',
                        title: 'Hello...',
                        text: 'login successfull!'
                      }).then(function() {
                              window.location = "index.html";
                              });*/

                    }else{

                    	alert(response);
                      /*Lobibox.notify('error', {
                        showClass: 'zoomIn',
                        hideClass: 'zoomOut',
                        position: 'top center',
                        closeButton: true, 
                        fadeOut :200,
                        delay : 1700,
                        msg: response
                     });*/

                }

              })
              .fail(function(response) {
              	alert(response);
              });
              
              return false;
          }
    });
});