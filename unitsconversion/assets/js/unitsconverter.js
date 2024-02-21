/*Unit Converter JavaScript*/

function calculate() {
    "use strict";

    var form = $("#unitsconverter");

    /* Make sure that the form is valid */
    if ($("#unitsconverter").valid()) {

      /* get the From Value from the form */
      var fromvalue = document.getElementById("FromValue").value;
        
      /* convert the Form Value from string to floating point */
      var fromvaluefp = parseFloat(FromValue);      
  
      /* figure out which From Unit was checked and place the value in Form Unit */
      var fromunit;
  
      if (document.getElementById("centimeters").checked) {
        fromunit = document.getElementById("centimeters").value;
      }
      if (document.getElementById("meters").checked) {
        fromunit = document.getElementById("meters").value;
      }
      if (document.getElementById("kilometers").checked) {
        fromunit = document.getElementById("kilometers").value;
      }
      if (document.getElementById("inches").checked) {
        fromunit = document.getElementById("inches").value;
      }
      if (document.getElementById("feet").checked) {
        fromunit = document.getElementById("feet").value;
      }
      if (document.getElementById("yards").checked) {
        fromunit = document.getElementById("yards").value;
      }
      if (document.getElementById("miles").checked) {
        fromunit = document.getElementById("miles").value;
      }

      /* figure out which To Unit was checked and place the value in To Unit */
      var tounit;
  
      if (document.getElementById("centimeters").checked) {
        tounit = document.getElementById("centimeters").value;
      }
      if (document.getElementById("meters").checked) {
        tounit = document.getElementById("meters").value;
      }
      if (document.getElementById("kilometers").checked) {
        tounit = document.getElementById("kilometers").value;
      }
      if (document.getElementById("inches").checked) {
        tounit = document.getElementById("inches").value;
      }
      if (document.getElementById("feet").checked) {
        tounit = document.getElementById("feet").value;
      }
      if (document.getElementById("yards").checked) {
        tounit = document.getElementById("yards").value;
      }
      if (document.getElementById("miles").checked) {
        tounit = document.getElementById("miles").value;
      }

      CalculateResult(fromvalue, fromunit, tounit);      
    }
  }

  async function CalculateResult(fromvalue, fromunit, tounit) {

    //URL and method used with AJAX Call
    var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

    /* AJAX Unit Conversion requires FromValue, FromUnit, and ToUnit*/
    myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);

    /* fetch the results*/
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();

    document.getElementById("Result").innerHTML = myResult;
  }
  
  function clearform() {
    "use strict";

    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
    document.getElementById("centimeters").checked = false;
    document.getElementById("meters").checked = false;
    document.getElementById("kilometers").checked = false;
    document.getElementById("inches").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("yards").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("FromUnitError").innerHTML = "";
    document.getElementById("ToUnitError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
  }
  
  /* Form Validation */
  $("#unitsconverter").validate({});