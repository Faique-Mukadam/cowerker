$(document).ready(function(e){


    $("#id_topCities").hide();

    if (localStorage.getItem("space_location") === null) {
      alert("Invalid Action");
      window.location="index.html";
    }
    else{
      $("#id_topCities").show();
      getAllTopCitities();
    }
      function getAllTopCitities(){

        var space_location = localStorage.getItem("space_location"); 
        $("#id_space_city_name").html("All "+space_location+" City Spaces") ;
        // alert(space_location);        
        $.ajax({
          type: 'POST',
          url: 'php/get-topCitiesSapce-by-spaceName.php',
          data: {space_location : space_location}
        })
        .done(function(response){ 
                       
                // alert(response);
              $("#id_allSpaces").html(response);
           

        })
        .fail(function(response) {
          alert("connection Failed");
        });  


        $("#id_allSpaces").on("click",".c_quick_view",(function(ev){ 

            
            var space_id;
            space_id = $(this).parent().parent().parent().next().children().children().children().children().html();
            // alert(space_id);
            localStorage.setItem("space_id", space_id);
            localStorage.removeItem("space_location");
            window.location.href="single.html";

        }));
      }    
});