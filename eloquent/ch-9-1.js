// let re1 = new RegExp("abc");
// let re2 = /abc/;

// let eighteenPlus = /eighteen\+/;

// let slash = /\\ \/ \?/;


// //   \d   Any digit character
// //   \w   An alphanumeric character (“word character”)
// //   \s   Any whitespace character (space, tab, newline, and similar)
// //   \D   A character that is not a digit
// //   \W   A nonalphanumeric character
// //   \S   A nonwhitespace character
// //   .    Any character except for newline

// // sequence match
// console.log(/abc/.test("abcde"));
// console.log(/abc/.test("abxde"));

// // digits
// console.log(/[0123456789]/.test("in 1992"));
// console.log(/[0-9]/.test("in 1992"));
// console.log(/\d/.test("in 1992"));

// console.log(/\w/.test("%$#")); // false
// console.log(/\W/.test("%$#")); // true

// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d\:\d\d/;
// console.log(dateTime.test("19-11-1984 17:32"));
// console.log(dateTime.test("19-Nov-1984 17:32"));

// let notBinary = /[^01]/;
// console.log(notBinary.test("100101010101010"));
// console.log(notBinary.test("100101012101010"));

// // console.log(/[\d.]/.test("19-11-1984 17:32"));
// // console.log(/[\d.]/.test("19-Nov-1984 17:32"));

// console.log(/\d+/.exec("1fsa23432fdasdfa123"));

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour"));
// console.log(neighbor.test("neighbor"));

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
// console.log(dateTime.test("30-1-2003 8:45"));

// let nooooPlus = /no{4,}/i;
// console.log(nooooPlus.test("noo!"));
// console.log(nooooPlus.test("Nooooo!"));
// console.log(nooooPlus.test("noooo"));

// let cartoonCrying = /boo+(hoo+)+/i;
// console.log(cartoonCrying.test("Boohooooohoohooo"));
// console.log(cartoonCrying.exec("Boohooooohoohooo"));

// let match = /\d+/g.exec("one 100 two 100");
// console.log(match);
// console.log(match.index);

// console.log("one two 100".match(/\d+/));

// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));

// console.log(/bad(ly)?/.exec("bad"));
// console.log(/bad(ly)?/.exec("badly"));


// console.log(/(\w)(\d)+/.exec("123"));


// console.log(new Date());
// console.log(new Date(2009, 11, 9));
// console.log(new Date(2009, 11, 9, 19, 59, 59, 999));
// console.log(new Date(2009, 11, 9, 26, 1));
// console.log(new Date(-62167210000000));
// console.log(new Date(0000, 0, 1).getTime());
// console.log(new Date(-2208996000000));

function getDate(string) {
    let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

// console.log(getDate("30-1-2004"));
// console.log(new Date(0000, 0, 1).getTime());
// console.log(new Date(-2208996000000));

function getDate(string) {
    let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string));
    return new Date(year, month - 1, day);
}

// console.log(getDate("30-1-2004"));
// console.log(getDate("100-1-30000"));

// console.log(/\d{1,2}-\d{1,2}/.exec('123-00'));

// console.log(/\D+/.exec("123 text"));
// console.log(/[^0-9]+/.exec("123 text"));


// console.log(/cat/.test("concatenate"));
// console.log(/\bcat\b/.test("concatenate"));

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
// console.log(animalCount.test("15 pigs"));
// console.log(animalCount.test("15 pigcows"));

let anyNumber = /\b([01]+b|[\d(a-f|A-F)]+h|\d+)\b/;
// console.log(anyNumber.exec("01010101"));

//
// replacing
//

// console.log("papa".replace("p", "m"));
// console.log("papa".replace(/p/g, "m"));
// console.log("Borobudur".replace(/[ou]/, "a"));
// console.log("Borobudur".replace(/[ou]/g, "a"));


// console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and fbi";
// console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // the only one left, remove 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
    // greedy
    // return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
    // nongreedy
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10; // ten!"));
console.log(stripComments("1 /* a */ + /* b */ 1"));