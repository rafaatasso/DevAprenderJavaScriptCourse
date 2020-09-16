document.getElementById('comment').innerText = 'Olá!';

// Don't work, why? 
// Because you have to find the index of the element
console.log(document.getElementsByClassName('myLink'));
document.getElementsByClassName('myLink')[0].innerText = 'Mudei aqui também!';

// Also you can try use:
// .value
// .innerHTML