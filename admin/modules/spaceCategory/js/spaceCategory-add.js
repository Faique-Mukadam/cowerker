	$(document).ready(function(e){

	    $("#id_btnAdd_category").click(function(e) {
	        
	        var spaceCategory_name;
    			spaceCategory_name=$("#id_spaceCategory_name").val();

	        if(spaceCategory_name == undefined || spaceCategory_name == "") {

	      		 alert("Space category name should not be empty.!!");
      
              $('#id_spaceCategory_name').focus();
              return false;
          }
	        else
	        {
	          $.ajax({
	                type: 'POST',
	                url: '../php/spaceCategory_add.php',
	                data: {spaceCategory_name : spaceCategory_name}        
	           })
	           .done(function(response){ 

                if (response == 'Name already inserted..!' || response == 'Space category not added..!') {
                  alert(response);
                  window.location='../html/spaceCategory-add.html';                  
                }
                else{
                  alert(response);
                  $('#id_spaceCategory_name').val('');
                  window.location='../html/spaceCategory-list.html';                  
                }

              })
              .fail(function(response) {
              	alert(response);
              });
              
              return false;
          }
    });
});