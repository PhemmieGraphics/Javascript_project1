
// Bitwise AND
function bitwiseAND(a, b) {
    return a & b;
}

console.log(bitwiseAND(7, 12)); // 4


// Bitwise OR
function bitwiseOR(a, b) {
    return a | b;
}

console.log(bitwiseOR(7, 12)); // 15


// Bitwise XOR
function bitwiseXOR(a, b) {
    return a ^ b;
}

console.log(bitwiseXOR(7, 12)); // 11




// A Redundant Function
function redundant(str) {
    return function() {
        return str;
    };
}

// Examples
const f1 = redundant("apple");
console.log(f1()); // apple

const f2 = redundant("pear");
console.log(f2()); // pear

const f3 = redundant("");
console.log(f3()); // ""






// Get Notes Distribution
function getNotesDistribution(students) {
    return students
        .flatMap(student => student.notes)
        .filter(note => note >= 1 && note <= 5)
        .reduce((distribution, note) => {
            distribution[note] = (distribution[note] || 0) + 1;
            return distribution;
        }, {});
}

// Example
const students = [
    {
        name: "Steve",
        notes: [5, 5, 3, -1, 6]
    },
    {
        name: "John",
        notes: [3, 2, 5, 0, -3]
    }
];

console.log(getNotesDistribution(students));

// Expected Output:
// { '2': 1, '3': 2, '5': 3 }
