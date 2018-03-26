//
// repeats function n times
//
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

// test
// repeat(3, console.log);
// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

//
// checks if greater than n
//
function greaterThan(n) {
    return m => m > n;
}

//test
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// console.log(greaterThan10(9));

//
// wrapper to make function more "noisy"
//
function noisy(f) {
    return (...args) => {
        console.log('calling with', args);
        let result = f(...args);
        console.log('called with', args, ', returned', result);
        return result;
    };
}

// test
// noisy(Math.min)(3, 2, 1);


// runs function on condition fail
function unless(test, then) {
    if (!test) then();
}

// test
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, 'is even');
    });
});