$(document).ready(function(e){

    if (localStorage.getItem("space_category_id") === null) {
      alert("Invalid Action");
      window.location="../html/spaceCategory-list.html";
    }
    else{
      getSpaceCategoryById();
      updateSpaceCategory();
    }

    function getSpaceCategoryById(){

        var space_category_id = localStorage.getItem("space_category_id");  
        // alert(space_category_id);        
        $.ajax({
          type: 'POST',
          url: '../php/spaceCategory_name.php',
          data: {space_category_id : space_category_id}
        })
        .done(function(response){ 
                       
                // alert(response);
              $("#id_spaceCategory_name").val(response);

              // localStorage.removeItem("space_type_id");
           

        })
        .fail(function(response) {
          alert("connection Failed");
        }); 
    }

    

    /*-------start code for update Space Category-----*/
    function updateSpaceCategory(){

       $("#id_btnEdit_category").click(function(e) {

          var space_category_id = localStorage.getItem("space_category_id");
          var space_category_name = $("#id_spaceCategory_name").val();
          // alert(space_category_id);
          if($('#id_spaceCategory_name').val() == undefined || $('#id_spaceCategory_name').val() == "")
          {
              alert("space category name not empty.!!");
          
          
              $('#id_spaceCategory_name').focus();
                return false;              
          } 
          else{

            $.ajax({
              type: 'POST',
              url: '../php/spaceCategory_edit.php',
              data: {space_category_id : space_category_id, space_category_name : space_category_name}
            })
            .done(function(response){                            
                alert(response);
              window.location="../html/spaceCategory-list.html";
            })
            .fail(function(response) {
              alert("connection Failed");
            });
          }
       });
    }    
  /*-------End update Space Category-----*/
  $("#id_backBtn").click(function(){
              window.location="../html/spaceCategory-list.html";
  })
});