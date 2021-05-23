$(document).ready(function(e){

    if (localStorage.getItem("space_id") === null) {
      alert("Invalid Action");
      window.location="index.html";
    }

    allNewSpaceFunc();
    workSpaceFunc();

    function workSpaceFunc(){

        var space_id = localStorage.getItem("space_id");  
        // alert(space_id);        
        $.ajax({
          type: 'POST',
          url: 'php/get-space-by-spaceId.php',
          data: {space_id : space_id}
        })
        .done(function(response){ 
                       
                // alert(response);
              $("#id_spaceData").html(response);

              // localStorage.removeItem("space_type_id");
           

        })
        .fail(function(response) {
          alert("connection Failed");
        }); 
    }

    

    /*-------start code for Lauched Space-----*/
    function allNewSpaceFunc(){

        var space_id = localStorage.getItem("space_id");  
        // alert(space_id);        
        $.ajax({
          type: 'POST',
          url: 'php/get-space-by-spaceId.php',
          data: {space_id : space_id}
        })
        .done(function(response){ 
                       
                // alert(response);
              $("#id_spaceData").html(response);

              // localStorage.removeItem("space_type_id");
           

        })
        .fail(function(response) {
          alert("connection Failed");
        }); 
    }

    
  /*-------start code for Lauched Space-----*/

    $("#id_spaceData").on("click",".c_btnBook",(function(ev){ 

        
        // var space_amount;
        // var productList = [];
        /*var item;
        space_name_pdf = $(this).parent().parent().children(".c_sname").html();
        space_address_pdf = $(this).parent().parent().children().children(".c_address").html();
        item = {space_name_pdf : space_name_pdf,space_address_pdf : space_address_pdf};
        localStorage.setItem("SpaceDetails", JSON.stringify(item));*/
        // localStorage.setItem("space_id", space_id);
        // Check session first then booked space
        $.ajax({
        type: 'GET',
        url: '../php/Session_check.php',
        data: {}
        })
        .done(function (data){
              if(data=="login.html"){
                
                alert("For Booking space. you need to first login..!");
                // window.location = "index.html";              
                location.reload();
              }
              else{
                window.location.href="checkout.html";
              }
        })
        .fail(function() { // if fail then getting message
      
        // just in case posting your form failed
          alert("connection Failed");
        });

    }));
});