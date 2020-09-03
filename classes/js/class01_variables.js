console.log('Bem-vindo ao curso!');

/*************************************************************************************/
/************************************* Variables *************************************/
/*************************************************************************************/

// To understand, see more at https://www.youtube.com/watch?v=QVrrqgDhhu4
// Case sensitive!
// Nowadays, we have three tipes: var, let and const
// For understand each one, we'll see what scope, redeclaration and hoisting they have

/**** var ****/
// The scopo is in a function scope, but, there is also global scope and local scope.
// You can redeclar anytime!
// All var are hoisted to the top of the page

// First Exercise

/*
function returnName() {
    var name = 'Rafaela Tasso';
    return name;
}

console.log(name); // script.js:18 Uncaught ReferenceError: name is not defined
returnName();
*/

// Second Exercise

/*
var name = 'Gustavo Deschamps';

function returnName() {
    var name = 'Felipe Deschamps';
    return name;
}

console.log(name); // Gustavo Deschamps
returnName();
*/

// First Exemple

/*
var name = 'Gustavo Deschamps';
var name = 'Felipe Deschamps';

console.log(name); // Felipe Deschamps
*/

// Third Exercise

/*
var name = 'Gustavo Deschamps';

function returnNane() {
    name = 'Felipe Deschamps';
    return name;
}

returnNane();
console.log(name); // Felipe Deschamps
*/


/**** let ****/
// The scopo is a block scope.
// You can redeclar anytime! But you can't code like let sameLet = 'another thing';
// They not sofer by hoisting, so declar in the right order!

// First Exemple

/*
var name = 'Gustavo Deschamps';

if (1 + 1 === 2) {
    let name = 'Felipe Deschamps';
}

console.log(name); // Gustavo Deschamps
*/

// Second Exemple

/*
let name = 'Gustavo Deschamps';
let name = 'Felipe Deschamps';

console.log(name); // Uncaught SyntaxError: Identifier 'name' has already been declared
*/

/*
// But you can do ...
let name = 'Gustavo Deschamps';
name = 'Felipe Deschamps';

console.log(name); // Felipe Deschamps
*/

// Third Exemple

/*
console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization
let name = 'Gustavo Deschamps';
*/


/**** const ****/
// The scopo is a block scope.
// You can't redeclar! 
// They not sofer by hoisting, so declar in the right order!


/*************************************************************************************/
/********************************** Course Exercise **********************************/
/*************************************************************************************/

let age = 23;
let height = 171;
let name = 'Rafaela Tasso';
let text = 'Hello! My name is '+name+' and I have '+age+' years old. Also, I have '+height+' cm.';
console.log(text);