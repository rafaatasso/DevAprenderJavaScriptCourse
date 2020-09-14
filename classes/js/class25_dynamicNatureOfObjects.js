const mouse = {
    color: 'red',
    brand: 'dazz'
};

mouse.speed = 5000;
mouse.changeDPI = function() {
    console.log('changing DPI');
};
delete mouse.speed;

console.log(mouse);