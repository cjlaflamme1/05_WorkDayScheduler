$(document).ready(function () {
    const m = moment().format('LLLL');
    const h = moment().format('H');
    // Pre-defined objects in an array in align with the time lay-out of the html
 let workDaySchedule = [{
     hour: 9,
     schedule: ""
 },
 {
    hour: 10,
    schedule: ""
},
{
    hour: 11,
    schedule: ""
},
{
    hour: 12,
    schedule: ""
},
{
    hour: 1,
    schedule: ""
},
{
    hour: 2,
    schedule: ""
},
{
    hour: 3,
    schedule: ""
},
{
    hour: 4,
    schedule: ""
},
{
    hour: 5,
    schedule: ""
}
];
// This initializes storage if it doesn't exist, and populates the calendar if it does. 
 function initializeScheduleStorage() {
     if(!window.localStorage.getItem('workDaySchedule')) {
         window.localStorage.setItem('workDaySchedule', JSON.stringify(workDaySchedule));
     } else {
         workDaySchedule = JSON.parse(window.localStorage.getItem('workDaySchedule'));
         workDaySchedule.forEach(function(index) {
             const hourValue = index.hour;
             const targetTextArea = "#textArea" + hourValue;
             $(targetTextArea).val(index.schedule);
         })
     }
    //  Adjusts current date and time; and modifies CSS based on Time. 
     $('#currentDay').text(m);
     $('div.textarea').each(function(event) {
         const textAreaHour = parseInt($(this).attr('value'));
         const currentHour = parseInt(moment().format('H'));
         if(currentHour > textAreaHour) {
             $(this).addClass("past");
         } else if (currentHour < textAreaHour) {
             $(this).addClass("future");
         } else if (currentHour === textAreaHour) {
             $(this).addClass("present");
         }
     })
    //  modify format to represent the current, present, or past hour. 
 }
initializeScheduleStorage();
// Identifies which button is clicked, then saves content to the appropriate object. 
$('button.saveBtn').on('click', function(event) {
    event.preventDefault();
    const clickTarget = event.target;
    const nameValue = $(clickTarget).attr('name');
    const textAreaTarget = "#textArea" + nameValue;
    workDaySchedule = JSON.parse(window.localStorage.getItem('workDaySchedule'));
    workDaySchedule.forEach(function(index) {
       if (index.hour === parseInt(nameValue)) {
            index.schedule = $(textAreaTarget).val();
        }
    })
    localStorage.setItem('workDaySchedule', JSON.stringify(workDaySchedule));
})

})