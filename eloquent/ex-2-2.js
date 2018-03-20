//
// Classic 'Fizz Buzz'
// Writes numbers from 1 to 100
// But
// For numbers divisible by 3 writes "Fizz"
// For numbers divisible by 5 writes "Buzz"
// For both cases "FizzBuzz"
//

// async version
for (let i = 1, s = ''; i < 101; i++, s = '') {
    s += i % 3 ? '' : 'Fizz';
    s += i % 5 ? '' : 'Buzz';
    s += s == '' ? i : '';
    setTimeout(() => {
        console.log(s);
    }, 0);
} 