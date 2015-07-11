var stageBackground = "url(Images/Backgrounds/Stage3.png)";
var levelNomber = 8;
var mainHeroWorldMatrixX = 10;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 2;
var bot1WorldMatrixY = 8;
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

var bot3WorldMatrixX = 11;
var bot3WorldMatrixY = 3;
var bot3Left = bot3WorldMatrixX * 42;
var bot3Top = bot3WorldMatrixY * 42;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 5;
var stairWaysCount = 12;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2, 7, 7, 0, 12, 0, 0,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2, 2, 3, 3, 3, 3, 5,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2, 8, 8, 8, 8, 14, 0, 0, 10, 11, 10,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 2, 3, 3, 3, 3, 5,-2,-2,-2, 8],
[ 8,-2,-2,-2,-2,-2,-2,-2, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0,-2,-2,-2, 8],
[ 8,-2, 0, 0, 0, 7,-2,-2, 8, 8, 8, 8, 8, 3, 8, 8, 8, 8,-2,-2,-2, 8],
[ 8,-2, 2, 3, 3, 5, 0, 0, 8, 7, 0, 14, 0, 0, 10, 7, 10, 8, 10, 10, 11, 8],
[ 8, 0, 8, 8, 8, 8, 3, 3, 3, 3, 3, 3, 3, 8, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];
