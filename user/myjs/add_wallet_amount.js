	$(document).ready(function(e){

    get_wallet_amount();
    add_wallet_amount();
    
    function get_wallet_amount(){

        $.ajax({
              type: 'POST',
              url: 'php/get_wallet_amount.php',
              data: {}        
         })
         .done(function(response){ 
            // alert(response);
            $(".c_current_amount").val(response);
            $("#id_currentAmount").html(response);
      })
      .fail(function(response) {
        alert(response);
      });
      
      return false;      
    }

    function add_wallet_amount(){

        $("#id_btn_wallet").click(function(e) {

          var card_name,card_number,card_cvv,card_expiry;
          var amount;

          card_name = $("#id_wcardName").val();
          card_number = $("#id_wcardNumber").val();
          card_cvv = $("#id_wcvv").val();
          card_expiry = $("#id_wcardExpiry").val();

          amount=$("#id_amount").val();
          userEmail = $("#id_userEmail").html();

          // alert(card_name+"  "+card_number+" "+card_cvv+" "+card_expiry);
          
          // alert(userEmail);

          if(amount == undefined || amount == "") {

            alert("Amount should not empty.!!");
      
              $('#id_amount-amount').focus();
              return false;          
          }
          else if (card_name == undefined || card_name == "") {
              alert("Card holder name should not empty.!!");          
              $('#id_wcardName').focus();
              return false;                
          }
          else if (card_number == undefined || card_number == "") {
              alert("Card number should not empty.!!");          
              $('#id_wcardNumber').focus();
              return false;                
          }
          else if (card_cvv == undefined || card_cvv == "") {
              alert("CVV number should not empty.!!");          
              $('#id_wcvv').focus();
              return false;                
          }
          else if (card_expiry == undefined || card_expiry == "") {
              alert("Card expiry date should not empty.!!");          
              $('#id_wcardExpiry').focus();
              return false;                
          }
          else
          {
                $.ajax({
                      type: 'POST',
                      url: 'php/add_wallet_amount.php',
                      data: {card_name : card_name, card_number : card_number, card_cvv : card_cvv, card_expiry : card_expiry,  userEmail : userEmail, amount : amount}        
                 })
                 .done(function(response){ 
                    // if(response =="Balance is less than your total amount.."){
                    //   alert(response);
                    // }
                    // else{
                    //   alert(response);
                    //   location.reload();
                    // }                    
                    
                    if(response.success){
                        alert(response.message);
                        // $("#walletModal3").hide();
                        $(".c_current_amount").val(response.wallet_amount);
                        $("#id_currentAmount").html(response);
                        // $("#id_amount").val('');
                        location.reload();

                    }else{

                      alert(response);
                  }

              })
              .fail(function(response) {
                alert(response);
              });
              
              return false;
          }
        });
    }

	    
});