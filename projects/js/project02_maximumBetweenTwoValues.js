let theBiggerNumber = biggerNumber(1,20);
let theMaxNumber = maxNumber(1, 20);
console.log(theBiggerNumber, theMaxNumber);

function biggerNumber(num1, num2) {
    if (num1 === num2) {
        return 'Both numbers are equals!'
    } else if (num1 > num2) {
        return (num1 + ' is the bigger!')
    } else {
        return (num2 + ' is the bigger!')
    }
};

function maxNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
};