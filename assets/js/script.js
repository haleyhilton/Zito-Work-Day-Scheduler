//Date and time displayed at the top
var dayDisplayEl = $('#currentDay')
setInterval(function () {
    var rightNow = moment().format('MMM DD, YYYY');
    dayDisplayEl.text(rightNow);
}, 1000);

// grid array
var todayPlanner = [
    {
        id: "0",
        hour: "09 ",
        time: "09",
        meridiem: "am",
    },
    {
        id: "1",
        hour: "10 ",
        time: "10",
        meridiem: "am",
    },
    {
        id: "2",
        hour: "11 ",
        time: "11",
        meridiem: "am",
    },
    {
        id: "3",
        hour: "12 ",
        time: "12",
        meridiem: "pm",
    },
    {
        id: "4",
        hour: "01 ",
        time: "13",
        meridiem: "pm",
    },
    {
        id: "5",
        hour: "02 ",
        time: "14",
        meridiem: "pm",
    },
    {
        id: "6",
        hour: "03 ",
        time: "15",
        meridiem: "pm",
    },
    {
        id: "7",
        hour: "04 ",
        time: "16",
        meridiem: "pm",
    },
    {
        id: "8",
        hour: "05 ",
        time: "17",
        meridiem: "pm",
    },
    
]

//create grid using row and col
//set localStorage
//set if else statement for color change depending on relationship with moment
todayPlanner.forEach(function(thisHour) {
    var hourRow = $("<form>").addClass("row")
   
    $(".container").append(hourRow);

    var hourField = $("<div>").addClass("col-2 hour text-uppercase")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
       
        
        var planData = $("<textarea>").addClass("col-9 description");
    
    var storage = localStorage.getItem(thisHour.id)
    planData.attr("id", thisHour.id).val(storage)
    if (thisHour.time < moment().format("HH")) {
        planData.addClass("past")
        
    } else if (thisHour.time === moment().format("HH")) {
        planData.addClass("present")
       
    } else if (thisHour.time > moment().format("HH")) {
        planData.addClass("future")
       
    }

    // save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>").addClass("col-1 saveBtn");


    savePlan.append(saveButton);
    hourRow.append(hourField, planData, savePlan);
})

//complete localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").attr("id");
    var saveText = $(this).siblings(".description").val();
    console.log(saveIndex);
    console.log(saveText);
    localStorage.setItem(saveIndex, saveText)

})