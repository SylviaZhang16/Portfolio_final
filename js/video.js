// Add js here.
var myVideo = document.getElementById("videoplayer");
myVideo.autoplay=false;
myVideo.loop=false;

document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("slower").addEventListener("click", slower);
document.getElementById("faster").addEventListener("click", faster);
document.getElementById("skip").addEventListener("click", skip);

document.getElementById("mute").setAttribute("onclick", "mute()");


function play(){
    myVideo.play();
}

function pause(){
    myVideo.pause();
}

function slower(){
    switch (myVideo.playbackRate){
        case 2:
            myVideo.playbackRate=1;
            break;
        case 1:
            myVideo.playbackRate=0.5;
            break;
        case 0.5:
            alert("Video is at slowest speed!");
            break;
    }
}

function faster(){
    switch (myVideo.playbackRate){
        case 0.5:
            myVideo.playbackRate=1;
            break;
        case 1:
            myVideo.playbackRate=2;
            break;
        case 2:
            alert("Video is at fastest speed!");
            break;
    }
}

function skip(){
    if(myVideo.currentTime<=(myVideo.duration-15)){
        myVideo.currentTime+=15;
    }else{
        myVideo.currentTime = 0;
    }
}

function mute(){
   if(myVideo.muted){
    myVideo.muted = false;
    document.getElementById("mute").innerHTML="Mute";
   }else{
    myVideo.muted = true;
    document.getElementById("mute").innerHTML="Unmute";
   }
}

var slider = document.getElementById("slider");
slider.addEventListener("mousemove", setvolume);

function setvolume(){
	    myVideo.volume = slider.value / 100;
        document.getElementById("volume").innerHTML=slider.value;
    }


