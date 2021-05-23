$(document).ready(function(e){	

    
    get_newArrival();

    function get_newArrival(){
    // alert("load");
        $.ajax({
                type: 'POST',
                url: 'php/top-cities.php',
                data: {}
                })
                .done(function (data){
                    // alert(data);
                    // $("#id_newArrival").html(data);
                    $("#id_topCities").html(data);                    
                })
                .fail(function() { // if fail then getting message
              
                // just in case posting your form failed
                  alert("connection Failed");
                }); 


                $("#id_topCities").on("click",".c_topCity",(function(ev){ 

                    
                    var space_location;
                    space_location = $(this).parent().children().html();
                    // alert(space_location);
                    localStorage.setItem("space_location", space_location);
                    window.location.href="top-cities.html";

                }));     
    }

});