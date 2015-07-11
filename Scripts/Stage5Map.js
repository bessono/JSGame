var stageBackground = "url(Images/Backgrounds/Stage1.png)";
var levelNomber = 5;
var mainHeroWorldMatrixX = 1;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 15;
var bot1WorldMatrixY = 7;
var bot1Left = 630;
var bot1Top = 294;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 15;
var bot2WorldMatrixY = 2;
var bot2Left = 630;
var bot2Top = 84;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 15;
var bot3WorldMatrixY = 10;
var bot3Left = 630;
var bot3Top = 420;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 12;
var stairWaysCount = 30;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8, 0,-2,-2, 0, 0, 0,-2,-2, 0, 0, 0,-2,-2,-2,-2,-2,-2,-2,-2, 0, 8],
[ 8, 8,-2, 0, 8, 8, 8,-2, 0, 8, 8, 8, 0, 0, 0, 7, 7, 0,-2, 8, 3, 8],
[ 8, 7, 0, 8,-2, 7, 8, 7, 8,-2,-2, 8, 3, 3, 3, 3, 3, 3, 3, 8,-2, 8],
[ 8, 3, 8, 8,-2, 8, 8, 8,-2,-2,-2, 8, 8, 8, 8, 8, 8, 8, 8, 8,-2, 8],
[ 8, 0, 0, 0, 0, 8, 7, 0, 0, 0,-2, 0, 7, 0,-2,-2, 0, 0,10,14,11, 8],
[ 8, 8, 8, 8, 8, 2, 3, 3, 3, 3,-2, 2, 3, 5,-2,-2, 2, 3, 3, 3, 3, 8],
[ 8,-2, 0,-2, 0,-2,-2,-2,-2,-2, 0, 0, 0, 0, 0,-2,-2,-2,-2,-2,-2, 8],
[ 8, 7, 8,-2, 8,-2, 0, 0,-2,-2, 2, 3, 3, 3, 8,-2, 8,-2,-2,-2,-2, 8],
[ 8, 8, 8,-2, 8,-2, 8, 8, 0, 0, 0, 0,-2, 7, 8,-2, 8,-2,-2,-2,-2, 8],
[ 8,11, 8, 7, 8, 7,-2,-2, 8, 8, 8, 8, 0, 8, 0, 0, 8, 0, 0, 7,11, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];