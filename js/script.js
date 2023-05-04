console.log("Digital Clock USing JS");

let timenow, hour, min, sec;
let count = 0;

function time(){
    timenow = new Date();
    
    hour = timenow.getHours();
    min = timenow.getMinutes();
    sec = timenow.getSeconds();
    count++;
    
    console.log("count === ",count);
    console.log("timenow === ",timenow);
    console.log("show time === ",hour, min , sec);
    
    document.getElementById("clock").innerHTML = `${hour} : ${min} : ${sec}`;
}

setInterval(time,1000);