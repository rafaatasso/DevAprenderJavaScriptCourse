const nowDate = new Date();
const date1 = new Date('March 06 2019 09:32');
const date2 = new Date(2019, 02, 06, 9, 32); // 0 = January

date1.setFullYear(2030);
let dateString = date1.toDateString();
dateString = date1.toISOString(); // DB

console.log(nowDate, '\n', date1, '\n', date2, '\n', dateString);