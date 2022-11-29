let jil = 2020;
if (jil % 4 === 0 && jil % 100 !== 0) {
    console.log("leap year ");
    } else if (jil % 4 === 0 && jil % 100 === 0 && jil % 400 === 0) {
        console.log("leap year");
    } else {
        console.log("common year");
    }