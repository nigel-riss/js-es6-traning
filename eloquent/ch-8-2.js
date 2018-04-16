class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError(`Invalid direction: ${result}`);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

// try {
//     console.log("You see", look());
// } catch (error) {
//     console.log("Something went wrong: " + error);
//     console.log(error.stack);
// }

for (;;) {
    try {
        let see = look();
        console.log(see );
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}

function firstElement(array) {
    if (array.length == 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

firstElement([]);