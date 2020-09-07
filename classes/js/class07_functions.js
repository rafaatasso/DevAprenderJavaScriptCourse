// Data entry or data out is a responsability os functions
// Named is Verb + Noun


// Fist Exemple
// Without parameters


let siteColor = 'Blue';

function resetColor() {
    siteColor = '';
};

console.log(siteColor);
resetColor();
console.log(siteColor);


// With parameters


let site = 'Blue';

function changeColor(color, hue) {
    site = color + ' ' + hue;
};

console.log(site);
changeColor('Red', 'Light');
console.log(site);


/**************** HOME WORK ****************/

let budget = 0;

function paidBudget(valuePaid) {
   budget += valuePaid;
};

console.log(budget);
paidBudget(30);
console.log(budget);
paidBudget(30);
console.log(budget);
