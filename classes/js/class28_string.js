// Primitive Type
const message = 'My first message';
console.log(message);
console.log(typeof message);

// Object Type
const anotherMessage = new String('Good morning!');
console.log(anotherMessage);
console.log(typeof anotherMessage);

// Lenght
console.log('Lenght');
console.log(anotherMessage.length);

// First Letter
console.log('First Letter: ');
console.log(anotherMessage[0]);

// Contains
console.log('Contains: ');
console.log(message.includes('first'));
console.log(message.includes('red'));

// Start
console.log('Start With My?');
console.log(message.startsWith('My'));

// Index Of
console.log('Index of first');
console.log(message.indexOf('first'));

// Change
console.log('Replace My for Your');
console.log(message.replace('My', 'Your'));

// Trim
const spaces = ' hy ';
console.log(spaces);
console.log(spaces.trim());

// Split
console.log(message.split(' '));