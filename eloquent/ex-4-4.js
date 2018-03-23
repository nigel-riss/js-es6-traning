// Deep comparson of objects
// Compare if objects have same properties of same value
function deepEqual(valA, valB) {
    // check if both are objects
    if (typeof valA == 'object' 
        && valA != null 
        && typeof valB == 'object'
        && valB != null) {

        // check if both are the same object
        if (valA == valB) return true;

        // check if both have the same number of keys
        let keysA = Object.keys(valA);
        let keysB = Object.keys(valB);
        if (keysA.length !== keysB.length) return false;
    
        // deep compare keys values
        for (key in valA) {
            if (key in valB) {
                return deepEqual(valA[key], valB[key]);
            } else {
                return false;
            }
        }

    // if one of values is not and object compare them
    } else {
        return valA === valB;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true