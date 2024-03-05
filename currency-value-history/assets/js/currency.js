import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.QzjI5oFzJkL19c3AeJzJIHQtH1jEBgxY);

// https://polygon.io/docs/forex/get_v2_aggs_ticker__forexticker__range__multiplier___timespan___from___to
rest.forex.aggregates("C:EURUSD", 1, "day", "2019-01-01", "2019-02-01").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// https://polygon.io/docs/forex/get_v3_reference_exchanges
rest.reference.exchanges({ asset_class: "fx", limit: 1000 }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});



async function getResults() {
    "use strict"

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");

    // Validate all elements
    form.validate();

    // If all form elements are valid, get the values
    if (form.valid()) {
        var apiKey = "QzjI5oFzJkL19c3AeJzJIHQtH1jEBgxY"
        var baseCurrency = document.getElementById("basecurrency").value;
        var toCurrency = document.getElementById("toCurrency").value;
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;

        // URL for AJAX call
        var myURL = "https://api.polygon.io/v2/aggs/grouped/locate/global/market/fx/" + baseCurrency + toCurrency + fromDate + toDate + "?apiKey=" + apiKey;

        // Make the AJAX call
        var myObject = await fetch(myURL);

        // 
    }
}



// Function to make AJAX call and fetch currency data
function getResults() {
    if ($("#myform").valid()) {
        var apiKey = "QzjI5oFzJkL19c3AeJzJIHQtH1jEBgxY"
        var baseCurrency = document.getElementById("baseCurrency").value;
        var toCurrency = document.getElementById("toCurrency").value;
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;

        // Construct URL for AJAX call
        var url = "https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/" + baseCurrency + "/" + toCurrency + "/" + fromDate + "/" + toDate + "?apiKey=";

        // Make AJAX call
        $.ajax({
            url: url,
            type: "GET",
            success: function(response) {
                // Process response and draw chart
                drawChart(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Error fetching data: " + textStatus + " - " + errorThrown);
            }
        });
    }
}

// Function to draw chart using Chart.js
function drawChart(data) {
    // Extract data points from response
    var labels = [];
    var values = [];
    for (var i = 0; i < data.results.length; i++) {
        labels.push(data.results[i].t);
        values.push(data.results[i].c);
    }

    // Create chart
    var ctx = document.getElementById("chartjs-0");
    var myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": dates,
            "datasets":[{
                "data": values,
                fill: false
            }]
        },
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
        }
    });
}

// Function to clear form inputs, errors, and results
function ClearForm() {
    document.getElementById("baseCurrency").value;
    document.getElementById("toCurrency").value;
    document.getElementById("fromDate").value;
    document.getElementById("toDate").value;
    document.getElementById(".error").text("");
    document.getElementById("chartjs-0").remove(); // Remove existing chart
    document.getElementById(".img-container").append('<canvas id="chartjs-0" width="400" height="400"></canvas>'); // Add new canvas for chart
}

// Validate form using jQuery Validation Plugin
$(document).ready(function() {
    $("#myform").validate();
});