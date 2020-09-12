const movie = {
    title: 'The ugly truth',
    year: 2009,
    actor: 'Gerard Butler',
    character: 'Mike Chadway',
};

showStringLines(movie);

function showStringLines(objects) {
    let typeObject = 'string';


    for (let key in objects) {
        let printInfo = key + ': ' + objects[key];

        // if (typeof objects[key] === typeObject) {
        //     console.log(printInfo);
        // }
        
        // or

        typeof objects[key] === typeObject ? console.log(printInfo) : '';
    }
    
};
