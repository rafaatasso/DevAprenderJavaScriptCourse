let speed = checkSpeed(130);
console.log(speed);

function checkSpeed(speed) {
    const maxSpeed = 70;
    const maxPoints = 12;
    const kmForPoint = 5;

    if (speed <= maxSpeed) {
        return 'Ok';
    } else {
        let points = (speed - maxSpeed) / kmForPoint >> 0;
        if (points < maxPoints) 
            return ('Pontos: ' + points);
        return 'Carteria suspensa.';
    }
};