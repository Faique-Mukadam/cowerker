$(document).ready(function(e){
	
	addEnquiry();

	function addEnquiry(){

        $.ajax({
            type: 'GET',
            url: '../php/Session_check.php',
            data: {}
            })
            .done(function (data){
            if(data=="login.html"){
            
                $("#id_table").hide();
                $("#id_error").text("For viewing booking list you need to first login..!");
                // alert("For viewing booking list you need to first login..!");
                // location.reload();              
            }
            else{

                $.ajax({
                type: 'POST',
                url: 'php/mybooking.php',
                data: {}        
                })
                .done(function(response){ 

                    $("#id_viewBookingList").html(response);
                

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