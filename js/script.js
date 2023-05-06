console.log("Digital Clock USing JS");

let timenow, hour, min, sec, session;
let count = 0;

// document.getElementById("clock").style.display = "none";

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
setTimeout( ()=>{
    console.log("fade out");
    // document.getElementById("clock").style.display = "none";
    document.getElementById("text").classList.remove("anim_fadeIn");
    document.getElementById("text").classList.add("anim_fadeOut");
    // document.getElementById("text").style.animation = "anim_fadeOut 5s";
    // document.getElementById("text").style.opacity = "0";
    // document.getElementById("clock").style.animation = "fadeIn 5s";
},3000);
setTimeout( ()=>{
    document.getElementById("text").style.display = "none";
    document.getElementById("clock").classList.add("anim_fadeIn");
    document.getElementById("clock").style.display = "block";
    // document.getElementById("text").style.animation = "anim_fadeIn 5s";
},7000);


setInterval(time,1000);