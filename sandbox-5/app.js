// Person constructor
function Person(name, dateOfBirth) {  // Date of Birth = dob
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dateOfBirth);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        console.log(ageDate.getTime());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    console.log(this);
}

// console.log(this);
// const brad = new Person('Brad', 42);
// const john = new Person('John', 30);

const brad = new Person('Brad', '11-19-1984');
console.log(brad.calculateAge());
