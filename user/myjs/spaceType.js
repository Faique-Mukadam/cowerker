$(document).ready(function(e){
	  
	  $.ajax({
                  type: 'GET',
                  url: 'php/spaceType.php',
                  data: {}
                  }).done(function (data){
                      $("#id_spaceType").html(data);

                    
                  })
                  .fail(function() { // if fail then getting message
                
                  // just in case posting your form failed
                  	alert("connection Failed");
                  });


    $("#id_spaceType").on("click",".c_click",(function(ev){ 

        var space_type_id,stype_name;
        stype_name = $(this).text();
        // alert(stype_name);
        space_type_id = $(this).next().text();
        localStorage.setItem("space_type_name",stype_name);
        localStorage.setItem("space_type_id", space_type_id);
        window.location.href="product.html";

    }));

    return false;
});