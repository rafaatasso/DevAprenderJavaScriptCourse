findPrimeNumbers(10);

function findPrimeNumbers(num) {
    for ( let number = 2; number <= num; number++ ) {
        if (isPrime(number)) console.log(number);
    }
};

function isPrime(number) {
    for ( let div = 2; div < number; div++ ) {
        if (number % div === 0) {
            return false;
        }
    }
    return true;
};