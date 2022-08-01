function greet(name) {
    return `Добро пожаловать ${name}.`;
}
  
console.log(greet("Alex"));
console.log(greet);


function repeatLog(n) {
    for (let i = 1; i <= n; i += 1){
        console.log(i);
    }
}

repeatLog(5);







function printValue(value) {
    console.log(value);
  }
  
  function prettyPrint(value) {
    console.log("Logging value: ", value);
  }
  
  function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  }
  
  // Передаем printValue как callback-функцию
  repeat(3, printValue);
  // 0
  // 1
  // 2
  
  // Передаем prettyPrint как callback-функцию
  repeat(3, prettyPrint);
  // Logging value: 0
  // Logging value: 1
  // Logging value: 2




//Функция фильтра


const filterArray = function (array, callback) {
    const findArray = [];
    
    for (const item of array) {
        // console.log(item);
        const passed = callback(item);

        if (passed) {
            findArray.push(item);
        }
    }
    return findArray;
}
  
const callback1 = function (value) {
    return value >= 4;
}
// const callback1 = value => value >= 4;  стрелочная функция

const callback2 = function (value) {
    return value < 4;
}


const r1 = filterArray([1, 2, 3, 4, 5, 6, 7,], callback1);
// const r1 = filterArray([1, 2, 3, 4, 5, 6, 7,], value => value >= 4);  стрелочная функция
console.log(r1);

const r2 = filterArray([1, 2, 3, 4, 5, 6, 7,], callback2);
console.log(r2);


const fruits = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

// const callback3 = function (fruit) {
//     return fruit.price > 1250;
// }
const callback3 = fruit => fruit.price > 1250;

const r3 = filterArray(fruits, callback3);
// const r3 = filterArray(fruits, fruit => fruit.price > 1250);  стрелочная функция

console.log(r3);




//Замыкание функции


const makeSheff = function (name) {
    const innerVar = 555;
    const message = "hello";

    const makeDish = function (dish) {
        console.log(innerVar);   //видим переменніе родителя в 
        console.log(message);   //подчиненной функции (замкнутой)
        console.log(`${name} coocked ${dish}`);
    }
    return makeDish;
}

const mango = makeSheff('Mango');

// mango('candy');
// mango('salmon');

// const poly = makeSheff('Poly');
// poly('chicken');
// poly('fruit salad');

console.dir(mango);
