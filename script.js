$(document).ready(function () {
 let workDaySchedule = [{
     hour: "9",
     schedule: ""
 },
 {
    hour: "10",
    schedule: ""
},
{
    hour: "11",
    schedule: ""
},
{
    hour: "12",
    schedule: ""
},
{
    hour: "1",
    schedule: ""
},
{
    hour: "2",
    schedule: ""
},
{
    hour: "3",
    schedule: ""
},
{
    hour: "4",
    schedule: ""
},
{
    hour: "5",
    schedule: ""
}
];
 function initializeScheduleStorage() {
     if(!window.localStorage.getItem('workDaySchedule')) {
         window.localStorage.setItem('workDaySchedule', JSON.stringify(workDaySchedule));
     }
 }
initializeScheduleStorage();

console.log(JSON.parse(window.localStorage.getItem('workDaySchedule')));
})