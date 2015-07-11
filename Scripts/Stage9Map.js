var stageBackground = "url(Images/Backgrounds/Stage3.png)";
var levelNomber = 9;
var mainHeroWorldMatrixX = 9;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 10;
var bot1WorldMatrixY = 4;
var bot1Left = bot1WorldMatrixX * 42;
var bot1Top = bot1WorldMatrixY * 42;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 10;
var bot2WorldMatrixY = 9;
var bot2Left = bot2WorldMatrixX * 42;
var bot2Top = bot2WorldMatrixY * 42;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 3;
var bot3WorldMatrixY = 4;
var bot3Left = bot3WorldMatrixX * 42;
var bot3Top = bot3WorldMatrixY * 42;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 10;
var stairWaysCount = 20;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2, 1, 1, 1, 1, 1,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2, 7, 8, 3, 3, 3, 8,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8, 7, 0, 0, 0, 0,-2, 8, 7, 7, 0, 8, 7,-2,-2,-2,-2,-2,-2, 1, 7, 8],
[ 8, 3, 3, 3, 3, 5,-2, 8, 3, 3, 3, 3, 5,-2,-2,-2,-2,-2, 1, 8, 8, 8],
[ 8, 8, 8, 8, 8, 8, 8,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 1, 8,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2, 7,-2, 0, 0, 0, 0, 0, 14,-2, 1, 8,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2, 8,-2, 2, 3, 3, 3, 8, 5, 1, 8,-2,-2,-2,-2, 8],
[ 8, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 7, 7, 8, 7, 8,-2,-2,-2,-2,-2, 8],
[ 8, 2, 3, 3, 3, 3, 3, 8, 3, 3, 3, 3, 3, 8, 8, 11, 10, 10, 10, 10, 11, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];
