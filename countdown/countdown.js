const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const halloween = "31 Oct 2022";

function countdown() {
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();
    
    const totalSeconds = (halloweenDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;
    
    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML = mins;
    secEl.innerHTML = secs;
    
    console.log(days, hours, mins, secs);
}

// intial call
countdown();

setInterval(countdown, 1000);