let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
}

// test
// rabbit.speak("I'm alive");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: 'white', speak};
let hungryRabbit = {type: 'hungry', speak};

// test
// whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now");

// speak.call(hungryRabbit, 'Burp!');


function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
// normalize.call({coords: [0, 2, 3], length: 5});

let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEEEE!');

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rebbit;
}

// function Rabbit(type) {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}`);
// };

// let weirdRabbit = new Rabbit('weird');
// weirdRabbit.speak("I'm not weird! WTF?");

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.speak("Yo Bro!");

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
killerRabbit.teeth = 'long, sharp and bloody';
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(Object.prototype.toString.call([1, 3]));
console.log('toString' in Object.create(null));

let ages = new Map();
ages.set('Boris', 39);
ages.set('Liang', 22);
ages.set('Julia', 62);

console.log(`Julia is ${ages.get('Julia')}`);
console.log(`Is Jack's age known?`, ages.has('Jack'));
console.log(ages.entries());

console.log({x: 1}.hasOwnProperty('x'));
console.log({x: 1}.hasOwnProperty('toString'));

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

console.log(String(blackRabbit));

let sym = Symbol('name');
console.log(sym == Symbol('name'));
console.log(sym);

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return 'a jute rope'; }
};
console.log(stringObject[toStringSymbol]());