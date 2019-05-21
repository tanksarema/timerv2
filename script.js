var starttime = 0;
var check;
var onemin = 1000*60;
var grey = "hsl(0, 0%, 60%)";
var black = "hsl(0, 0%, 0%)";

function gettimefromURL(){
	myURL = window.location.href;
	document.getElementById("testlocation").innerHTML = myURL;
}

function changedot() {
    var d = new Date();
    var n = d.getTime();
    if (n > (starttime + (onemin *  0.0083*5))) {
        document.getElementById("dot5").style.color = grey;
        document.body.style.backgroundColor = black;
        setStartTime();
    }
    else if (n > (starttime + (onemin *  0.0083*4))) {
        document.getElementById("dot4").style.color = grey;
    }
    else if (n > (starttime + (onemin *  0.0083*3))) {
        document.getElementById("dot3").style.color = grey;
    }
    else if (n > (starttime + (onemin *  0.0083*2))) {
        document.getElementById("dot2").style.color = grey;
    }
    else if (n > (starttime + (onemin *  0.0083))) {
        document.getElementById("dot1").style.color = grey;
    }
    else if (n > (starttime + (onemin * 0.016*5))) {
        document.getElementById("dot5").style.color = black;
        document.body.style.backgroundColor = grey;
    }
    else if (n > (starttime + (onemin * 0.016*4))) {
        document.getElementById("dot4").style.color = black;
    }
    else if (n > (starttime + (onemin * 0.016*3))) {
        document.getElementById("dot3").style.color = black;
    }
    else if (n > (starttime + (onemin *  0.016*2))) {
        document.getElementById("dot2").style.color = black;
    }
    else if (n > (starttime + (onemin *  0.016))) {
        document.getElementById("dot1").style.color = black;
    }
}

function setStartTime() {
    var d = new Date();
    starttime = d.getTime();
    check = setInterval(changedot, 5000);
    gettimefromURL();
    document.getElementById("startbutton").style.color = black; 
}
