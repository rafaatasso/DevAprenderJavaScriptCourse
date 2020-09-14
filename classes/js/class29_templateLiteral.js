const message = 'Hello, this is\n my first message! I\'m Rafaela.';
console.log(message);

// \n is a escape sequence

// This is template literal
const anotherMessage = `Hello, this is
my 'second' message.`;
console.log(anotherMessage);

const name = 'Rafaela';

// Why? Formatation
const email = 
`Olá, ${name}

Obrigado por se inscrever o canal.

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
Johonatan.`;
console.log(email);

/**************** HOME WORK ****************/

const lexie = {
    pet: 'dog',
    color: 'black',
    size: 'medium',
    weight: '10kg',
};

const myMessage = 
`Hy!

My name is ${name}, I'm 23 years old.

I have a ${lexie.pet}, her's name is Lexie, she is ${lexie.color} and she has ${lexie.size} size and ${lexie.weight}.

See you soon,
XOXO.`;

console.log(myMessage);