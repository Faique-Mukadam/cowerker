$(document).ready(function(e){
	  
	  $.ajax({
                  type: 'GET',
                  url: '../../../common/Session_check.php',
                  data: {}
                  }).done(function (data){
                    // alert(data);
                    if(data=="login.html"){
                      // console.log(data);
                      window.location = '../../../auth-normal-sign-in.html';              
                    }
                    else{
                      // alert(data);
                      $(".c_userEmail").html(data);
                        // $('#id_logout').css("display", "visible");

                    }
                  })
                  .fail(function() { // if fail then getting message
                
                  // just in case posting your form failed
                  	alert("index connection Failed");
                  });
                  return false;

});