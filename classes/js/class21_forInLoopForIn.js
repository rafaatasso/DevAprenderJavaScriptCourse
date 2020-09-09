const person = {
    name: 'Rafaela',
    age: 23
};
// key-value
for( let key in person ) {
    console.log(key, person[key]);
}

const colors = [ 'Red', 'Blue', 'Pink' ];

for( let index in colors ) {
    console.log(index, colors[index]);
}