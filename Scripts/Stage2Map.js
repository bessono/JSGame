var stageBackground = "url(Images/Backgrounds/Stage2.png)";
var levelNomber = 2;
var mainHeroWorldMatrixX = 10;
var mainHeroWorldMatrixY = 1;

var bot1WorldMatrixX = 4;
var bot1WorldMatrixY = 8;
var bot1Left = 168;
var bot1Top = 336;
var bot1Direction = "left";
var bot1 = document.createElement("div");

var bot2WorldMatrixX = 16;
var bot2WorldMatrixY = 5;
var bot2Left = 672;
var bot2Top = 210;
var bot2Direction = "left";
var bot2 = document.createElement("div");

var bot3WorldMatrixX = 2;
var bot3WorldMatrixY = 3;
var bot3Left = 84;
var bot3Top = 126;
var bot3Direction = "left";
var bot3 = document.createElement("div");

var starsPoint = 7;
var stairWaysCount = 17;
var worldMatrix = [
[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
[8,-2, 0,-2, 0, 0, 0,-2,-2,-2,10, 3, 3, 5,-2,-2,-2,-2,-2,-2,-2, 8],
[8, 2, 5, 0, 2, 3, 5,-2,-2, 2, 3,14, 0, 7,-2,-2,-2,-2,-2,-2,-2, 8],
[8, 7, 0, 2, 5,-2,-2,12,-2,-2, 2, 3, 3, 5,-2,-2, 1,-2, 1, 1, 1, 8],
[8, 2, 3, 5,-2,-2,-2, 3,-2, 2, 3, 7, 5, 7,-2, 2, 3, 3, 3, 3, 5, 8],
[8,-2, 7, 8,-2,-2,-2,-2,-2,10, 2, 3, 3, 5,-2, 2,12,14, 0, 7,11, 8],
[8, 0, 8,14,-2,-2,-2,-2, 2, 3, 3, 3, 5,-2,-2, 2, 3, 3, 3, 3, 3, 8],
[8, 2, 3, 3, 5,-2,-2,-2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
[8, 7,11,10, 0, 0,-2,-2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8],
[8, 8, 3, 3, 3, 5,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2, 8],
[8, 0,10,11,10, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,10,10, 8],
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
