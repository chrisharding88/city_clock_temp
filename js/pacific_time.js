// JavaScript source code
// JavaScript source code




function clock() {

    const fullDate = new Date();
    var hour = fullDate.getHours() - 3;
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + minutes;
    document.getElementById('seconds').innerHTML = ":" + seconds;



}
setInterval(clock, 100);







