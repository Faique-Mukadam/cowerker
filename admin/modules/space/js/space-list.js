	$(document).ready(function(e){
      viewSpace();
      editSpace();
      deleteSpace();

      function viewSpace(){
          $.ajax({
                type: 'POST',
                url: '../php/space_list.php',
                data: {}        
           })
           .done(function(response){ 

              $("#id_viewSpace").html(response);

            })
          .fail(function(response) {
              alert(response);
          });
      }  
      

      function editSpace(){

        $("#id_viewSpace").on("click", ".c_edit", (function (ev){              

            var space_id;
            space_id = $(this).parent().parent().children().next().children().html();
            // alert(space_id);
               
            localStorage.setItem("admin_space_id", space_id);

            if (localStorage.getItem("admin_space_id") != null) {
              window.location="../html/space-edit.html";
            }
        }));
      } 

      function deleteSpace(){

        $("#id_viewSpace").on("click", ".c_delete", (function (ev){              

            var space_id;
            space_id = $(this).parent().parent().children().next().children().html();
            // alert(space_id); 
            if (space_id != null || space_id !='' || space_id !=undefined) {
              if (confirm("Are you sure want to delete this Record?")) {

            
                  $.ajax({
                    type: 'POST',
                    url: '../php/space-delete.php',
                    data: {space_id:space_id}
                  })
                  .done(function(data){
                    alert(data); 
                    localStorage.removeItem("admin_space_id");
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