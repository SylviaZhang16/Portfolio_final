

var slider = document.getElementById("wifi");



document.getElementById("start").setAttribute("onclick", "calculateRent()");

function calculateRent(){
    var room = document.getElementById("room").value *1;
    var cat = document.getElementById("cat").value * 20;
    var dog = document.getElementById("dog").value * 30;
    var wifi = document.getElementById("wifi").value *1 +5;
    var car;

    if(document.getElementById("yes").checked="true"){
        car=50;
    }else{
        car=0;
    }

    var result= room + car*1 + cat + dog + wifi;
    document.getElementById("result").innerHTML="$" + result;

}

