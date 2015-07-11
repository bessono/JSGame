//-----------------------------------------------------------------------
//  Functions for animations and moovemwnt of main hero div
//-----------------------------------------------------------------------

//------const
var movementSpeed = 6;

//------variables
var objectName = "";
var backgroundXPos = 0;
var objectWidth = 0;
var frameSet = 0;
var animationSpeed = 0;
var intervalId;
var intervalIdFolen;
var intervalIdMovement;
var intervalId = null;
var mainHeroShowCalm;
var faceDirrection = "forward";


function setHole(){
    var underHero = worldMatrix[mainHeroWorldMatrixX+1][mainHeroWorldMatrixY];
    if((underHero === 2) || (underHero === 3) || (underHero === 5)){
        document.getElementById("holeSound").play();
        worldMatrix[mainHeroWorldMatrixX][mainHeroWorldMatrixY] = 0;
        worldMatrix[mainHeroWorldMatrixX+1][mainHeroWorldMatrixY] = -2;
        d = document.createElement("div");
        d.className = "blockHoleDiv";
        d.style.top = (mainHeroWorldMatrixX + 1) * _constMovieStep + 1 + "px";
        d.style.left = mainHeroWorldMatrixY * _constMovieStep + 1 + "px";
        document.getElementById("displayDiv").appendChild(d);
        intervalIdFolen = setInterval("folenDown()", 30);
    }
}

function setStairWay(){
    var nowHero = worldMatrix[mainHeroWorldMatrixX][mainHeroWorldMatrixY];
    var overHero = worldMatrix[mainHeroWorldMatrixX-1][mainHeroWorldMatrixY];
    var overOverHero = worldMatrix[mainHeroWorldMatrixX-2][mainHeroWorldMatrixY];
    if((nowHero == 4) && (overHero == 4)) {return false;}
    if((stairWaysCount != 0) && (overHero !== 3) && (overHero !== 2) && (overHero !== 5) && (overHero !== 8)){
	worldMatrix[mainHeroWorldMatrixX][mainHeroWorldMatrixY] = 4;
	worldMatrix[mainHeroWorldMatrixX-1][mainHeroWorldMatrixY] = 4;
    if((overOverHero !== 3) && (overOverHero !== 2) && (overOverHero !== 5)){
        worldMatrix[mainHeroWorldMatrixX-2][mainHeroWorldMatrixY] = 9;
       }
        document.getElementById("stairSound").play();
	d = document.createElement("div");
	d.className = "blockElevatorDiv";
	d.style.top = mainHeroWorldMatrixX * _constMovieStep + 1 + "px";
        d.style.left = mainHeroWorldMatrixY * _constMovieStep + 1 + "px";
	document.getElementById("displayDiv").appendChild(d);	
	d = document.createElement("div");
	d.className = "blockElevatorDiv";
	d.style.top = (mainHeroWorldMatrixX -1) * _constMovieStep + 1 + "px";
        d.style.left = mainHeroWorldMatrixY * _constMovieStep + 1 + "px";
	document.getElementById("displayDiv").appendChild(d);
	stairWaysCount--;
    document.getElementById("stairsCountSpan").innerHTML = "="+stairWaysCount;
	}
}

function setHeroMovie(_objName, _objWidth, _frameSet, _animationSpeed, _dirrection) {
    objectName = _objName;
    objectWidth = _objWidth;
    frameSet = _frameSet;
    stopAnimation();
    allowMovie = true;
    tmpX = mainHeroWorldMatrixX;
    tmpY = mainHeroWorldMatrixY;

    switch (_dirrection) {
        case "forward":
            faceDirrection = "forward";
            document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgForward + ')';
            mainHeroShowCalm = true;
            tmpY = mainHeroWorldMatrixY + 1;
            break
        case "back":
            faceDirrection = "back";
            document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgBack + ')';
            mainHeroShowCalm = true;
            tmpY = mainHeroWorldMatrixY - 1;
            break
        case "up":
            document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgUp + ')';
            mainHeroShowCalm = false;
            tmpX = mainHeroWorldMatrixX - 1;
            break
        case "down":
            document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgDown + ')';
            mainHeroShowCalm = false;
            tmpX = mainHeroWorldMatrixX + 1;
            break
        case "jump":
            document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgJump + ')';
            mainHeroShowCalm = true;
            tmpX = mainHeroWorldMatrixX - 1;
            if (faceDirrection == "forward") {
                tmpY = mainHeroWorldMatrixY + 1;
            } else {
                tmpY = mainHeroWorldMatrixY - 1;
            }
            break
    }


    if (_dirrection != "jump") {
        switch (worldMatrix[tmpX][tmpY]) {
            case 8:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 2:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 3:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 9:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 2:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 5:
                allowMovie = false;
		keyPressed = false;	
                break;
            case 6:
                stage = levelNomber + 1;
                document.location.href = "?stage=" + stage;
                break;
        }
    } else {
    if ((tmpX < 0) || (tmpY < 0)) { allowMovie = false } else {
        if (worldMatrix[tmpX][tmpY] == 8) { allowMovie = false; keyPressed = false; }
    }
    }

    if ((mainHeroMoveStep === 0) && (allowMovie == true)) {
        mainHeroWorldMatrixX = tmpX;
        mainHeroWorldMatrixY = tmpY;
        intervalIdMovement = setInterval(function () { move(_dirrection) }, movementSpeed);
        intervalId = setInterval(function () { animation(); }, _animationSpeed);
        setInterval(function () { getStopStatus(); }, 5000);
    }
}

function getStopStatus() {
    if ((mainHeroMoveStep == 0) && (intervalId == null)) {
        if(mainHeroShowCalm == true){
        document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgCalm + ')';
        intervalId = setInterval(function () { animation(); }, 250);
        }
    }
}

function animation() {
    var object = document.getElementById(objectName);
    backgroundXPos += objectWidth;
    object.style.backgroundPosition = backgroundXPos + 'px ' + '0px';
    if (backgroundXPos >= objectWidth * frameSet) backgroundXPos = 0;
}

function faceAnimation() {
    document.getElementById(objectName).style.backgroundImage = 'url(' + _constImgDown + ')'
}

function move(_direction) {
    var object = document.getElementById(objectName);
    
    switch (_direction) {
        case "forward":
            mainHeroLeft+=1;
            break;
        case "back":
            mainHeroLeft-=1;
            break;
        case "up":
            mainHeroTop-=1;
            break;
        case "down":
            mainHeroTop+=1;
            break;
    }
    
    object.style.left = mainHeroLeft + "px";
    object.style.top = mainHeroTop + "px";
    mainHeroMoveStep++;

    if (mainHeroMoveStep >= _constMovieStep) {
        mainHeroMoveStep = 0;
        stopAnimation();
        stopMovement();
        if (_direction == "jump") intervalIdFolen = setInterval("folenDown()", 30);
        if ((worldMatrix[tmpX][tmpY] == -2) && (_direction != "jump")) intervalIdFolen = setInterval("folenDown()", 30);
        getStar(tmpX,tmpY);
	
    }
}

function stopAnimation() {
    if (intervalId !== null) clearInterval(intervalId);
    intervalId = null;
}

function stopMovement() {
    if (intervalIdMovement !== null) clearInterval(intervalIdMovement);
    intervalIdMovement = null;
    keyPressed = false;
}

function folenDown() {
    var object = document.getElementById(objectName);
    
    tmpX = mainHeroWorldMatrixX;
    tmpY = mainHeroWorldMatrixY;

    mainHeroMoveStep = 1;
    tmpX = mainHeroWorldMatrixX + 1;
    
    getStar(tmpX,tmpY);

    if ((worldMatrix[tmpX][tmpY] !== 8) && (worldMatrix[tmpX][tmpY] !== 3) && (worldMatrix[tmpX][tmpY] !== 2) && (worldMatrix[tmpX][tmpY] !== 4) && (worldMatrix[tmpX][tmpY] !== 5)) {
        mainHeroWorldMatrixX = tmpX;
        mainHeroTop += _constMovieStep;
        object.style.top = mainHeroTop + "px";
    } else {
        mainHeroMoveStep = 0;
        clearInterval(intervalIdFolen);
    }
    
}
function getStar(tmpX,tmpY){
    if(worldMatrix[tmpX][tmpY] === 7){
        document.getElementById("starSound").play();
        document.getElementById("blok"+tmpX+"-"+tmpY).style.display="none";
        worldMatrix[tmpX][tmpY] = 0;
        starsPoint -= 1;
        if(starsPoint === 0) {
	var nextLevel = levelNomber+1;
	//alert("YouWin NextLevel::"+nextLevel);
	document.location.href = "?stage="+nextLevel;
	}
    }
}
