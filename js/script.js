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
    console.log("hour === ",hour);
    console.log("min === ",min);
    console.log("sec === ",sec);
}

document.read
setInterval( time() , 5000 );