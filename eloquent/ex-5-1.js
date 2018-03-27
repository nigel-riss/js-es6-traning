// Flattering array of arrays

let arrays = [[1, 2, 3], [4, 5], [6], ['c', 'hello']];

function flattern(arr) {
    return arr.reduce((flat, el) => flat.concat(el), []);
}

console.log(flattern(arrays));
