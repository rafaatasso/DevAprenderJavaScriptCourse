const cellPhone = {
    cellPhoneBrand: 'ASUS',
    screenSize: {
        vertical: 155,
        horizontal: 75
    },
    batteryCapacity: 5000,
    call: function() {
        console.log('Doing a call...')
    }
};

function createCellPhone(cellPhoneBrand, screenSize, batteryCapacity) {
    // const cellPhone = {
    return {
        cellPhoneBrand, //: 'ASUS',
        screenSize, // : {
        //     vertical: 155,
        //     horizontal: 75
        // },
        batteryCapacity, //: 5000,
        //call: function() {
        call(){
            console.log('Doing a call...')
        }
    };

    // return cellPhone;
};

const cel1 = createCellPhone('Zenfone', 5.5, 5000);
console.log(cel1);