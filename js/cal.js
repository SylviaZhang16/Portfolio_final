

var slider = document.getElementById("wifi");



document.getElementById("start").setAttribute("onclick", "calculateRent()");

function calculateRent(){
    var room = document.getElementById("room").value *1;
    var car = document.getElementById("car").value *1;
    var cat = document.getElementById("cat").value * 20;
    var dog = document.getElementById("dog").value * 30;
    var wifi = document.getElementById("wifi").value *1 +5;

    var result= room + car + cat + dog + wifi;
    document.getElementById("result").innerHTML="$" + result;

}


slider.setAttribute("mousemove", "wifiChange()");


function wifiChange(){
        document.getElementById("wifivalue").innerHTML=slider.value + " Mbps";
    }

