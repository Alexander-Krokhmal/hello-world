const add = function (x, y) {
  console.log(x);
  console.log(y);
  console.log('Выполянется функция add');

  return x + y;
};

const r1 = add(5, 3);
console.log('r1: ', r1);

const r2 = add(10, 15);
console.log('r2: ', r2);

const r3 = add(30, 50);
console.log('r3: ', r3);



//Создать массив из чисел наход. между заданными
const createArrayOfNumbers = function (min, max) {
    const numbers = [];
    for (let i = min; i <= max; i += 1){
      numbers.push(i);
    }
    return numbers;
}

const r4 = createArrayOfNumbers(14, 17);
console.log('r4: ', r4); 


//Find ljngest word
function findLongestWord(string) {
    const stringSplit = string.split(" ");
    let longestWord = '';
   
    for(let i = 0; i < stringSplit.length; i += 1){
        // wordLength = stringSplit[1].length;
    
        if (stringSplit[i].length > longestWord.length){
        longestWord = stringSplit[i];
                }
    }
        return longestWord;

  //var 2
  // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  
}
const r5 = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log('r5', r5);




/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';
  
    for (const letter of letters) {
      const isInLowerCase = letter === letter.toLowerCase();
  
      invertedString += isInLowerCase
        ? letter.toUpperCase()
        : letter.toLowerCase();
    }
  
    return invertedString;
  };
  
  console.log(changeCase('qweRTY')); // QWErty
  console.log(changeCase('mAnGo')); // MaNgO
  console.log(changeCase('AjAx')); // aJaX


console.log(!false && 11 || 18 && !'');