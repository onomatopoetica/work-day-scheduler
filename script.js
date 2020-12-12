//  jQuery detects the state of readiness of document before running code with document.ready function

$(document).ready(function () {
    console.log("ready");

    // Establishing hours of the day on scheduler

    var $8AM = $("#8AM");
    var $9AM = $("#9AM");
    var $10AM = $("#10AM");
    var $11AM = $("#11AM");
    var $12PM = $("#12PM");
    var $1PM = $("#1PM");
    var $2PM = $("#2PM");
    var $3PM = $("#3PM");
    var $4PM = $("#4PM");
    var $5PM = $("#5PM");

    // Creating current date and time from moment.js 

    var today = moment().format("[Today is ]MMMM Do" + "," + " YYYY");
    console.log(today);
    $(".dateToday").append(today);
    var now = parseInt(moment().format("HH"));
    console.log(now);

    // setTimeout(function() {".dateToday"}(1)); }, 1000);

    // If statement to indicate on scheduler time in past, present and future


    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("past");
        }
        else if (name > now) {
            $(this).addClass("future");
        }
        else if (name === now) {
            $(this).addClass("present");
        }
    })

    // Setting local storage for each button for each hour of the day

    $("button").on("click", function () {
        localStorage.setItem("8AM", ($8AM.val()));
        localStorage.setItem("9AM", ($9AM.val()));
        localStorage.setItem("10AM", ($10AM.val()));
        localStorage.setItem("11AM", ($11AM.val()));
        localStorage.setItem("12PM", ($12PM.val()));
        localStorage.setItem("1PM", ($1PM.val()));
        localStorage.setItem("2PM", ($2PM.val()));
        localStorage.setItem("3PM", ($3PM.val()));
        localStorage.setItem("4PM", ($4PM.val()));
        localStorage.setItem("5PM", ($5PM.val()));
    })

    // Appending user input to local storage

    // localStorage.getItem($8);
    $("#8AM").append(localStorage.getItem("8AM"));
    $("#9AM").append(localStorage.getItem("9AM"));
    $("#10AM").append(localStorage.getItem("10AM"));
    $("#11AM").append(localStorage.getItem("11AM"));
    $("#12PM").append(localStorage.getItem("12PM"));
    $("#1PM").append(localStorage.getItem("1PM"));
    $("#2PM").append(localStorage.getItem("2PM"));
    $("#3PM").append(localStorage.getItem("3PM"));
    $("#4PM").append(localStorage.getItem("4PM"));
    $("#5PM").append(localStorage.getItem("5PM"));
})
