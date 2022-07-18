//Option 21/32
function findLongestWord(string) {
    const stringSplit = string.split(" ");
    let longestWord = '';
   
    for(let i = 0; i < stringSplit.length; i += 1){
        wordLength = stringSplit[1].length;
    
        if (stringSplit[i].length > longestWord.length){
        longestWord = stringSplit[i];
                }
    }
        return longestWord;

  //var 2
  // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  
  }


//Option 22/32
function createArrayOfNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i += 1){
      numbers.push(i);
    }
    return numbers;
}
console.log(createArrayOfNumbers(14, 17));  //возвращает [14, 15, 16, 17]


//Option 23/32
function filterArray(numbers, value) {
    const array = [];
    for (const number of numbers) {
        if (number > value) {
            array.push(number);
        }
    }
    return array;
}
// filterArray([1, 2, 3, 4, 5], 3);  //возвращает [4, 5]


//Option 24/32
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
  
    return fruits.includes(fruit); // Change this line
  }
checkFruit("plum");  //возвращает true
checkFruit("mandarin"); //возвращает false
    

//Option 25/32
function getCommonElements(array1, array2) {
  
    let array3 = [];
    for (let i = 0; i < array1.length; i += 1){
      if(array2.includes(array1[i])){
        array3.push(array1[i]);
      }
    }
  return array3;
}
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);  //возвращает [12, 27, 3]


//Option 26/32
function calculateTotalPrice(order) {
    let total = 0;
   
    for (const number of order){
      total += number;
    }
    return total;
  }
// calculateTotalPrice([12, 85, 37, 4]);  //возвращает 138


//Option 27/32
function filterArray2(numbers3, value2) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (let i = 0; i < numbers3.length; i += 1) {
      const number3 = numbers3[i];
  
      if (number2 > value2) {
        filteredNumbers.push(number3);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
}
// filterArray2([1, 2, 3, 4, 5], 3);  //возвращает [4, 5]


//Option 29/32
function getEvenNumbers(start, end) {
    // Change code below this line
   const number = [];
 
   for (let i = start; i <= end; i += 1) {
     if(i % 2 === 0){
       number.push(i);
     }
   }
   return number;
     // Change code above this line
   }


//Option 30/32
//Find first number between start and end witch % 5
   const start = 6;
   const end = 27;
   let number;

   for (let i = start; i < end; i += 1) {
     if (i % 5 === 0) {
       number = i;
       break;
     }
   }

//Option 31/32   Рефакторінг коду, використовуємо return для преривання циклу при отриманні результату
function findNumber(start, end, divisor) {

for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
        return i;
    }
}
}

//Option 32/32  Чи є в массиві array значення value
function includes(array, value) {
    for (let i = 0; i < array.length; i += 1){
      if(array[i] === value){
        return true;
      }
    }
    return false;
    
    // for (const item of array){
    //     if(item === value){
    //       return true;
    //     }
    //   }
    //     return false;
  }
  