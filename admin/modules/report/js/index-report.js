	$(document).ready(function(e){
    
    get_user();
    get_availableSpace();
    get_bookedSpace();
    get_totalAmount();
    get_todayPublishedSpace();
    get_todayBookedSpace();
    get_todayEnquiry();
    update_enquiry();



    function get_user(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get-user.php'
        })
        .done(function(response){ 


          if(response.success){
            // alert(response.user_id);
            $("#id_totalUser").html(response.cm_id);         
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_availableSpace(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_availableSpace.php'
        })
        .done(function(response){ 


          if(response.success){
            // alert(response.user_id);
            $("#id_availableSpace").html(response.space_id);         
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_bookedSpace(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_BookedSpace.php'
        })
        .done(function(response){ 


          if(response.success){
            // alert(response.user_id);
            $("#id_bookedSpace").html(response.space_id);         
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_totalAmount(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_totalAmount.php'
        })
        .done(function(response){ 

          // alert(response.space_price);
          if(response.success){
            if(response.space_price =='null'){

              $("#id_totalAmount").html("0");               
            }
            else{
              // alert(response.space_price);
              $("#id_totalAmount").html(response.space_price); 
            }        
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_todayPublishedSpace(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_todayPublishedSpace.php'
        })
        .done(function(response){ 


          if(response.success){
            // alert(response.user_id);
            $("#id_publishedSpace").html(response.space_id);         
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_todayBookedSpace(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_todayBookedSpace.php'
        })
        .done(function(response){ 

          // alert(response);
          if(response.success){
            // alert(response.user_id);
            $("#id_todaytBookedSpace").html(response.space_id);         
          }

        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        }); 

    }

   function get_todayEnquiry(){
        // alert("load");
        $.ajax({
          type: 'POST',
          url: 'modules/report/php/get_todayEnquiry.php'
        })
        .done(function(response){ 
          // alert(response);
          if (response=="No Enquiry Today") {
              $("#id_enquirySection").css("display", "none");
          }else{

            $("#id_viewEnquiry").html(response);
          }  
        })
        .fail(function(response) {
          console.log("Oop's Something went wrong..!");
          alert(response);
        });
    }

    function update_enquiry(){

        $("#id_viewEnquiry").on("click", ".c_edit", (function (ev){              


            var enquiry_id;
            enquiry_id = $(this).parent().parent().children().next().children().html();
            // alert(space_id);

            $.ajax({
              type: 'POST',
              url: 'modules/report/php/update_enquiry.php',
          data: {enquiry_id : enquiry_id}
            })
            .done(function(response){ 

              $("#id_viewEnquiry").html(response);

                window.location="../admin/index.html";
            })
            .fail(function(response) {
              console.log("Oop's Something went wrong..!");
              alert(response);
            });
        }));

    }
});