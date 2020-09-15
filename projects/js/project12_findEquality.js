function Address(street, city, cep) {
    this.street = street,
    this.city = city,
    this. cep = cep
};

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');
const address3 = address1;

function areTheSame(address1, address2) {
    return  address1.street === address2.street &&
            address1.city === address2.city &&
            address1.cep === address2.cep;
};

console.log(areTheSame(address1,address2));

function aretheSameMemoryAddress(address1, address2) {
    return address1 === address2; 
};

console.log(aretheSameMemoryAddress(address1,address2));
console.log(aretheSameMemoryAddress(address1,address3));
