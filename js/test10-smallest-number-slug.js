const numbers = [11,4654,6546,54,654,654,6,6,45,132,16,57,87,64,32];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log('smallestNumber', smallestNumber)


//Change the letters register in word
const string = "JavaScript";
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    // First option
    // if (letter === letter.toLowerCase()) {
    //     console.log('This letter in Low register!!', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log('This letter in Upper register!!', letter);
    //     invertedString += letter.toLowerCase();
    // }

    // Second option
    invertedString +=
        letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();


}
console.log(invertedString);


//Делаем slug в URL из названия статьи
const title = 'Top 10 benefits of REACT framework!';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');

const slug1 = title.toLowerCase().split(' ').join('-');  // short write
console.log(slug1);


//Сложить сумму из двух массивов  (исп.метод concat())

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers2 = array1.concat(array2, [1,2,3], [90,70]);  //add new massives
console.log(numbers2);

for (const number2 of numbers2) {
    total += number2;
}

console.log(total);



//Перебор элементов массива 
const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}



const string2 = "The quick brown fox jumped over the lazy dog";
const stringSplit = string2.split(" ");
let longestWord = stringSplit[0];

for(i = 0; i < stringSplit.length; i += 1){

  if (stringSplit[i].length > longestWord.length){
    longestWord = stringSplit[i];
    
  }
}
console.log(longestWord);


// return word;




// function findLongestWord(str) {
//     return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
//   };
  
//   console.log(findLongestWord('There is the longest word in a string!'));