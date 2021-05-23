$(document).ready(function(e){

    if (localStorage.getItem("admin_space_id") === null) {
      alert("Invalid Action");
      window.location="../html/space-list.html";
    }
    else{      
      getSpaceById();
      updateSpace();
    }

     var spaceImage1, spaceImage2,spaceImage3 
    function getSpaceById(){

        var space_id = localStorage.getItem("admin_space_id");  
        // alert(space_id);        
        $.ajax({
          type: 'POST',
          url: '../php/space_byId.php',
          data: {space_id : space_id}
        })
        .done(function(response){ 

            // alert(response.space_name);
            if(response.success){
              $("#id_space_name").val(response.space_name);
              $("#id_space_id").val(space_id);
              $("#id_space_location").val(response.space_location);
              $("#id_space_area").val(response.space_area);
              $("#id_space_description").val(response.space_description);
              $("#id_space_quantity").val(response.space_people_Qty);
              $("#id_space_price").val(response.space_price);
              $("#id_space_map").val(response.space_map_location);
              // $("#id_txt_product_description").val(response.product_description);        
              $('#id_space_image1').attr('src', '../../../../'+response.space_image1);        
              $('#id_space_image2').attr('src', '../../../../'+response.space_image2);        
              $('#id_space_image3').attr('src', '../../../../'+response.space_image3);

                  space_image1 = response.space_image1.split("/").pop();
                  space_image2 = response.space_image2.split("/").pop();
                  space_image3 = response.space_image3.split("/").pop();

                  var spaceImage1 = space_image1;
                  var spaceImage2 = space_image2;
                  var spaceImage3 = space_image3;

                  /*Showing image on file side*/
                  function firstImgURL(input) {

                  if (input.files && input.files[0]) {

                      
                      var reader = new FileReader();

                      spaceImage1 = input.files[0].name;

                      reader.onload = function (e) {
                          $('#id_space_image1').attr('src', e.target.result);
                      }

                      reader.readAsDataURL(input.files[0]);
                      }
                  }
                  function secondImgURL(input) {
                      // console.log(spaceImage1);

                  if (input.files && input.files[0]) {

                      
                      var reader = new FileReader();

                      spaceImage2 = input.files[0].name;

                      reader.onload = function (e) {
                          $('#id_space_image2').attr('src', e.target.result);
                      }

                      reader.readAsDataURL(input.files[0]);
                      }
                  }
                  function thirdImgURL(input) {
                      // console.log(spaceImage1);

                  if (input.files && input.files[0]) {

                      
                      var reader = new FileReader();

                      spaceImage3 = input.files[0].name;

                      reader.onload = function (e) {
                          $('#id_space_image3').attr('src', e.target.result);
                      }

                      reader.readAsDataURL(input.files[0]);
                      }
                  }
                  $("#id_spaceImage1").change(function(){
                      firstImgURL(this);
                  });
                  $("#id_spaceImage2").change(function(){
                      secondImgURL(this);
                  });
                  $("#id_spaceImage3").change(function(){
                      thirdImgURL(this);
                  });

                  /*End Showing image on file side*/                
            }
            else{       
              alert(response.message);
            }
        })
        .fail(function(response) {
          alert("connection Failed"+response);
        }); 
    }

    




      
      

    /*-------start code for update Space Category-----*/
    function updateSpace(){
      $("#id_spaceUpdate_form").on("submit", (function(e) { 
      e.preventDefault();
      var nameRegex = /^[a-zA-Z ]{2,30}$/;
      var numberRegex = /^[0-9]{1,10}$/;
      var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var space_id,space_name,space_location,space_area,space_description,
      space_peopleQty,space_price,space_duration,space_map,space_url;
      
      
      space_id = $("#id_space_id").val();
      space_name = $("#id_space_name").val();
      space_location = $("#id_space_location").val();
      space_area = $("#id_space_area").val();
      space_description = $("#id_space_description").val();
      space_peopleQty = $("#id_space_quantity").val();
      space_price = $("#id_space_price").val();
      space_duration = $("#id_space-duration").val();
      space_map = $("#id_space_map").val();

      if($('#id_space_name').val() == undefined || $('#id_space_name').val() == "")
      { 
        alert("Space name should not be empty..!");
        $('#id_space_name').focus();
        return false;
      } 
      else if($('#id_space_location').val() == undefined || $('#id_space_location').val() == "")
      { 
        alert("Space location should not be empty..!");   
        $('#id_space_location').focus();
        return false;
      }  
      if($('#id_space_area').val() == undefined || $('#id_space_area').val() == "")
      {
        alert("Space area should not be empty..!");   
        $('#id_space_area').focus();
        return false;
      } 
      else if($('#id_space_description').val() == undefined || $('#id_space_description').val() == "")
      {       
        alert("Space description should not be empty..!");          
        $('#id_space_description').focus();
        return false;
      } 
      else if($('#id_space_quantity').val() == undefined || $('#id_space_quantity').val() == "")
      {       
        alert("Space quantity should not be empty..!");         
        $('#id_space_quantity').focus();
        return false;
      } 
      else if($('#id_space_price').val() == undefined || $('#id_space_price').val() == "")
      {       
        alert("Space price should not be empty..!");          
        $('#id_space_price').focus();
        return false;
      } 
      else if($('#id_space-duration').val() == undefined || $('#id_space-duration').val() == "")
      {       
        alert("Space duartion should not be empty..!");         
        $('#id_space-duration').focus();
        return false;
      } 
      else if($('#id_space_map').val() == undefined || $('#id_space_map').val() == "")
      {       
        alert("Space map should not be empty..!");          
        $('#id_space_map').focus();
        return false;
      } 
      /*else if($('#id_space_image1').val() == undefined || $('#id_space_image1').val() == "")
      {       
        alert("Space image should not be empty..!");          
        $('#id_space_image1').focus();
        return false;
      } 
      else if($('#id_space_image2').val() == undefined || $('#id_space_image2').val() == "")
      {       
        alert("Space image should not be empty..!");          
        $('#id_space_image2').focus();
        return false;
      } 
      else if($('#id_space_image3').val() == undefined || $('#id_space_image3').val() == "")
      {       
        alert("Space image should not be empty..!");          
        $('#id_space_image3').focus();
        return false;
      } */
     /* else if($('#id_space_category_name').val() == undefined || $('#id_space_category_name').val() == "")
      {     
        alert("Space Category name should not be empty..!");
        $('#id_space_category_name').focus();
        return false;
      }*/   
      else
      {
        $.ajax({
          url: '../php/space-edit.php', // Url to which the request is send
          type: 'POST', // Type of request to be send, called as method         
          data: new FormData(this),  // Data sent to server, a set of key/value pairs (i.e. form fields and values)
          contentType : false, // The content type used when sending data to the server.
          cache : false,  // To unable request pages to be cached
          processData : false, // To send DOMDocument or non processed data file it is set to false
            success : function (data)
            { 
              // alert(data);
              alert(data.message);
              localStorage.removeItem("admin_space_id");
              window.location="../html/space-list.html";
            }
        });   
        }
      }));
       
    }    
  /*-------End update Space Category-----*/
  $("#id_backBtn").click(function(){
              window.location="../html/space-list.html";
  })
});