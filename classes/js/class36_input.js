/*
let favoriteColor = prompt('Olá, qual é a sua cor preferida?');
console.log(favoriteColor);
*/

/**************** HOME WORK ****************/
let age = prompt('Oi! Qual a sua idade?');
if (age === null || age === '' || age < 0) {
    alert('Digite sua idade, por favor')
} else if (age >= 18) {
    alert('Você já é maior de idade! Uau'); 
} else {
    alert('Você ainda é menor de idade, quase lá!');
    };