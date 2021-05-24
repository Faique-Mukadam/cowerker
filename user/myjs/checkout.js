$(document).ready(function (e) {

  var space_id;
  if (localStorage.getItem("space_id") === null) {
    // alert("Invalid Action other");
    window.location = "index.html";
  }
  else {
    var pdf_space_name, pdf_space_location, pdf_space_area, pdf_space_pQty, space_duration_temp, pdf_space_price;
    space_id = localStorage.getItem("space_id");
    // ------------------Get SpaceDetails By Space ID  ------------------
    // alert(space_id);        
    $.ajax({
      type: 'POST',
      url: 'php/get-spaceDetails-by-spaceId.php',
      data: { space_id: space_id }
    })
      .done(function (response) {
        if (response.success) {
          // alert(response.spacePQty+" "+response.spaceDuration);
          space_duration_temp = response.spaceDuration;
          pdf_space_name = response.spaceName;
          pdf_space_location = response.spaceLocation;
          pdf_space_area = response.spaceArea;
          pdf_space_pQty = response.spacePQty;
          pdf_space_price = response.spacePrice;

        }
        else {
          alert(response);
        }

      })
      .fail(function (response) {
        alert("connection Failed");
      });
    // ------------------End Get SpaceDetails By Space ID ------------------


    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    /*var spaceData,sp_name,sp_address;
    spaceData = JSON.parse(localStorage.getItem("SpaceDetails"));
    sp_name = spaceData.space_name_pdf;
    sp_address = spaceData.space_address_pdf;*/
    // alert(sp_name+"  "+sp_address);

    var spaceAmount, facilityAmount;
    var totalAmount = 0;

    // ------------------Start Space Amount ------------------
    // alert(space_id);        
    $.ajax({
      type: 'POST',
      url: 'php/get-spaceAmount-by-spaceId.php',
      data: { space_id: space_id }
    })
      .done(function (response) {

        spaceAmount = response.split(".").pop();
        spaceAmount = $.trim(spaceAmount);

        // alert("Sapce "+spaceAmount);
        $("#id_spaceAmount").html(response);

      })
      .fail(function (response) {
        alert("connection Failed");
      });
    // ------------------End Space Amount ------------------

    // ------------------Start Space Facilities ------------------  
    // alert(space_id);        
    $.ajax({
      type: 'POST',
      url: 'php/get-spaceFacilities-by-spaceId.php',
      data: { space_id: space_id }
    })
      .done(function (response) {

        // alert(response);
        if (response == 'No Space facilities') {
          facilityAmount = 0;
          // alert(facilityAmount);
          $("#id_facilitySum").html(facilityAmount);
        }
        else {
          $("#id_facilities").html(response);
        }

      })
      .fail(function (response) {
        alert("connection Failed");
      });

    // ------------------End Space Facilities ------------------ 

    // ------------------Start Space Facilities Sum ------------------
    // alert(space_id);        
    $.ajax({
      type: 'POST',
      url: 'php/get-facilitiesSum-by-spaceId.php',
      data: { space_id: space_id }
    })
      .done(function (response) {
        // alert("Faci sum: "+response); 
        if (response == "Rs.") {
          facilityAmount = 0;
          // alert(facilityAmount);
          $("#id_facilitySum").html(facilityAmount);
          totalAmount = parseInt(spaceAmount);

          // alert(" Final: "+totalAmount);
          $("#id_finalAmount").html(totalAmount);
        }
        else {

          facilityAmount = response.split(".").pop();
          facilityAmount = $.trim(facilityAmount);

          $("#id_facilitySum").html(response);
          totalAmount = parseInt(facilityAmount) + parseInt(spaceAmount);

          // alert(" Final: "+totalAmount);
          $("#id_finalAmount").html(totalAmount);

        }
      })
      .fail(function (response) {
        alert("connection Failed");
      });

    // ------------------End Space Facilities Sum ------------------           


    // ------------------Start Space Delete Facilities ------------------  

    $("#id_facilities").on("click", ".c_delete", (function (ev) {

      var space_facility_id;
      // space_facility_id = $(this).parent().parent().children().next().children().html();
      space_facility_id = $(this).parent().parent().children().children().html();
      // alert(space_facility_id);

      $.ajax({
        type: 'POST',
        url: 'php/updateFacilities-by-facilityId.php',
        data: { space_facility_id: space_facility_id }
      })
        .done(function (response) {

          window.location.href = "checkout.html";
        })
        .fail(function (response) {
          alert("connection Failed");
        });
    }));

    // ------------------End Space Delete Facilities ------------------  
    // ------------------Book using COD---------------- 
    $("#id_btnBookingCod").click(function () {

      var fullName, companyEmail, companyName, mobile, bookingDate;

      fullName = $("#id_fullname").val();
      companyEmail = $("#id_companyEmail").val();
      companyName = $("#id_companyName").val();
      mobile = $("#id_mobile").val();
      bookingDate = $("#id_bookingDate").val();
      // alert(space_duration_temp);

      // alert(fullName+" "+companyEmail+" "+companyName+" "+mobile+" "+bookingDate);

      checkedIds = $("#id_chkBoxCod:checked").map(function () {
        paymentType = this.value;
      });

      if ($("#id_chkBoxCod").prop("checked") == true) {
        // alert("Book space :"+paymentType);

        if (fullName == undefined || fullName == "") {
          alert("Full name should not empty.!!");
          $('#id_fullname').focus();
          return false;
        }
        else if (companyEmail == undefined || companyEmail == "") {
          alert("Company email should not empty.!!");
          $('#id_companyEmail').focus();
          return false;
        }
        else if (companyName == undefined || companyName == "") {
          alert("Company name should not empty.!!");
          $('#id_companyName').focus();
          return false;
        }
        else if (mobile == undefined || mobile == "") {
          alert("Mobile should not empty.!!");
          $('#id_mobile').focus();
          return false;
        }
        else if (bookingDate == undefined || bookingDate == "") {
          alert("Booking date should not empty.!!");
          $('#bookingDate').focus();
          return false;
        }
        // else if (card_name == undefined || card_name == "") {
        //     alert("Card holder name should not empty.!!");          
        //     $('#id_cardName').focus();
        //     return false;                
        // }
        // else if (card_number == undefined || card_number == "") {
        //     alert("Card number should not empty.!!");          
        //     $('#id_cardNumber').focus();
        //     return false;                
        // }
        // else if (card_cvv == undefined || card_cvv == "") {
        //     alert("CVV number should not empty.!!");          
        //     $('#id_cvv').focus();
        //     return false;                
        // }
        // else if (card_expiry == undefined || card_expiry == "") {
        //     alert("Card expiry date should not empty.!!");          
        //     $('#id_cardExpiry').focus();
        //     return false;                
        // }
        else {

          // ----Book space by COD----
          $.ajax({
            type: 'POST',
            url: 'php/booked-space-by-COD.php',
            data: {
              fullName: fullName, companyEmail: companyEmail, companyName: companyName,
              mobile: mobile, bookingDate: bookingDate, space_duration_temp: space_duration_temp, paymentType: paymentType, totalAmount: totalAmount,
              space_id: space_id
            }
          })
            .done(function (response) {

              alert(response);
              printDetails();
              localStorage.removeItem("space_id");
              localStorage.removeItem("SpaceDetails");
              window.location = "index.html";

            })
            .fail(function (response) {
              alert("connection Failed");
            });
        }
      }
      else {
        alert("Please Select payment type.");
      }
    });
    // ------------------Book using Credit/Debit---------------- 
    $("#id_creditDebit").click(function () {
      bookByCrditDebit();

    });

    // ------------------Book using Wallet---------------- 
    $("#id_wallet_click").click(function () {
      bookByWallet();
    });

    function bookByCrditDebit() {
      $("#id_btnBookingCreditDebit").click(function () {
        // alert("Credit/Debits");
        var fullName, companyEmail, companyName, mobile, bookingDate;

        fullName = $("#id_fullname").val();
        companyEmail = $("#id_companyEmail").val();
        companyName = $("#id_companyName").val();
        mobile = $("#id_mobile").val();
        bookingDate = $("#id_bookingDate").val();
        // alert("credit/Debit");
        var card_name, card_number, card_cvv, card_expiry;

        card_name = $("#id_cardName").val();
        card_number = $("#id_cardNumber").val();
        card_cvv = $("#id_cvv").val();
        card_expiry = $("#id_cardExpiry").val();

        if (fullName == undefined || fullName == "") {
          alert("Full name should not empty.!!");
          $('#id_fullname').focus();
          return false;
        }
        else if (companyEmail == undefined || companyEmail == "") {
          alert("Company email should not empty.!!");
          $('#id_companyEmail').focus();
          return false;
        }
        else if (companyName == undefined || companyName == "") {
          alert("Company name should not empty.!!");
          $('#id_companyName').focus();
          return false;
        }
        else if (mobile == undefined || mobile == "") {
          alert("Mobile should not empty.!!");
          $('#id_mobile').focus();
          return false;
        }
        else if (bookingDate == undefined || bookingDate == "") {
          alert("Booking date should not empty.!!");
          $('#bookingDate').focus();
          return false;
        }
        else if (card_name == undefined || card_name == "") {
          alert("Card holder name should not empty.!!");
          $('#id_cardName').focus();
          return false;
        }
        else if (card_number == undefined || card_number == "") {
          alert("Card number should not empty.!!");
          $('#id_cardNumber').focus();
          return false;
        }
        else if (card_cvv == undefined || card_cvv == "") {
          alert("CVV number should not empty.!!");
          $('#id_cvv').focus();
          return false;
        }
        else if (card_expiry == undefined || card_expiry == "") {
          alert("Card expiry date should not empty.!!");
          $('#id_cardExpiry').focus();
          return false;
        }
        else {
          // ----Book space by Credit/Debit----
          $.ajax({
            type: 'POST',
            url: 'php/booked-space-by-creditDebit.php',
            data: {
              card_name: card_name, card_number: card_number, card_cvv: card_cvv, card_expiry: card_expiry, fullName: fullName, companyEmail: companyEmail, companyName: companyName,
              mobile: mobile, bookingDate: bookingDate, space_duration_temp: space_duration_temp, paymentType: "Credit/Debit", totalAmount: totalAmount,
              space_id: space_id
            }
          })
            .done(function (response) {
              if (response == 'Balance is less than your total amount..') {
                alert(response);
                location.reload();
              } else {
                alert(response);
                printDetails();
                localStorage.removeItem("space_id");
                localStorage.removeItem("SpaceDetails");
                window.location = "index.html";
              }

            })
            .fail(function (response) {
              alert("connection Failed");
            });
        }
      });
    }
    // ----End Function bookByCreditDebit---------

    function bookByWallet() {
      $("#id_btnBookingWallet").click(function () {

        var fullName, companyEmail, companyName, mobile, bookingDate;

        fullName = $("#id_fullname").val();
        companyEmail = $("#id_companyEmail").val();
        companyName = $("#id_companyName").val();
        mobile = $("#id_mobile").val();
        bookingDate = $("#id_bookingDate").val();

        // alert(fullName+" "+companyEmail+" "+companyName+" "+mobile+" "+bookingDate);

        checkedIds = $("#id_chkBoxWallet:checked").map(function () {
          paymentType = this.value;
        });
        if (fullName == undefined || fullName == "") {
          alert("Full name should not empty.!!");
          $('#id_fullname').focus();
          return false;
        }
        else if (companyEmail == undefined || companyEmail == "") {
          alert("Company email should not empty.!!");
          $('#id_companyEmail').focus();
          return false;
        }
        else if (companyName == undefined || companyName == "") {
          alert("Company name should not empty.!!");
          $('#id_companyName').focus();
          return false;
        }
        else if (mobile == undefined || mobile == "") {
          alert("Mobile should not empty.!!");
          $('#id_mobile').focus();
          return false;
        }
        else if (bookingDate == undefined || bookingDate == "") {
          alert("Booking date should not empty.!!");
          $('#bookingDate').focus();
          return false;
        }
        else if ($("#id_chkBoxWallet").prop("checked") == false) {
          alert("Please Select payment type.");
        }
        else {
          // ----Book space by Wallet----

          var walletAmount = $("#id_currentAmount").val();
          // alert("Wallet amount: "+walletAmount+" Bill Amount is "+totalAmount);
          if (totalAmount <= walletAmount && walletAmount != 0) {
            $.ajax({
              type: 'POST',
              url: 'php/booked-space-by-wallet.php',
              data: {
                fullName: fullName, companyEmail: companyEmail, companyName: companyName,
                mobile: mobile, bookingDate: bookingDate, space_duration_temp: space_duration_temp, paymentType: "Wallet", totalAmount: totalAmount,
                space_id: space_id
              }
            })
              .done(function (response) {
                alert(response);
                printDetails();
                localStorage.removeItem("space_id");
                localStorage.removeItem("SpaceDetails");
                window.location = "index.html";

              })
              .fail(function (response) {
                alert("connection Failed");
              });
          }
          else {
            alert("Your wallet amount is less than your total amount.Please add your wallet amount..!")
            // location.reload();
          }
        }
      });
    }  //End book By wallet()


    function printDetails() {

      var popupWin = window.open('', 'winname', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no');

      var page1 = "<html>" +
        "<head>" +
        "<link rel='stylesheet' href='./css/bootstrap.min.css' />" +
        "<style>.action{display:none;} .print-hide{display:none;}</style>" +
        "   <style type='text/css' media='print'>" +
        "  @page " +
        " {" +
        // "    size:  A4 landscape;" +  /* auto is the initial value */
        "    size:  A5 portrait;" +  /* auto is the initial value */
        "   margin: 0; " + /* this affects the margin in the printer settings */
        "}" +
        "html" +
        "{" +
        "   background-color: #FFFFFF;" +
        "  margin: 0px; " + /* this affects the margin on the html before sending to printer */
        "}" +

        "body" +
        "{" +
        "font-size:11pt;" +
        "font-family:'Open Sans', sans-serif;" +

        "  margin: 5mm 5mm 0mm 5mm;" + /* margin you want for the content */
        "}" +
        "</style>" +
        "</head>" +
        "<body onload='window.print()'>" +
        "<main>" +
        "<div class='container mt-5'>" +

        "<div class='container' style='height:1080px;'>" +
        "<div class='jumbotron text-center bg-dark text-white' style='width: 60%;margin:0 auto;'>" +
        "<h1>INVOICE</h1>" +
        "</div>" +
        "<div class='row border border-dark' style='background-color: rgb(255, 255, 255);width: 60%;margin:0 auto;'>" +
        "<div class='col-md-6 mt-5'>" +
        "<h4 class='ml-4 '> Invoice # 1001 </h4>" +
        "<span class='ml-4 text-center'>" + date + "</span>" +
        "</div>" +
        "<div class='col-md-3'></div>" +
        "<div class='col-md-3'></div>" +

        "<div class='col-md-6 mt-5'>" +
        "<h4 class='ml-4'>" + pdf_space_name + "</h4>" +
        "<p class='ml-4'>" + pdf_space_area + "," + pdf_space_location + "</p>" +
        "</div>" +
        "<div class='col-md-6 mt-5'>" +
        "<h4 class='ml-4'>" + $("#id_fullname").val() + "</h4>" +
        "<p class='ml-4'>" + $("#id_companyEmail").val() + "</p>" +
        "</div>" +

        "<div class='col-md-10 mt-5'>" +
        "<table class='table ml-4'>" +
        "<thead class='text-center'>" +
        "<tr>" +
        "<th> CompanyName </th>" +
        "<th> BookingDate </th>" +
        "<th> MobileNumber </th>" +
        "</tr>" +
        "</thead>" +
        "<tbody class='text-center'>" +
        "<tr>" +
        "<td>" + $("#id_companyName").val() + "</td>" +
        "<td>" + $("#id_bookingDate").val() + "</td>" +
        "<td>" + $("#id_mobile").val() + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td></td>" +
        "<td></td>" +
        "<td>Total Amount:  " + totalAmount + "</td>" +
        "</tr>" +

        "</tbody>" +
        "</table>" +
        "</div>" +



        "</div>" +
        "</div>" +
        "</div>" +



        "</main>" +

        "</body>" +
        "<script>" +
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>" +
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js'></script>" +
        "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'></script>" +
        "</script>" +
        "</html>";
      popupWin.document.write(page1);
      popupWin.document.close();
    }
  }   //End Else
});