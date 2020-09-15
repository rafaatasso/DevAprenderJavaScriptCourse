const priceRange = [ 10, 20, 22, 21.5, 50];

orderPriceRange(10, 25, priceRange);

function orderPriceRange(minValue, maxValue, priceRange) {
    let values = [];
    for ( let value of priceRange ) {
        if (value >= minValue && value <= maxValue)
            values.push(value);
    }
    console.log(values);
};

/* FORM VIDEO */

// First Option
let range = [
    {tooltip: 'até R$700', min:0, max:700},
    {tooltip: 'de R$700 até R$1000', min:700, max:1000},
    {tooltip: 'R$1000 ou mais', min:1000, max:9999999}
];

// Second Option
function createPriceRange(tooltip, min, max) {
    return {
        tooltip,
        min,
        max
    };
};

let range2 = [
    createPriceRange('até R$700', 0, 700),
    createPriceRange('de R$700 até R$1000', 700, 1000),
    createPriceRange('R$1000 ou mais', 1000, 9999999)
];

// Third Option
function CreatePriceRange(tooltip, min, max) {
    this.tooltip = tooltip ,
    this.min = min ,
    this.max = max 
};

let range3 = [
    new CreatePriceRange('até R$750', 0, 750),
    new CreatePriceRange('de R$750 até R$1000', 750, 1000),
    new CreatePriceRange('R$1000 ou mais', 1000, 9999999)
];

console.log(range, range2, range3);