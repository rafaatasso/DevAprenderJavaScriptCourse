let timeStamp = prompt('Digite uma hora no formato hh:mm ');

function convertToMinutes(time) {
    let timeSplit = time.split(":");
    let hours = Number(timeSplit[0]);
    let minutes = Number(timeSplit[1]);
    hours = hours*60;
    return (hours + minutes);
};

let time = convertToMinutes(timeStamp);

if ( time >= 6*60 && time < 12*60 ) {
    console.log('Bom dia!')
} else if ( time >= 12*60 && time < 18*60 ) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}