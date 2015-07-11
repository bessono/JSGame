//-----------------------------------------------
// Function for initialization and start
//-----------------------------------------------

//------Constants
var _pathPrefix = "";


var _constImgBack = _pathPrefix+"Images/Animations/MainHeroBack.png";
var _constImgForward = _pathPrefix+"Images/Animations/MainHeroForward.png";
var _constImgUp = _pathPrefix+"Images/Animations/MainHeroUp.png";
var _constImgDown = _pathPrefix+"Images/Animations/MainHeroDown.png";
var _constImgCalm = _pathPrefix+"Images/Animations/MainHeroCalm.png";
var _constImgJump = _pathPrefix+"Images/Animations/MainHeroJump.png";
var _constMovieStep = 42;

var keyPressed = false;
var mainHeroId = "mainHero";
var mainHeroAnimationSpeed = 100;


//------Variables
var gp = null; 
var debugINF = null;
var mainHeroTop = 0;
var mainHeroLeft = 0;
var mainHeroMoveStep = 0; // counter on steps use and changed in MainHeroAnimation
var sleepVariable = 0;
var sleepID = null;

function gameKernelInit() {
    var _props = new Object();
    _props.expires = 9388393;
    deleteCookie("level");
    //alert("setCookie"+levelNomber);
    setCookie("level",levelNomber,_props);
    
    debugINF = document.getElementById("debugINF");
    assembleWorld();
    document.getElementById("displayDiv").style.backgroundImage = stageBackground;
    mainHeroTop = mainHeroWorldMatrixX * 42 + 1;
    mainHeroLeft = mainHeroWorldMatrixY * 42 + 1;
    document.getElementById(mainHeroId).style.top = mainHeroTop + "px";
    document.getElementById(mainHeroId).style.left = mainHeroLeft + "px";
    sleepID = setInterval(function () { sleepVariable++;  }, 10);
    makeBots();
    
    setInterval(function(){killMainHero();},50);
    document.getElementById("stairsCountSpan").innerHTML = "="+stairWaysCount;
}



  //var gamepads = navigator.getGamepads();
  window.addEventListener("gamepadconnected", function(e) {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  gp = gamepads[0];
  setInterval(buttonPressed,180);});

function buttonPressed() {
  var pres = null;
  
  if (gp.buttons[3].pressed == true) {
    pres = "Stair";
    readKeyPress(17);
  }
  if (gp.buttons[0].pressed == true) {
    pres = "Hole";
    readKeyPress(16);
  }
  if (gp.buttons[6].pressed == true) {
    document.location.href="./game.html";
  }
  if (gp.buttons[7].pressed == true) {
    document.location.href="./START.html";
  }
  if(gp.axes[1] == 1){
    pres = "down";
    readKeyPress(40);
  }
  if(gp.axes[1] == -1){
    pres = "up";
    readKeyPress(38);
  }
  if(gp.axes[0] == 1){
    pres = "right";
    readKeyPress(39);
  }
  if(gp.axes[0] == -1){
    pres = "left";
    readKeyPress(37);
  }
  //setDebugInfo(pres);
}


function killMainHero(){
    if((bot1WorldMatrixY === mainHeroWorldMatrixX) &&(bot1WorldMatrixX === mainHeroWorldMatrixY)) startAgain();
    if((bot2WorldMatrixY === mainHeroWorldMatrixX) &&(bot2WorldMatrixX === mainHeroWorldMatrixY)) startAgain();
    if((bot3WorldMatrixY === mainHeroWorldMatrixX) &&(bot3WorldMatrixX === mainHeroWorldMatrixY)) startAgain();
    
}

function startAgain(){
    document.location.reload();
}

function makeBots() {
    if (bot1 != null) {
        bot1.className = "botDiv";
        bot1.style.top = bot1Top + "px";
        bot1.style.left = bot1Left + "px";
        document.getElementById("displayDiv").appendChild(bot1);
        setInterval(function () { botMovie1(bot1); }, 1000);
    }
    if (bot2 != null) {
        bot2.className = "botDiv";
        bot2.style.top = bot2Top + "px";
        bot2.style.left = bot2Left + "px";
        document.getElementById("displayDiv").appendChild(bot2);
        setInterval(function () { botMovie2(bot2); }, 1000);
    }
    if (bot3 != null) {
        bot3.className = "botDiv";
        bot3.style.top = bot3Top + "px";
        bot3.style.left = bot3Left + "px";
        document.getElementById("displayDiv").appendChild(bot3);
        setInterval(function () { botMovie3(bot3); }, 1000);
    }
    
    
    
   
}

function readKeyPress(keyCode) {
	
	if(keyPressed == false){
    if ((mainHeroMoveStep === 0) && (sleepVariable > 2)) {
	
        clearInterval(sleepID);
        clearInterval(intervalIdMovement);
        if ((keyCode == "17") || (keyCode == "81")) {
		setStairWay();
        }
        if((keyCode == "16") || (keyCode == "32")){
        setHole();
        keyPressed=false;
        }
        if (keyCode == "32") {
		keyPressed=false;
            //setHeroMovie(mainHeroId, 42, 1, mainHeroAnimationSpeed, "jump");
	    
        }
        if ((keyCode == "37") || (keyCode == "65")) {
        keyPressed = true;
        setHeroMovie(mainHeroId, 42, 2, mainHeroAnimationSpeed, "back");
	    
        }
        if ((keyCode == "39") || (keyCode == "68")) {
            keyPressed = true;
	    setHeroMovie(mainHeroId, 42, 2, mainHeroAnimationSpeed, "forward");
	    
        }
        if ((keyCode == "40") || (keyCode == "83")) {
            keyPressed = true;
	    setHeroMovie(mainHeroId, 42, 8, mainHeroAnimationSpeed, "down");
	    
        }
        if ((keyCode == "38") || (keyCode == "87")) {
            keyPressed = true;
	    setHeroMovie(mainHeroId, 42, 8, mainHeroAnimationSpeed, "up");
	    
        }
	}
    }
    //setDebugInfo(keyCode);
}

function setDebugInfo(debugText) {
    if (debugINF !== null) {
        debugINF.innerHTML =  debugText;
    } else {
        alert("debugINF is null :(");
    }
}

function assembleWorld() {
    var i = 0;
    var j = 0;
    var top;
    var left;
    var d = null;
    
    for (i = 0; i < 12; i++) {
        for (j = 0; j < 22; j++) { 

        d = document.createElement("div");
        d.id = "blok"+i+"-"+j;
        switch (worldMatrix[i][j]) {
            case 8:
                d.className = "blockGroundDiv";
                break;
            case 6:
                d.className = "blockSkyBlueDiv";
                break;
            case 0:
                d.className = "blockSkyBlueDiv";
                break;
            case 9:
                d.className = "blockSkyBlueDiv";
                break;
            case -2:
                d.className = "blockSkyBlueDiv";
                break;
            case 1:
                d.className = "blockBorderDiv";
                break;
            case 3:
                d.className = "blockWallDiv";
                break;
            case 2:
                d.className = "blockWallLeftDiv";
                break;
            case 5:
                d.className = "blockWallRightDiv";
                break;
            case 4:
                d.className = "blockElevatorDiv";
                break;
            case 7:
                d.className = "blockStarDiv";
                break;
            case 10:
                d.className = "bushBlock";
                break;
            case 11:
                d.className = "bushBlockBig";
                break;
            case 12:
                d.className = "bushBlock2";
                break;
            case 13:
                d.className = "lampBlock";
                break;
            case 14:
                d.className = "mashroomBlock";
                break;
        }
        top = i * 42;
        left = j * 42;
        d.style.top = top + "px";
        d.style.left = left + "px";
        //d.innerHTML =  worldMatrix[i][j];
        document.getElementById("displayDiv").appendChild(d); 
        }
    }
    
}



