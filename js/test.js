let elementWidth = '50px';

elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth',elementWidth);

let elementHeight = '201.56';

elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight',elementHeight);


let salary = 1300.13543543;

// salary = salary.toFixed(2);

salary = Number(salary.toFixed(2));

console.log(salary);

let quantity = '30';

let value = 'Not a Number';

console.log(Number(quantity));
console.log(Number(value));

console.log(Math)

let result = 2 ** 5;
const result2 = Math.pow(2, 10);
console.log('result', result);
console.log('result2', result2);

const brand = 'Samsung';
const normalizeBrand = brand.toLowerCase();

console.log(normalizeBrand);

let brand1 = prompt('Дай щось');
brand1 = brand1.toLowerCase();

console.log(brand1);

console.log(5 && 3);


let type;
const age = 10;

// if (age >= 18) {
//     type = "Adult";
// } else {
//     type = "minor";
// }

type = age >= 18 ? "Adult" : "minor";
console.log(type);


const x = 17;
const y = 16.99;
let exchange = (x % y).toFixed(2);
console.log(Number(exchange));


const target = 10;
for (let i = 1; i <= target; i++){
    console.log(i);
}




