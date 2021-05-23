$(document).ready(function(e){


    $('.element-holder').hide();
    $(".search").keyup(function () {

    
        var searchName = $(event.target).val();
        // alert(searchName);
        /*var filter = $(this).val(), count = 0;
        $(".element-holder .element").each(function () {

            var current = $('.element').attr('data-name');
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
              $('.element-holder').show();
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });*/

        if (searchName =='') {
          $('.element-holder').hide();
        }
        else{
          $.ajax({
            type: 'POST',
            url: 'php/get-search.php',
            data: {searchName : searchName}
          })
          .done(function(response){ 
                         
                  // alert(response);
                $('.element-holder').show();
                $("#id_search").html(response);
          })
          .fail(function(response) {
            alert("connection Failed");
          });

          }
    });


    $("#id_search").on("click",".c_spaceDeatils",(function(ev){ 

          
        var space_id;
        space_id = $(this).children().html();
        // alert(space_id);
        localStorage.setItem("space_id", space_id);
        window.location.href="single.html";

    }));
});