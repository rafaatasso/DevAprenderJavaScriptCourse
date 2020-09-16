// ...name is a spread
const first = [1,2,3];
const second = [4,5,6];

const together = [...first, ...second];
const clone = [...together];
console.log(together);
console.log(clone);


/**************** HOME WORK ****************/
const homeWork = [...first, '%', ...second];
console.log(homeWork);