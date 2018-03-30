//
// Group (my version of Set)
//
class Group {
    constructor() {
        this.storage = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.storage.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.storage.splice(this.storage.indexOf(value), 1);
        }

        // functional way
        // this.storage = this.storage.filter(v => v !== value);
    }

    has(value) {
        return this.storage.includes(value);
    }

    static from(collection) {
        let newGroup = new Group;
        for (let value of collection) {
            newGroup.add(value);
        }
        return newGroup;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index >= this.group.storage.length) return {done: true};

        let value = this.group.storage[this.index];
        this.index++;

        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

// test 6.2
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// test 6.3
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c