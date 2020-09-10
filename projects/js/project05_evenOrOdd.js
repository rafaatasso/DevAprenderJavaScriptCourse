evenOrOdd(1);

function evenOrOdd(number) {
    if ( typeof number != "number" ) {
        return 'Não é um número';
    } else {    
    for ( let i = 0; i <= number; i++) {
        if( i % 2 !== 0){
            console.log(i + ' is a Odd number!');
        } else {
            console.log(i + ' is a Even number!');
        }
    }}
};