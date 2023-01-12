let SCORE = 0;
const TILE_COUNT = 9;
const TIMER = 14;
let startTheGame = false
let MILLISECONDS = 0;
let SECONDS = TIMER;
let isGameOver = false;
let countDown;

const gameOverTargerPoint = document.getElementById("gameOverTarget")
const gameOverScreen = document.querySelector(".gameOverScreen");
const parent = document.querySelector("ul");
const scoreTarget = document.querySelector("#scoreTarget");
const timerTarget = document.querySelector("h3")
const RestartBtn = document.querySelector(".RestartGame")

const RGame = () => {
    updateScore(0 - SCORE);
    SECONDS = TIMER
    MILLISECONDS = 0
    isGameOver = false
    gameOverScreen.classList.remove('active')
    countDown = setInterval(updateTimer, 10);
    reDraw()
}

function gameOver() {
    // alert(`Your game is over: ` + SCORE)
    gameOverScreen.classList.add('active');

    isGameOver = true;
}

function updateTimer(millis) {
    if (MILLISECONDS <= 0) {
        SECONDS--;
        MILLISECONDS = 990;
    }
    MILLISECONDS -= 10;

    if (SECONDS <= 0 || (MILLISECONDS <= 0 && SECONDS <= 0)) {
        SECONDS = 0
        MILLISECONDS = 0
        gameOver();
        clearInterval(countDown)
    }
    let timerResult = ` `;
    if (SECONDS < 10) {
        timerResult += `0`;
    }
    timerResult += SECONDS;
    timerResult += ":";
    if (MILLISECONDS < 100) {
        timerResult + `0`;
    }
    if (MILLISECONDS < 10) {
        timerResult + `0`;
    }
    timerResult += MILLISECONDS;

    timerTarget.innerHTML = timerResult;


}

function updateScore(point) {
    SCORE += point;
    scoreTarget.innerHTML = SCORE;
    gameOverTargerPoint.innerHTML = SCORE;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
    // RGB
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red, green, blue];
}

function getDifferentColor(colors) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];
    if (color > 126) {
        color -= 50;
    } else {
        color += 50;
    }
    newColors[random] = color;
    return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

function reDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();

    const randomIndex = getRandomNumber(0, TILE_COUNT - 1);

    for (let i = 0; i < TILE_COUNT; i++) {
        const li = document.createElement("li");
        const isNormal = i !== randomIndex;

        if (isNormal) {
            li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        } else {
            li.style.backgroundColor = getDifferentColor(colors);
        }
        li.addEventListener("click", function () {
            if (!startTheGame) {
                if (countDown) clearInterval(countDown);
                countDown = setInterval(updateTimer, 10);
            }
            if (!isNormal) {
                updateScore(1);
                SECONDS += 1
                reDraw();
            } else {
                SECONDS -= 1
                reDraw()
            }

        });
        parent.appendChild(li);
    }
}
reDraw();
RestartBtn.addEventListener(`click`, RGame)
// gameOverScreen.addEventListener('click' = () => {
//     gameOverScreen.classList.remove('active');
//     reDraw()
// })
