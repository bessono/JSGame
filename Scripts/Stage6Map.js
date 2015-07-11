var stageBackground = "url(Images/Backgrounds/Stage2.png)";
var levelNomber = 6;
var mainHeroWorldMatrixX = 4;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 9;
var bot1WorldMatrixY = 4;
var bot1Left = 378;
var bot1Top = 168;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 13;
var bot2WorldMatrixY = 10;
var bot2Left = 546;
var bot2Top = 420;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 13;
var bot3WorldMatrixY = 7;
var bot3Left = 546;
var bot3Top = 294;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 10;
var stairWaysCount = 19;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8,-2, 7, 7,-2,-2,-2, 0,-2,-2,-2,-2,-2,-2,-2,-2,-2, 0, 0, 0, 0, 8],
[ 8,-2, 2, 5,-2,-2, 7, 8, 0, 0, 0, 0, 0, 0,-2,-2,-2, 3, 8, 8, 8, 8],
[ 8,-2,-2,-2,-2,-2, 7, 8, 8, 8, 3, 3, 3, 5,-2,-2, 0, 3, 0, 7, 7, 8],
[ 8, 0, 0,-2,-2,-2, 7, 8, 0 ,7, 0,-2,-2,-2,-2, 8, 8, 8, 3, 3, 3, 8],
[ 8, 3, 5,-2,-2,-2,-2, 8, 3, 3, 5,-2, 0, 0, 0, 0, 0, 0, 0,-2,-2, 8],
[ 8, 0, 0, 0, 0, 0,-2, 0, 0, 0, 0,-2, 8, 3, 3, 3, 3, 3, 5,-2,-2, 8],
[ 8, 8, 8, 8, 8, 8,-2, 8, 8, 8, 8,-2,0,0,0,0, 0,-2,-2,-2, 0, 8],
[ 8,-2,-2,-2,-2,-2,-2, 8,-2,-2,-2,-2, 8, 8, 3, 8, 8,-2,-2, 0, 8, 8],
[ 8,-2,-2,-2,-2,-2,-2, 8,-2,-2, 8, 8,-2,-2,-2,-2, 8,-2, 0, 8, 8, 8],
[ 8,-2,-2,-2,-2, 2, 3, 8,-2,-2, 8, 0, 7, 0, 0, 7, 8, 0, 8, 8, 8, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];
