function clock() {
    var currentDate = new Date();

    var currentHour = currentDate.getHours();
    var currentMin = currentDate.getMinutes();
    var currentSec = currentDate.getSeconds();

    var hours = document.querySelector(".hours");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");

    hours.innerHTML = currentHour;
    minutes.innerHTML = ":" + currentMin;
    seconds.innerHTML = ":" + currentSec;

    if (currentHour < 10) {
        hours.innerHTML = "0" + currentHour;
    }

    if (currentMin < 10) {
        minutes.innerHTML = ":0" + currentMin;
    }

    if (currentSec < 10) {
        seconds.innerHTML = ":0" + currentSec;
    }
}

setInterval(clock, 200);


