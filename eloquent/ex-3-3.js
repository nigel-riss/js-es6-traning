function countBs(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'B') {
            counter++;
        }
    }
    return counter;
}

function countChar(s, ch) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ch) {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));