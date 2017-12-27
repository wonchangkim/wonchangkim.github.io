var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 10;

countdownNumberEl.textContent = countdown;

setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl.textContent = countdown;
}, 1000);