// Circle JavaScrip

function displayRadius() {
  if ($("#CircleForm").valid()) {
    document.getElementById("radius").innerHTML = "";

    var radius; // string representation of the radius
    var radiusfp; // floating point value of radius
    var diameter; // floating point diameter
    var circumference; // floating point circumference
    var area; // floating point area
    var result; // displayable result

    // read in radius as a string
    radius = document.getElementById("radius").value;

    // convert radius from string to floating point
    radiusfp = parseFloat(radius);

    // calculate diameter, circumference, area
    diameter = calcDiameter(radiusfp);
    circumference = calcCircumference(radiusfp);
    area = calcArea(radiusfp);

    // display the hypotenuse
    document.getElementById("diameter").innerHTML = diameter.toString();
    document.getElementById("circumference").innerHTML =
      circumference.toString();
    document.getElementById("area").innerHTML = area.toString();
  }
}

// returns diameter of radius
function calcDiameter(radius) {
  return 2 * radius;
}

//returns circumference of radius
function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

//returns area of radius
function calcArea(radius) {
  return Math.PI * radius * radius;
}

function clearForm() {
  document.getElementById("diameter").innerHTML = "";
  document.getElementById("circumference").innerHTML = "";
  document.getElementById("area").innerHTML = "";
  document.getElementById("radius").value = "";
  document.getElementById("radiuserror").value = "";
}


