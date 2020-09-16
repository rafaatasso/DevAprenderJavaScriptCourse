const numbers = [1,2,3,4,5,6];

// For Of
console.log('For Of: ');
for (number of numbers)
    console.log(number);

// forEach
console.log('forEach: ');

/* 
numbers.forEach( function(numb) {
    console.log(numb);
});
*/

numbers.forEach( (numb, idx) => console.log(numb, idx) );


