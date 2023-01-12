let randomNumber = Math.round(Math.random() * 100 + 1)
let b = Number(prompt(`100 dotorh toog taana uu`))
while (randomNumber !== b) {
    if (b === randomNumber) {
        break;
    }
    if (b < randomNumber) {
        alert(`tanii oruulsan too taah ystoi toonoos baga bn`)
    }
    else {
        alert(`tanii oruulsan too taah ystoi toonoos ih bn`)
    }
    b = Number(prompt(`ta dahin oruulj uzne uu`))
}
console.log(`Ta zuv taalaa  tanii oruulsan too ${b} blon random too ${randomNumber}`)
