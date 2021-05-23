	$(document).ready(function(e){
      viewSpaceCategory();
      editSpaceCategory();
      deleteSpaceCategory();

      function viewSpaceCategory(){
          $.ajax({
                type: 'POST',
                url: '../php/spaceCategory_list.php',
                data: {}        
           })
           .done(function(response){ 

              $("#id_viewSpaceCategory").html(response);

            })
          .fail(function(response) {
              alert(response);
          });
      }
	    

      function editSpaceCategory(){

        $("#id_viewSpaceCategory").on("click", ".c_edit", (function (ev){              

            var space_category_id;
            space_category_id = $(this).parent().parent().children().next().children().html();
            // alert(space_category_id);
               
            localStorage.setItem("space_category_id", space_category_id);

            if (localStorage.getItem("space_category_id") != null) {
              window.location="../html/spaceCategory-edit.html";
            }
        }));
      }

      function deleteSpaceCategory(){

        $("#id_viewSpaceCategory").on("click", ".c_delete", (function (ev){              

            var space_category_id;
            space_category_id = $(this).parent().parent().children().next().children().html();
            // alert(space_category_id); 
            if (space_category_id != null || space_category_id !='' || space_category_id !=undefined) {
              if (confirm("Are you sure want to delete this Record?")) {

            
                  $.ajax({
                    type: 'POST',
                    url: '../php/spaceCategory-delete.php',
                    data: {space_category_id:space_category_id}
                  })
                  .done(function(data){
                    alert(data); 
                    localStorage.removeItem("space_category_id");
                    location.reload();            
                  })
                  .fail(function(data) {
                    alert(data);
                  });
              }
            }
            else{
              alert("Invalid Action..!");
            }
        }));       
      }
});