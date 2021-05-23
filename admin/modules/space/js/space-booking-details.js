$(document).ready(function(e){

    if (localStorage.getItem("space_booking_id") === null) {
      alert("Invalid Action");
      window.location="../html/space-book-list.html";
    }
    else{      
      getSpaceById();
    }

     
    function getSpaceById(){

        var space_booking_id = localStorage.getItem("space_booking_id");  
        // alert(space_id);        
        $.ajax({
          type: 'POST',
          url: '../php/space-booking-details.php',
          data: {space_booking_id : space_booking_id}
        })
        .done(function(response){ 

            // alert(response.space_name);
            if(response.success){
              $("#id_space_id").val(response.sb_id);
              $("#id_space_name").val(response.sb_name);
              $("#id_space_location").val(response.sb_companyEmail);
              $("#id_space_area").val(response.sb_companyName);
              $("#id_space_description").val(response.sb_mobile);
              $("#id_space_quantity").val(response.sb_bdate);
              $("#id_space_price").val(response.sb_paymentType);
              $("#id_space_map").val(response.sb_smount);
              // $("#id_txt_product_description").val(response.product_description);                
            }
            else{       
              alert(response.message);
            }
        })
        .fail(function(response) {
          alert("connection Failed"+response);
        }); 
    }


  $("#id_backBtn").click(function(){
              window.location="../html/space-book-list.html";
  })
});