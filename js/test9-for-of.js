//Скрипт подсчитывающий все четные числа в массиве
const numbers = [1, 30, 56, 84, 7, 16, 97, 46546, 77, 91, 5, 44]
//1. переменная тотал
let total = 0;

//2. Перебрать массив
// for (let i = 0; i < numbers.length; i += 1){
//     const number = numbers[i];
//     console.log(number);

//         //3. На каждой итерации проверить элемент на четность
//     if (number % 2 === 0) {
//         console.log('Четное');

//         //4. Если четное + к тоталу
//         total += number;
//     }
// }

// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 === 0) {
//         console.log(`${number} - четное`);
//         total += number;
//     }
// }


for (const number of numbers) {
    if (number % 2 !== 0) {
        // console.log('Этот код нужно пропустить', number);
        continue;
    }
    console.log(`${number} - четное`);
    total += number;
}
console.log('Total', total);



//Example to Find 000000000000right password
const logins = ['Password', 'Barmalei', 'Fisics', 'Destroy'];
const loginToFind = 'Fisics';
let message = `User ${loginToFind} isn't found.`;

// Option 1

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('login', login);
//     console.log(`${login} = ${loginToFind}`, login === loginToFind);

//     if (login === loginToFind) {
//         message = `User ${loginToFind} is found.`;
//         break;
//     }
 
//     // console.log(login);
    // }

// console.log(message);
    
// Option 2 

// for (const login1 of logins) {
//     if (login1 === loginToFind) {
//         message = `User ${loginToFind} is found.`;
//         break;
//     }
// }
// console.log(message);

// Option 3 

const message1 = logins.includes(loginToFind) ? `User ${loginToFind} is found.` : `User ${loginToFind} isn't found.`
console.log(message1);