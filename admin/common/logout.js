$(document).ready(function(e){

	$(".c_logout").click(function(e) {	
		// alert("click");
	  $.ajax({
	        type: 'POST',
	        url: '../../../common/Session_destroy.php',
	        data: {}        
	    })
	  .done(function(response){
	  		// alert(response);
            if(response=="index.html"){
              // console.log(data);
              window.location = '../../../auth-normal-sign-in.html';              
            }
	    })
      .fail(function(response) {
        	console.log(response);
      });
	      
	    return false;
	});

});