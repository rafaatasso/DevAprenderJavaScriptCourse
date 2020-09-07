// First type:
// Performs a task and returns nothing

function sayName() {
    console.log('Rafaela');
};

sayName();


// Second type:
// Does a calculation or operation and returns something
function multiplyByTwo(value) {
    return value* 2;
};

console.log(multiplyByTwo(5));
// or
let result = multiplyByTwo(5);
console.log(result);