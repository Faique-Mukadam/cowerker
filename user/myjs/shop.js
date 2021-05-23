$(document).ready(function(e){

    // alert("loaded"); 
    mostBookedSpace(); 

    $.ajax({
      type: 'POST',
      url: 'php/get-newLauched.php',
      data: {}
    })
    .done(function(response){ 
                   
            // alert(response);
          $("#id_allSpaces").html(response);

          // localStorage.removeItem("space_type_id");
       

    })
    .fail(function(response) {
      alert("connection Failed");
    }); 


    $("#id_allSpaces").on("click",".c_quick_view",(function(ev){ 

        
        var space_id;
        space_id = $(this).parent().parent().parent().next().children().children().children().children().html();
        // alert(all_space_id);
        localStorage.setItem("space_id", space_id);
        window.location.href="single.html";

    }));

    function mostBookedSpace(){
          $.ajax({
          type: 'POST',
          url: 'php/get-mostBookedSpace.php',
          data: {}
        })
        .done(function(response){ 
                       
                // alert(response);
              $("#id_mostBooked").html(response);

              // localStorage.removeItem("space_type_id");
           

        })
        .fail(function(response) {
          alert("connection Failed");
        });


        $("#id_mostBooked").on("click",".c_clickMostBooked",(function(ev){ 
            
            var space_id;
            space_id = $(this).parent().children().children().children().html();
            // alert(space_id);
            localStorage.setItem("space_id", space_id);
            window.location.href="single.html";

        }));
    }
});