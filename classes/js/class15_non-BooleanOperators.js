// Falsy types:
// undefined
// null
// 0
// false
// ''
// NaN (not a number)

// Truthy types are not falsy

console.log(false || true);
console.log(false || 'Rafaela');
console.log(false || 1);
console.log(false || 1 || 3);       // It stoped at 1, because it look for a true value

let customColor = '';
let defaultColor = 'Blue';
let perfilColor = customColor || defaultColor;

console.log(perfilColor);