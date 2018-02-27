
// Lecture: The this keyword

// console.log(this);

// calcAge(1984);

// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBith: 1990,
    calcAge: function(year) {
        console.log(this);
        console.log(2018 - this.yearOfBith);
    }
}

// john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBith: 1984
}

mike.calcAge = john.calcAge;
mike.calcAge();