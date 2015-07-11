var stageBackground = "url(Images/Backgrounds/Stage2.png)";
var levelNomber = 7;
var mainHeroWorldMatrixX = 1;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 4;
var bot1WorldMatrixY = 9;
var bot1Left = bot1WorldMatrixX * 42;
var bot1Top = bot1WorldMatrixY * 42;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 12;
var bot2WorldMatrixY = 10;
var bot2Left = bot2WorldMatrixX * 42;
var bot2Top = bot2WorldMatrixY * 42;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 12;
var bot3WorldMatrixY = 8;
var bot3Left = bot3WorldMatrixX * 42;
var bot3Top = bot3WorldMatrixY * 42;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 7;
var stairWaysCount = 17;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8, 0, 0, 8, 0, 8, 0,-2,-2,-2, 7, 8, 0, 8, 0, 8, 0, 8, 0, 8, 0, 8],
[ 8, 3, 8,-2, 8,-2, 8,-2,-2,-2, 3,-2, 3,-2, 3,-2, 3,-2, 3,14, 3, 8],
[ 8, 0, 0,-2, 0, 0, 0,-2, 0,-2, 0, 3, 0, 3, 0, 3,12, 3, 0, 3, 0, 8],
[ 8, 3, 8, 0, 8, 3, 8, 0, 8, 0, 8, 0, 3, 0, 3,12, 3,12, 3,12, 3, 8],
[ 8, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3,14, 3,12, 3,12, 8],
[ 8, 3, 8,12, 8, 3, 8, 0, 8, 0, 8,-2, 3,-2, 3, 0, 3, 0, 3, 0, 3, 8],
[ 8,14, 0, 3, 0, 0, 0, 3,-2, 3,-2,-2,-2, 3,-2, 3,-2, 3,14, 3, 0, 8],
[ 8, 3, 8, 0, 8, 3, 8,14,-2, 3,10, 7, 0, 0, 3, 0, 3, 0, 3,-2, 3, 8],
[ 8, 0, 0, 3, 0, 7, 0, 3,-2, 3, 8, 8, 8, 8, 8, 8, 8, 3, 0,-2, 7, 8],
[ 8, 3, 8, 0, 8, 3, 8, 7,-2, 3, 0, 7, 0, 0, 7, 0, 0, 0, 3, 0, 3, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];
