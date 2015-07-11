var stageBackground = "url(Images/Backgrounds/Stage1.png)";
var levelNomber = 3;
var mainHeroWorldMatrixX = 10;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 10;
var bot1WorldMatrixY = 7;
var bot1Left = 420;
var bot1Top = 294;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 3;
var bot2WorldMatrixY = 5;
var bot2Left = 126;
var bot2Top = 210;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 6;
var bot3WorldMatrixY = 9;
var bot3Left = 252;
var bot3Top = 382;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 15;
var stairWaysCount = 22;
var worldMatrix = [
[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8, 8],
[8, 7,11,10,10,-2, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0,-2, 7,-2, 8],
[8, 3, 3, 3, 5,-2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,-2, 8,-2, 8],
[8,-2,-2,-2,-2,-2,-2,-2, 7,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8,-2, 8],
[8,-2,-2,-2,-2,-2,-2,12, 3, 3, 3, 3, 3, 3, 3, 3, 5,-2,-2, 8, 7, 8],
[8,-2,-2, 0, 0, 0, 0, 3,-2, 0, 7, 0,12, 0, 7, 0, 0, 0, 8, 8, 8, 8],
[8,-2,-2, 2, 3, 3, 3, 3,-2, 3, 3, 3, 3, 3, 3, 8, 2, 3, 3, 3, 5, 8],
[8, 7,13, 8,-2,0,0,0,1,1,1,1,7,1,0,8,-2,-2,-2,-2,-2, 8],
[8,2,3,-2,-2,8,8,8,8,8,3,8,8,8,8,8,7,-2,-2,2,3, 8],
[8,-2,-2,-2,8,7,0,7,0,0,0,7,0,0,2,3,5,-2,-2,-2,-2, 8],
[8,10,11,14,8,3,3,3,3,3,3,3,3,3,3,3,5,1,7,14,10, 8],
[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8, 8],
];
