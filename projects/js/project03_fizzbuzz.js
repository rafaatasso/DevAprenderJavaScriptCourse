const result = fizzbuzz(1);
console.log(result);

function fizzbuzz(entry) {
    const mod3 = entry % 3;
    const mod5 = entry % 5;

    if (typeof entry != "number") {
        return 'Não é um número';
    } else if (mod3 === 0 && mod5 === 0) {
        return 'FizzBuzz';
    } else if (mod3 === 0 && mod5 !== 0) {
        return 'Fizz';
    } else if (mod3 !== 0 && mod5 === 0) {
        return 'Buzz';
    } else {
        return (entry + ': esse foi o número digitado');
    }
};