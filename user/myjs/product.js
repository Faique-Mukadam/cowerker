$(document).ready(function(e){

    if (localStorage.getItem("space_type_id") === null && localStorage.getItem("space_type_name") === null) {
      alert("Invalid Action");
      window.location="index.html";
    }

    update_space_booking_status();

    function update_space_booking_status(){

      $.ajax({
              type: 'POST',
              url: 'php/update_space_booking_status.php',
              data: {}
            })
            .done(function(response){
              // alert(response);
            })
            .fail(function(response) {
              alert("connection Failed");
            }); 
    }
    var get_space_type_id = localStorage.getItem("space_type_id");
    var get_space_type_name = localStorage.getItem("space_type_name");

    // alert(get_space_type_name);
    $("#id_space_type_name").text(get_space_type_name); 
        
    $.ajax({
      type: 'POST',
      url: 'php/get-space-by-stId.php',
      data: {get_space_type_id : get_space_type_id}
    })
    .done(function(response){ 
                   
            // alert(response);
          $("#id_allSpaces").html(response);

          // localStorage.removeItem("space_type_id");
       

    })
    .fail(function(response) {
      alert("connection Failed");
    }); 


    $("#id_allSpaces").on("click",".c_quick_view",(function(ev){ 

        
        var space_id;
        space_id = $(this).parent().parent().parent().next().children().children().children().children().html();
        // alert(space_id);
        localStorage.setItem("space_id", space_id);
        localStorage.removeItem("space_type_name");
        localStorage.removeItem("space_type_id");
        window.location.href="single.html";

    }));

    $("input[name='gridRadios']").change(function(){
          var radioValue = $("input[name='gridRadios']:checked").val();
          // alert(get_space_type_id);
          $.ajax({
            type: 'POST',
            url: 'php/get-space-by-size.php',
            data: {get_space_type_id : get_space_type_id,radioValue:radioValue}
          })
          .done(function(response){ 
                         
                  // alert(response);
                $("#id_allSpaces").html(response);

                // localStorage.removeItem("space_type_id");
             

          })
          .fail(function(response) {
            alert("connection Failed");
          }); 
    });

    
    var temp_chkBox_value;
    $('#All').prop('checked', true); // Unchecks it 

    $('#Annually').change(function(){
        checkedIds = $("#Annually:checked").map(function() {
        $('#Monthly').prop('checked', false); // Unchecks it
        $('#Weekly').prop('checked', false); // Unchecks it
        $('#Daily').prop('checked', false); // Unchecks it
        $('#All').prop('checked', false); // Unchecks it
        // $('#Annually').prop('checked', true); // Unchecks it
        temp_chkBox_value = this.id;
        checkboxFilter(temp_chkBox_value);
      });
    });

    $('#Monthly').change(function(){
        checkedIds = $("#Monthly:checked").map(function() { 
        $('#Annually').prop('checked', false); // Unchecks it 
        $('#Weekly').prop('checked', false); // Unchecks it
        $('#Daily').prop('checked', false); // Unchecks it
        $('#All').prop('checked', false); // Unchecks it
        // $('#Monthly').prop('checked', true); // Unchecks it 
        temp_chkBox_value = this.id;
        checkboxFilter(temp_chkBox_value);
      });
    });

    $('#Weekly').change(function(){
        checkedIds = $("#Weekly:checked").map(function() { 
        $('#Annually').prop('checked', false); // Unchecks it
        $('#Monthly').prop('checked', false); // Unchecks 
        $('#Daily').prop('checked', false); // Unchecks it
        $('#All').prop('checked', false); // Unchecks it
        // $('#Monthly').prop('checked', true); // Unchecks it 
        temp_chkBox_value = this.id;
        checkboxFilter(temp_chkBox_value);
      });
    });

    $('#Daily').change(function(){
        checkedIds = $("#Daily:checked").map(function() { 
        $('#Annually').prop('checked', false); // Unchecks it
        $('#Monthly').prop('checked', false); // Unchecks it
        $('#Weekly').prop('checked', false); // Unchecks it
        $('#All').prop('checked', false); // Unchecks it
        // $('#Monthly').prop('checked', true); // Unchecks it 
        temp_chkBox_value = this.id;
        checkboxFilter(temp_chkBox_value);
      });
    });



    $('#All').change(function(){
        checkedIds = $("#All:checked").map(function() { 
        $('#Annually').prop('checked', false); // Unchecks it
        $('#Monthly').prop('checked', false); // Unchecks it
        $('#Weekly').prop('checked', false); // Unchecks it
        // $('#Monthly').prop('checked', true); // Unchecks it 
        window.location.href='product.html';
      });
    });

    function checkboxFilter(tempVal){

      var chkValue = tempVal;
       $.ajax({
            type: 'POST',
            url: 'php/get-space-by-duration.php',
            data: {get_space_type_id : get_space_type_id,chkValue:chkValue}
          })
          .done(function(response){ 
                         
                  // alert(response);
                $("#id_allSpaces").html(response);

                // localStorage.removeItem("space_type_id");
             

          })
          .fail(function(response) {
            alert("connection Failed");
          }); 

    }

    
});