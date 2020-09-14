//Pascal Case - OneTwoThree
function CellPhone(cellPhoneBrand, screenSize, batteryCapacity) {
    this.cellPhoneBrand = cellPhoneBrand,
    this.screenSize = screenSize,
    this.batteryCapacity = batteryCapacity,
    this.call = function() {
        console.log('Doing a call...');
    }
};

const cellphone = new CellPhone('ASUS', 5.5, 5000);
console.log(cellphone);