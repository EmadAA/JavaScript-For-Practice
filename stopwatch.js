let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let starts = document.getElementById("startbtn");
let pauses = document.getElementById("pausebtn");
let resets = document.getElementById("resetbtn"); 
let sec=0;
let min=0, hour=0; 

let watchRunning = false;
starts.addEventListener("click", start) ;
pauses.addEventListener("click", pause);
resets.addEventListener("click", reset); 
let timer = null ; 

function start (){
    if(!watchRunning){
         watchRunning = true ;
    timer = setInterval(()=>{       
        sec ++;
    seconds.innerHTML = sec ;
    if(sec >60){
        min++ ; ;
        minutes.innerHTML = min ;
        sec =0 ;
    } 
    if(min >60){
        hour++ ; ;
        hours.innerHTML = hour ;
        min =0 ;
    } 
    seconds.innerHTML = sec < 10?('0'+ sec):sec ; 
    minutes.innerHTML = min < 10?('0'+ min):min ;
    hours.innerHTML = hour < 10?('0'+ hour):hour  ;
    }, 1000) ;
    
    }
} 

function pause (){ 
    watchRunning = false ;
    clearInterval(timer);
    
}
function reset (){ 
    watchRunning = false ;
    clearInterval(timer); 
    sec =0;
    min =0;
    hour = 0;
    seconds.innerHTML = '00' ;
    minutes.innerHTML = '00' ;
    hours.innerHTML = '00' ;
}
