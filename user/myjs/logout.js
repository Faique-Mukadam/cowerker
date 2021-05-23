$(document).ready(function(e){

	$("#id_logout").click(function(e) {	 
	  $.ajax({
	        type: 'POST',
	        url: '../php/Session_destroy.php',
	        data: {}        
	    })
	  .done(function(response){
    		$("#id_wallet").hide();
	  		$("#id_logout").hide();
            localStorage.removeItem("space_id"); 
		    window.location = response;
		    console.log(response);
	    })
      .fail(function(response) {
        	console.log(response);
      });
	      
	    return false;
	});

});