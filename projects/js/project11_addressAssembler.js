showAddress('Rua das Flores', 'Imaginação', '01234-000');

function showAddress(street, city, CEP) {
    const address = new Address(street, city, CEP);
    for (key in address)
        console.log(key + ' is ' + address[key]);
};

function Address(street, city, CEP) {
    this.street = street,
    this.city = city,
    this.CEP = CEP
};
