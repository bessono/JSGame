function botMovie1(botObject) {
    
    if (bot1Direction === "left") {
        var bot1LeftCurrent = worldMatrix[bot1WorldMatrixY][bot1WorldMatrixX + 1];
        if ((bot1LeftCurrent === 0) || (bot1LeftCurrent === 7) || (bot1LeftCurrent === 1) || (bot1LeftCurrent >= 10)){
            bot1WorldMatrixX++;
            bot1Left += _constMovieStep;
            botObject.style.left = bot1Left + "px";
        } else {
            bot1Direction = "right";
        }
    } else {
        var bot1RightCurrent = worldMatrix[bot1WorldMatrixY][bot1WorldMatrixX - 1];
        if (( bot1RightCurrent === 0) || (bot1RightCurrent === 7) || (bot1RightCurrent === 1) || (bot1RightCurrent >= 10)) {
            bot1WorldMatrixX--;
            bot1Left -= _constMovieStep;
            botObject.style.left = bot1Left + "px";
        } else {
            bot1Direction = "left";
        }
    }
}

function botMovie2(botObject) {
    if (bot2Direction === "left") {
        var bot2LeftCurrent = worldMatrix[bot2WorldMatrixY][bot2WorldMatrixX + 1];
        if ((bot2LeftCurrent === 0) || (bot2LeftCurrent === 7) || (bot2LeftCurrent === 1) || (bot2LeftCurrent >= 10)){
            bot2WorldMatrixX++;
            bot2Left += _constMovieStep;
            botObject.style.left = bot2Left + "px";
        } else {
            bot2Direction = "right";
        }
    } else {
        var bot2RightCurrent = worldMatrix[bot2WorldMatrixY][bot2WorldMatrixX - 1];
        if ((bot2RightCurrent === 0) || (bot2RightCurrent === 7) || (bot2RightCurrent === 1) || (bot2RightCurrent >= 10)) {
            bot2WorldMatrixX--;
            bot2Left -= _constMovieStep;
            botObject.style.left = bot2Left + "px";
        } else {
            bot2Direction = "left";
        }
    }
}

function botMovie3(botObject) {
    if (bot3Direction === "left") {
        var bot3LeftCurrent = worldMatrix[bot3WorldMatrixY][bot3WorldMatrixX + 1];
        if ((bot3LeftCurrent === 0) || (bot3LeftCurrent === 7) || (bot3LeftCurrent === 1) || (bot3LeftCurrent >= 10)) {
            bot3WorldMatrixX++;
            bot3Left += _constMovieStep;
            botObject.style.left = bot3Left + "px";
        } else {
            bot3Direction = "right";
        }
    } else {
        var bot3RightCurrent = worldMatrix[bot3WorldMatrixY][bot3WorldMatrixX - 1];
        if ((bot3RightCurrent === 0) || (bot3RightCurrent === 7) || (bot3RightCurrent === 1) || (bot3RightCurrent >= 10)) {
            bot3WorldMatrixX--;
            bot3Left -= _constMovieStep;
            botObject.style.left = bot3Left + "px";
        } else {
            bot3Direction = "left";
        }
    }
}
