// Convert array to linked list
function arrayToList(arr) {
    let list = {value: arr[0], rest: null};
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        current.rest = {value: arr[i], rest: null};
        current = current.rest;
    }

    return list;
}

// arrayToList recursive
function arrToList(array) {
    let arr = array.slice(0);
    return arr[0] ? {value: arr.shift(), rest: arrToList(arr)} : null;
}

// Convert list to array
function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

// Prepend value to list
function prepend(value, list) {
    return {value, list};
}

// Return element of list at nth position
function nth(list, pos) {
    for (let i = 0; i < pos; i++) {
        list = list.rest;
    }
    return list.value;
}

// nth recursive
function nthR(list, pos) {
    if (list === null) return undefined;
    return (pos === 0) ? list.value : nthR(list.rest, pos - 1);
}


console.log(arrToList([10, 'a', true]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nthR(arrayToList([10, 20, 30, 'a', true]), 6));
// // → 20