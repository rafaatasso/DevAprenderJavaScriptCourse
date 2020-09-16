const list = [
    {name: 'Rafaela', inviterName: 'Jonathan'},
    {name: 'Rafael', inviterName: 'Marcos'},
    {name: 'Paulo', inviterName: 'Maurício'}
];

function canEntry() {
    let name = document.getElementById('name').value;
    let inviterName = document.getElementById('inviterName').value;
    let done = false;
    
    list.forEach( (e) => {
        if (done === true) {return}
        else if (e.name == name && e.inviterName == inviterName) {
            document.getElementById('answer').innerText = 'Pode entrar!';
            done = true;
            } else {
                document.getElementById('answer').innerText = 'Não pode entrar!';
                console.log(e.name);
            };
    });
};