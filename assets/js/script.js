var dayDisplayEl = $('#currentDay');


//Date and time displayed at the top
var dayDisplayEl = $('#currentDay')
setInterval(function () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dayDisplayEl.text(rightNow);
}, 1000);


// class = container for timeblocks
//timeblocks for business hours 

//color coding to indicate whether it is past, present or future
// var colorCodingEl function() {
// if current time block matches rightNow, color is grey
// if else current time block matches rightNow, color is grey
//}



//click event. Click into a timeblock and you can enter an event
//save button in that timeblock
//text for the event is saved in local storage
//event persists