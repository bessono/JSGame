var stageBackground = "url(Images/Backgrounds/Stage1.png)";
var levelNomber = 1;
var mainHeroWorldMatrixX = 10;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 1;
var bot1WorldMatrixY = 1;
var bot1Top = 42;
var bot1Left = 42;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 20;
var bot2WorldMatrixY = 1;
var bot2Top = 42;
var bot2Left = 840;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 7;
var bot3WorldMatrixY = 3;
var bot3Top = 126;
var bot3Left = 294;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 8;
var stairWaysCount = 16;
var worldMatrix = [
[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[8, 0, 0,10, 7, 0, 9, 9,-2, 0,14,-2, 9, 0, 9, 9, 7, 0, 0,12,10, 8],
[8, 3, 3, 3, 3, 5, 9, 9, 0, 2, 5, 0,-2, 9, 9, 9, 2, 3, 3, 3, 3, 8],
[8,11,13,-2,-2,-2, 0, 0, 1, 1, 1, 3,-2,10,11,10,-2, 0, 0, 0, 0, 8],
[8, 3, 5,-2,-2,-2, 2, 3, 3, 3, 3, 5,-2, 2, 3, 5,-2, 0, 0, 7,12, 8],
[8,14,-2,-2,-2,-2, 0, 9, 0,10, 7,10,-2, 7, 7,-2,10,11, 2, 3, 3, 8],
[8, 5,-2,-2,-2,-2,-2, 0, 2 ,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5,10, 8],
[8, 0, 9, 9,-2, 0, 7, 3, 0,-2, 0, 0,-2,-2, 0, 0, 0, 0, 0, 2, 3, 8],
[8, 9, 9,11,-2, 2, 3, 3, 5, 0,-2,-2,-2,-2, 0, 0, 0, 0, 0, 0, 0, 8],
[8, 9,10, 2, 9, 0,-2, 9, 9, 9, 9, 9,-2, 0,-2, 9,-2,14,-2, 9, 9, 8],
[8,10, 3, 3, 1, 3, 1, 0, 0, 0,10,11, 1, 3, 0, 0, 7, 3, 0, 0, 0, 8],
[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];

//-2 - sky FolenDown
//0 - BlueSky movie allow
//1 - decorator1
//2 - wallBlockLeft
//3 - wallBlock
//4 - stairWay
//5 - wallBlockRight
//6 -
//7 - star
//8 - roundBlock noMovie
//9 - BlueSky noMovie
//10 11 12 13 14 - decorations
