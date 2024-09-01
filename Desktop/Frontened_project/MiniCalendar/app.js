const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dateNum = document.getElementById("date-name");
const yearElement = document.getElementById("year");
const currTime = document.getElementById("curr-time");


function updateTime(){
    const date = new Date();

    monthName.innerText = date.toLocaleString("en", {month:"long"});
    dayName.innerText = date.toLocaleString("en", {weekday:"long"});
    dateNum.innerHTML = date.getDate();
    yearElement.innerText = date.getFullYear();

    currTime.innerText = date.toLocaleString("en", {hour:"2-digit", minute:"2-digit", second:"2-digit"});
}

updateTime();

setInterval(updateTime, 1000);