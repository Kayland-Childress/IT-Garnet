// Function to make AJAX call and fetch currency data
function getResults() {
    if ($("#myform").valid()) {
        var baseCurrency = document.getElementById("baseCurrency").value;
        var toCurrency = document.getElementById("toCurrency").value;
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;

        // Construct URL for AJAX call
        var url = "https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/" + baseCurrency + "/" + toCurrency + "/" + fromDate + "/" + toDate + "?apiKey=QzjI5oFzJkL19c3AeJzJIHQtH1jEBgxY";

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
    var ctx = document.getElementById('chartjs-0').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Currency Value',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            'millisecond': 'MMM DD',
                            'second': 'MMM DD',
                            'minute': 'MMM DD',
                            'hour': 'MMM DD',
                            'day': 'MMM DD',
                            'week': 'MMM DD',
                            'month': 'MMM DD',
                            'quarter': 'MMM DD',
                            'year': 'MMM DD',
                        }
                    },
                    distribution: 'linear',
                    ticks: {
                        source: 'auto',
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
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