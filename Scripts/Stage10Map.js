var stageBackground = "url(Images/Backgrounds/Stage3.png)";
var levelNomber = 10;
var mainHeroWorldMatrixX = 9;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 17;
var bot1WorldMatrixY = 1;
var bot1Left = bot1WorldMatrixX * 42;
var bot1Top = bot1WorldMatrixY * 42;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 17;
var bot2WorldMatrixY = 5;
var bot2Left = bot2WorldMatrixX * 42;
var bot2Top = bot2WorldMatrixY * 42;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 17;
var bot3WorldMatrixY = 9;
var bot3Left = bot3WorldMatrixX * 42;
var bot3Top = bot3WorldMatrixY * 42;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 32;
var stairWaysCount = 25;
var worldMatrix = [
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[ 8,-2,-2,-2, 7,-2,-2,-2, 7, 7, 7,-2,-2,-2, 7, 7, 7, 7, 7, 7, 7, 8],
[ 8,-2,-2, 7, 3,-2,-2, 7, 3, 3, 3, 7,-2,-2, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8,-2, 7, 3, 3,-2,-2, 3,-2,-2,-2, 3,-2,-2, 8, 3, 3, 3, 3, 3, 3, 8],
[ 8,-2, 3,-2, 3,-2,-2, 3,-2,-2,-2, 3,-2,-2, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8,-2,-2,-2, 3,-2,-2, 3,-2,-2,-2, 3,-2,-2, 8, 7, 7, 7, 7, 7, 7, 8],
[ 8,-2,-2,-2, 3,-2,-2, 3,-2,-2,-2, 3,-2,-2, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8,-2,-2,-2, 3,-2,-2, 3,-2,-2,-2, 3,-2,-2, 8, 3, 3, 3, 3, 3, 3, 8],
[ 8,-2,-2, 7, 3, 7,-2, 3, 7, 7, 7, 3,-2,-2, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 8, 7, 7, 7, 7, 7, 7, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 3, 3, 3, 3, 8],
[ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];