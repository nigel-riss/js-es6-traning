// Creates new reversed array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Reverse array in place
function reverseArrayInPlace(arr) {
    let tmp, len = arr.length - 1;
    for (let i = 0; i < len / 2; i++) {
        tmp = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = tmp;
    }
}

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]