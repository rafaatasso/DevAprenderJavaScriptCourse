const numbers = [1, 2, 3];

// Add new elements
// Start
numbers.unshift(0);
console.log(numbers);

// Middle
numbers.splice(1, 0, 'a');
console.log(numbers);

// End
numbers.push(5);
console.log(numbers);

/**************** HOME WORK ****************/

const homeWork = ['início', 'meio', 'fim'];

homeWork.unshift('antes do início');
homeWork.splice(2, 0, 'Bem no meio');
homeWork.push('Finaleira');

console.log(homeWork);

/************* END OF HOME WORK *************/

// Find primitive elements
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(2));
// if not found -1

console.log(numbers.includes(5));


// Find referemce elements
const brands = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'}
];

const brand = brands.find( function(brand) {
    return brand.name === 'A';
} );

console.log(brand);


// Arrow Function
const brand2 = brands.find( (brand) => brand.name === 'A' );
console.log(brand2);


// Remove elements
// Start
const start = numbers.shift();
console.log(start);
console.log(numbers);

// Middle
const middle = numbers.splice(2, 1);
console.log(middle);
console.log(numbers);

// End
const last = numbers.pop();
console.log(last);
console.log(numbers);


// Emptying elements
// Solution 1
/*
let number = [1,2,3,4,5,6];
let others = number;
number = [];
console.log(others);
*/

// Solution 2
let others = numbers;
numbers.length = 0;
console.log(numbers);
console.log(others);


// Solution 3
/*
let others = numbers;
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(others);
*/

// Solution 4
/*
while (numbers.length > 0)
    numbers.pop();
console.log(numbers);
*/


// Match arryas
const first = [1,2,3];
const second = [4,5,6];

const match = first.concat(second);
console.log(match);


// Slice arrays
const sliced = match.slice(1, 3);
console.log(sliced);