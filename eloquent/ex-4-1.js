// Returns an array with range of numbers from start to end (included)
function range(start, end, step) {
    let arr = [];

    // Assigning default step if not defined
    if (step === undefined) {
        step = (start < end) ? 1 : -1;
    }

    if (start < end) {
        if (step < 0) throw new Error('Wrong arguments to range function');
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else if (start > end) {
        if (step > 0) throw new Error('Wrong arguments to range function');
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}


// Returns sum of numbers in array
function sum(arr) {
    let accum = 0;
    for (let i = 0; i < arr.length; i++) {
        accum += arr[i];
    }
    return accum;
}



// console.log(range(1, 10, 2));
// console.log(sum(range(1, -9, -2)));