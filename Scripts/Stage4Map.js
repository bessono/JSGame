var stageBackground = "url(Images/Backgrounds/Stage1.png)";
var levelNomber = 4;
var mainHeroWorldMatrixX = 10;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 15;
var bot1WorldMatrixY = 7;
var bot1Left = 630;
var bot1Top = 294;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 10;
var bot2WorldMatrixY = 6;
var bot2Left = 420;
var bot2Top = 252;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 6;
var bot3WorldMatrixY = 10;
var bot3Left = 252;
var bot3Top = 420;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 14;
var stairWaysCount = 27;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8, 7,11,-2,-2,-2,-2,-2, 3,-2,-2, 8,12,-2,-2,-2,-2, 2, 5, 7,-2, 8],
[ 8, 3, 5,-2,-2,-2, 0, 0, 0, 0,12,-2, 8,-2,-2,-2, 0, 8, 2, 5,-2, 8],
[ 8,-2, 8, 0, 0,-2, 3, 3, 3, 3, 8,-2,-2, 7, 0, 0, 8,-2,-2,-2,13, 8],
[ 8,-2, 8, 3, 3,-2,-2,-2,-2,-2,-2, 8, 7, 8, 3, 8, 7,-2,-2,-2, 8, 8],
[ 8, 7, 8,-2,-2,-2,-2,-2,-2,-2,-2,-2, 3,-2,-2,-2, 8, 0, 0,-2,-2, 8],
[ 8, 5, 8,-2,-2, 0, 0, 0,-2, 0, 0, 0,-2, 8, 8, 3,-2, 8, 8,-2,-2, 8],
[ 8,-2,-2, 7, 0, 2, 3, 5,-2, 2, 3, 5,-2, 8, 7, 0, 0, 0, 0, 0, 0, 8],
[ 8, 7, 7, 2, 3, 5,-2, 0, 0, 0,-2, 8, 7, 8, 8, 8, 8, 8, 3, 3, 3, 8],
[ 8, 3, 3, 5,-2,-2,-2, 2, 3, 5,-2, 8, 3, 8,-2, 0,-2, 0,-2, 0,-2, 8],
[ 8, 0, 0, 0,10,10,11,11,10,14, 0, 0, 0, 8, 7, 8, 7, 8, 7, 8, 0, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];