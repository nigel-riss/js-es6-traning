
class PGroup {
    constructor(array) {
        this.storage = array;
        // this.storage = this.storage.filter(v => !this.storage.includes(v));
    }

    add(value) {
        if (this.has(value)) return this;
        return new PGroup(this.storage.concat(value));
    }
    
    delete(value) {
        if (!this.has(value)) return this;
        return new PGroup(this.storage.filter(v => v !== value));
    }

    has(value) {
        return this.storage.includes(value);
    }

    static get empty() {
        return new PGroup([]);
    }

    toString() {
        return this.storage.toString();
    }
}

// tests
let a = PGroup.empty.add("a");
console.log(a);
let ab = a.add("b");
console.log(ab);
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false