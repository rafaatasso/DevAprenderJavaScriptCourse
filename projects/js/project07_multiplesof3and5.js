sumNumbers(10);

function sumNumbers(num) {
    let multiple3 = 0;
    let multiple5 = 0;
    for (let i = 0; i <= num; i++) {
        let mod3 = i % 3;
        let mod5 = i % 5;

        if (mod3 === 0) 
            multiple3 += i;
        if (mod5 === 0)
            multiple5 += i;
    }
    let total = multiple3 + multiple5;
    console.log(total);
};