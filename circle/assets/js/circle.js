// Circle JavaScrip

$("#CircleForm").validate({});

//Calculate button click event
$("#btnSubmit").click(function () {
  if ($("#CircleForm").valid()) {
    calculateResults();
  }
});

//Clear button click event
$("#btnClear").click(function () {
  clearForm();
});

function calculateResults() {
  //Get the Radius value
  var radius = parseFloat($("#radius").val());

  //Calculate diameter, circumfrence, and area
  var diameter = calcDiameter(radius);
  var circumference = calcCircumference(radius);
  var area = calcArea(radius);

  //Display results
  $("#diameterResult").text(diameter.toFixed(2));
  $("#circumferenceResult").text(circumference.toFixed(2));
  $("#areaResult").text(area.toFixed(2));
}

function calcDiameter(radius) {
  return 2 * radius;
}

function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calcArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function clearForm() {
  //Reset form and results
  $("#CircleForm")[0].reset();
  $("#diameterResult, #circumferenceResult, #areaResult").text("");
}
