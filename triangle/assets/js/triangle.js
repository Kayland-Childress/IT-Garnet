/* Hyptenuse */

$( "#TriangleForm" ).validate({

});

function displayHypotenuse() {
    // if the form is valid, then make the calculations
    if ($("#TriangleForm").valid()) {
        
         document.getElementById("hypotenuse").innerHTML = "";

         var leg1; // string representation of the leg1
         var leg1fp; // floating point value of leg1
         var leg2; // string representation of the leg1
         var leg2fp; // floating point value of leg1
         var hypotenuse;  // floating point hypotenuse
         var result; // displayable result

         // read in the legs as a string
         leg1 = document.getElementById("leg1").value;
         leg2 = document.getElementById("leg2").value;

         // Convert numbers from strings to Floating Point
         leg1fp = parseFloat( leg1 ); 
         leg2fp = parseFloat( leg2 ); 

         // calculate the hypotenuse
         hypotenuse = calcHypotenuse(leg1fp, leg2fp);

         // display the hypotenuse
         document.getElementById("hypotenuse").innerHTML = hypotenuse.toString();
    }
}

  function calcHypotenuse (leg1value, leg2value)
  // returns hypotenuse of a right triangle
  // square root of leg1 squared plus leg2 squared
  {
      return Math.sqrt((leg1value*leg1value) + (leg2value*leg2value));
  }
  
  function clearForm()
{
    document.getElementById("leg1").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
}
