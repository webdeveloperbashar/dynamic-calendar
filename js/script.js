// Date create function
let date = new Date();
let callCalender = ()=>{
    date.setDate(1);
//Month name
let monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// ####### Set dynamically month name for calender header ###########
document.querySelector(".date h2").innerHTML = monthsName[date.getMonth()];
// ###### Set dynamically day, date, year for calender header #######
document.querySelector(".date p").innerHTML = new Date().toDateString();

// ####### Set dynamically month, prev-date, next-date, today ########
let days = document.querySelector(".days");
    // create last day every month
let lastDayEveryMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // create prev day every  month
let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // get week-first-day index number
let getFirstDayIndex = date.getDay();
    // get week-last-day index number
let getLastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    // create next day every month
let nextDay = 7 - getLastDayIndex - 1;

let day = "";
    //create get prev month last days
for (let a = getFirstDayIndex; a > 0; a--) {
    day += `<div class="prev-date">${prevLastDay - a + 1}</div>`;
}
    // create get every month days using loop
for (let i = 1; i <= lastDayEveryMonth; i++) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        day += `<div class="today">${i}</div>`;
    }else{
        day += `<div>${i}</div>`;
    }
}
    //create get next month first days
for (let b = 1; b <= nextDay; b++) {
    day += `<div class="next-date">${b}</div>`;
    days.innerHTML = day;
}
}


//########prev month click event function#################
document.querySelector('.prev').addEventListener('click', ()=>{
    date.setMonth(date.getMonth() - 1);
    callCalender()
})

//########next month click event function##################
document.querySelector('.next').addEventListener('click', ()=>{
    date.setMonth(date.getMonth() + 1)
    callCalender()
})
// call calender
callCalender()
