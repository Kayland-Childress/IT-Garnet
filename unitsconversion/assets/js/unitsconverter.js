/*Unit Converter JavaScript*/

function calculate() {
  "use strict";

  var form = $("#unitsconverter");

  if ($("#unitsconverter").valid()) {
    var fromValue = document.getElementById("FromValue").value;

    var fromValuefp = parseFloat(fromValue);

    var fromUnit;

    if (document.getElementById("fromCentimeters").checked) {
      fromUnit = document.getElementById("fromCentimeters").value;
    }
    if (document.getElementById("fromMeters").checked) {
      fromUnit = document.getElementById("fromMeters").value;
    }
    if (document.getElementById("fromKilometers").checked) {
      fromUnit = document.getElementById("fromKilometers").value;
    }
    if (document.getElementById("fromInches").checked) {
      fromUnit = document.getElementById("frominches").value;
    }
    if (document.getElementById("fromFeet").checked) {
      fromUnit = document.getElementById("fromFeet").value;
    }
    if (document.getElementById("fromYards").checked) {
      fromUnit = document.getElementById("fromYards").value;
    }
    if (document.getElementById("fromMiles").checked) {
      fromUnit = document.getElementById("fromMiles").value;
    }

    var toUnit;

    if (document.getElementById("toCentimeters").checked) {
      toUnit = document.getElementById("toCentimeters").value;
    }
    if (document.getElementById("toMeters").checked) {
      toUnit = document.getElementById("toMeters").value;
    }
    if (document.getElementById("toKilometers").checked) {
      toUnit = document.getElementById("toKilometers").value;
    }
    if (document.getElementById("toInches").checked) {
      toUnit = document.getElementById("toInches").value;
    }
    if (document.getElementById("toFeet").checked) {
      toUnit = document.getElementById("toFeet").value;
    }
    if (document.getElementById("toYards").checked) {
      toUnit = document.getElementById("toYards").value;
    }
    if (document.getElementById("toMiles").checked) {
      toUnit = document.getElementById("toMiles").value;
    }

    CalculateResult(fromValue, fromUnit, toUnit);
  }
}

async function CalculateResult(fromValue, fromUnit, toUnit) {
  "use strict";

  var myURL =
    "https://brucebauer.info/assets/ITEC3650/unitsconversion.php" +
    "?FromValue=" +
    encodeURIComponent(fromValue) +
    "&FromUnit=" +
    encodeURIComponent(fromUnit) +
    "&ToUnit=" +
    encodeURIComponent(toUnit);

  let myCalcObject = await fetch(myURL);
  let myResult = await myCalcObject.text();

  document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
  document.getElementById("FromValue").value = "";
  document.getElementById("FromValueError").innerHTML = "";

  document.getElementById("fromCentimeters").checked = false;
  document.getElementById("fromMeters").checked = false;
  document.getElementById("fromKilometers").checked = false;
  document.getElementById("fromInches").checked = false;
  document.getElementById("fromFeet").checked = false;
  document.getElementById("fromYards").checked = false;
  document.getElementById("fromMiles").checked = false;
  document.getElementById("FromUnitError").innerHTML = "";

  document.getElementById("toCentimeters").checked = false;
  document.getElementById("toMeters").checked = false;
  document.getElementById("toKilometers").checked = false;
  document.getElementById("toInches").checked = false;
  document.getElementById("toFeet").checked = false;
  document.getElementById("toYards").checked = false;
  document.getElementById("toMiles").checked = false;
  document.getElementById("ToUnitError").innerHTML = "";

  document.getElementById("Result").innerHTML = "";
}

$("#unitsconverter").validate({});
