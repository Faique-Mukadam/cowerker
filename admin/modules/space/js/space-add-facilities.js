$(document).ready(function(e){
	
    getLastSpaceId();
    addSpaceFacilities();
	 /*var fName = "";
	 var fAmount="";
    $("#buttonAdd").bind("click", function () {  
        var div = $("<div />");  
        div.html(GenerateTextbox(""));  
        $("#TextBoxContainer").append(div);  
    });  
    $("#buttonGet").bind("click", function () {  
          
        $("input[name=facilitiesName]").each(function () {  
            fName += $(this).val() + ":";
          
        }); 
        $("input[name=facilitiesAmount]").each(function () {  
            fAmount += $(this).val() + "\n";  
        });  
    });  
    $("body").on("click", ".remove", function () {  
        $(this).closest("div").remove();  
    });  
  
	function GenerateTextbox(value) {  
		return '<input name="facilitiesName" type="text" class="form-control form-txt-info" placeholder="Enter Facilities Name" value = "' + fName + '" /> '
		 +'<br><input name="facilitiesAmount" type="text" class="form-control form-txt-info" placeholder="Enter Facilities Amount" value = "' + fAmount + '" />'
		 +'<br>'+ '<input type="reset" value="Remove" class="remove" />'+'<br><hr>' 
	    return '<input name = "facilitiesName" type="text" value = "' + value + '" /> ' +  
	            '<input type="button" value="Remove" class="remove" />'  
	} 

    $("#buttonGet").click(function(){
        alert(fName+" "+fAmount);
        fName='';
        fAmount='';
    });*/ 
    var space_id;
    function getLastSpaceId(){
               
        $.ajax({
          type: 'POST',
          url: '../php/lastSpace_id.php',
          data: {}
        })
        .done(function(response){ 
                
                space_id = response;    
                // alert(space_id);
              // $("#id_spaceCategory_name").val(response);

              // localStorage.removeItem("space_type_id");
           

        })
        .fail(function(response) {
          alert("connection Failed");
        }); 
    }

    function addSpaceFacilities(){
        $("#id_btnFacilities").click(function(){

            var facility_name,facility_price;

            facility_name = $("#id_fname").val();
            facility_name_upper = facility_name.toUpperCase();
            facility_price = $("#id_fprice").val();

            if(facility_name == undefined || facility_name == "") {

                 alert("Facility name should not empty.!!");
      
              $('#id_fname').focus();
              return false;
          
            }
           else if(facility_price == undefined || facility_price == "") {

                alert("Facility price should not empty.!!");
          
          
              $('#id_fprice').focus();
                return false;              
            }
            else
            {
                  $.ajax({
                        type: 'POST',
                        url: '../php/space-add-facilities.php',
                        data: {facility_name : facility_name_upper, facility_price : facility_price, space_id : space_id}        
                   })
                   .done(function(response){ 
                        alert(response);
                        window.location.href="../html/space-add-facilities.html";
                        // $('#id_fname,#id_fprice').trigger("reset");
                })
                .fail(function(response) {
                    alert(response);
                });
              
                return false;
            }
        })
    }
});