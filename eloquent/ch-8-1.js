function canYouSpotTheProblem() {
    "use strict";
    for (let counter = 0; counter < 10; counter++) {
        // console.log("Happy happy");
    }
}

canYouSpotTheProblem();

function Person(name) {
    this.name = name;
}
let ferdinand = Person("Ferdinand");
// console.log(name);
// console.log(ferdinand);

// (function() {
//     "use strict";
//     function Person(name) {
//         this.name = name;
//     }
//     let ferdinand = Person("Ferdinand");
// })();

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
    return "مرحبا".toUpperCase() == "مرحبا";
});

function numberToString(n, base = 10) {
    let result = "",
        sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}
// console.log(numberToString(5, 2));

const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptDirection(question) {
    rl.question(question, (result) => {
        console.log(result);
        if (result.toLowerCase() == "left") return "L";
        if (result.toLowerCase() == "right") return "R";
        throw new Error(`Invalid direction: ${result}`);
    });
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see");
    look();
} catch (error) {
    console.log("Something went wrong: " + error);
}
