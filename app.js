var min = 0;
var sec = 0;
var msec = 0;
var minheding = document.getElementById('min');
var secheding = document.getElementById('sec');
var msecheding = document.getElementById('msec');
var t;
function timer(){
    msec++
    msecheding.innerHTML =  msec;
    if (msec >=100){
        sec++
        secheding.innerHTML=sec
        msec=0
    }
    else if(sec>=60){
        min++
        sec= 0
        minheding.innerHTML=min
    }
}
function start(){
    disableBtn()
t = setInterval(timer,10)
}
function stop(){
    disableBtn()
  clearInterval(t)
 }
function reset(){
    enableBtn()
    min = 0
    sec =0
    msec =0
    minheding.innerHTML =min
    secheding.innerHTML=sec
    msecheding.innerHTML=msec
   
}
function disableBtn() {
    document.getElementById("myBtn").disabled = true;
}

function enableBtn() {
    document.getElementById("myBtn").disabled = false;
}
