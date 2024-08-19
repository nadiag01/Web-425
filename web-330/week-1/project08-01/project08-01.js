"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Nadia Gainer
      Date: 03/24/24

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//constructor function for timer//
function timer(min,sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

// runPause function
function runPause(timer,minBox,secBox){
 {
    if (timer.timeID === true) {
          window.clearIntervaltTimer.timeID);
          timer.timeID = null;
    } else {
          timer.timeID = window.setInterval(countdown, 1000);
    }
}
// countdown function//
function countdown(timer,minBox,secBox)
{
    // if seconds are more than 0
    if(timer.seconds > 0)
    {
        timer.seconds -= 1;
    }
    // if minutes are more than 0
    else if(timer.minutes > 0)
    {
        timer.minutes -= 1;
        timer.seconds = 59;
    }
    else
    {
        // clear the interval
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }

    // set the minutes and seconds value
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;

}
+0
/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
const myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = ()=>{
      myTimer.minutes = minBox.value;
}

secBox.onchange = ()=>{
      myTimer.seconds = secBox.value;
}

runPauseTimer.onclick =()=>{
      (myTimer,minBox,secBox);
}