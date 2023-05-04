console.log("Digital Clock USing JS");

let timenow, hour, min, sec, session;
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
    
    if( hour <= 11  ){
        session = "AM";
    }
    else if( hour >= 12){
        session = "PM";
        hour = hour - 12; 
    }
    hour = hour < 10 ? `0${hour}`: `${hour}`;
    min = min < 10 ? `0${min}` : `${min}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;

    document.getElementById("clock").innerHTML = `${hour} : ${min} : ${sec}  ${session}` ;
}

setInterval(time,1000);