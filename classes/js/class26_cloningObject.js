const cellPhone = {
    cellPhoneBrand: 'ASUS',
    screenSize: {
        vertical: 155,
        horizontal: 75
    },
    call: function() {
        console.log('Doing a call...')
    }
};

// Type 01
const newObject = Object.assign({
    batteryCapacity: 5000
}, cellPhone);
console.log(newObject);

// Type 02
const newObject2 = {...cellPhone};
console.log(newObject2);


/**************** HOME WORK ****************/

const lexie = {
    pet: 'dog',
    color: 'black',
    size: 'medium',
    weight: '10kg',
};

const olderLexie = Object.assign({
    age: 3
}, lexie);
console.log(olderLexie);