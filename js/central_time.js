// JavaScript source code
// JavaScript source code




function clock() {

    const fullDate = new Date();
    
    var hour = fullDate.getHours() - 1;
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var amPM = "";


  

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        amPM = "P.M."
        hour = hour - 12;
    } else if (hour < 12) { 
        amPM = "A.M."
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
     document.getElementById('amPM').innerHTML = amPM;



}
setInterval(clock, 100);







