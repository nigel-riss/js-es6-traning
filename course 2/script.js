var years = [1990, 1965, 1937, 2005, 1998];

function arrCalc(arr, fn) {
    var arrRes = [];
    for (el of arr) {
        arrRes.push(fn(el));
    }
    return arrRes;
}

function calcAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrCalc(years, calcAge);
var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));