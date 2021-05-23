$(document).ready(function(e){	

    sessionCheck();
    $("#id_logout").hide();
    $("#id_wallet").hide();


    function sessionCheck(){
    
        $.ajax({
                type: 'GET',
                url: '../php/Session_check.php',
                data: {}
                }).done(function (data){
                  if(data=="login.html"){
                    console.log(data);
                    // window.location = data;              
                  }
                  else{
                    // alert(data);
                    $("#id_userEmail").html(data);
                      $("#id_wallet").show();
                      $("#id_logout").show();
                      // $('#id_logout').css("display", "visible");

                  }
                })
                .fail(function() { // if fail then getting message
              
                // just in case posting your form failed
                  alert("connection Failed");
                });
                return false;      
    }
});