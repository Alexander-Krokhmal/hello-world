//Option 4
const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
      for (let i = 0; i < this.pizzas.length; i += 1){
        if(this.pizzas[i] === pizzaName){
        return onSuccess(pizzaName);
        }
      }
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    },
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
  




  //Option 5
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
  
    orderedItems.forEach(function (number) {
        totalPrice += number;
    });
  
    // Change code above this line
    return totalPrice;
  }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


//Option 6
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
  
    numbers.forEach(function(number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
}
// console.log(filterArray([12, 24, 8, 41, 76], 38));


//Option 7
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
  
  firstArray.forEach(function(number) {
      if (secondArray.includes(number)) {
        commonElements.push(number);
      };
    });
  
    return commonElements;
    // Change code above this line
};
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



//Option 10
const calculateTotalPrice1 = orderedItems => {
    let totalPrice = 0;
    
  
    orderedItems.forEach(item => {
      totalPrice += item;
    });
  
    return totalPrice;
  }

//Option 11
  const filterArray1 = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
  }

  //Option 12
const getCommonElements1 = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
  
    // Change code above this line
    return commonElements;
};
// console.log(getCommonElements1([1, 2, 3], [2, 1, 17, 19]));


//Option 13
function changeEven(numbers, value) {
    // Change code below this line
    const newNumbers = [];
    
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newNumbers.push((number + value));
        } else if (number % 2 !== 0) {
            newNumbers.push(number);
        }
    });
    return newNumbers;
  
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
    // Change code above this line
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

  
//Option 14
//Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);  // [5, 4, 5, 7]


//Option 15
const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
const titles = books.map(book => book.title);
console.log(titles);  //['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']



//Option 16
const books2 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line
  
const genres = books2.flatMap(book => book.genres);
console.log(genres);  //[ "adventure", "history", "fiction", "horror", "mysticism" ]



//Option 17
const getUserNames = users => {
    return users.map(user => user.name);

};  //Массив users передає массив об'єктів і отримую назад массив property.name
  

//Option 19
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 ===0);
const oddNumbers = numbers.filter(number => number % 2 !==0);
console.log(evenNumbers);  //[24, 82, 36, 18, 52]
console.log(oddNumbers);  //[17, 61, 47, 73]


//Option 20
const books4 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
const allGenres = books4.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);  //находит и фильтрует уникальные эл.


//Option 21
const books3 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
  
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";
  // Change code below this line
  
  const topRatedBooks = books3.filter(book => book.rating >= MIN_RATING);
  const booksByAuthor = books3.filter(({author}) => author === AUTHOR);

console.log(topRatedBooks);  //Об'єкти з тейтингом більше 8
console.log(booksByAuthor);  //Книги за авторством AUTHOR


//Option 22
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};
  

//Option 23
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(({age}) => age > minAge && age < maxAge);
};


//Option 24
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};  //Серед массиву імен дрізів шукаєм співпадіння з передаваємим значенням


//Option 25
const getFriends = (users) => {
    const allFriends = users.flatMap(user => user.friends);
    const uniqueFriends = allFriends.filter((course, index, array) => array.indexOf(course) === index);
    return uniqueFriends
};
 

//Option 26
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true);
    //если возвращаемое значение буль, можно оставить просто значение, ибо filter возвращает в массив эл. который соотв. условию true/false
};
 
//Option 27
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false);
 };


 //Option 28
 //find - поиск до первого совпадения
 const books5 = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR2 = 'Robert Sheckley';
  // Change code below this line
  
const bookWithTitle = books5.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books5.find(book => book.author === AUTHOR2);
  


//Option 29
const getUserWithEmail = (users, email) => {
    const findEmail = users.find(item => item.email === email);
    return findEmail;
};
 
//Option 30
//Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true(если все элементы массива удовлетворяют условию) или false. 
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((item) => (item % 2) === 0);
const eachElementInFirstIsOdd = firstArray.every((item) => (item % 2) !== 0);

const eachElementInSecondIsEven = secondArray.every(item => (item % 2) === 0);
const eachElementInSecondIsOdd = secondArray.every((item) => (item % 2) !== 0);

const eachElementInThirdIsEven = thirdArray.every((item) => (item % 2) === 0);
const eachElementInThirdIsOdd = thirdArray.every((item) => (item % 2) !== 0);


//Option 31
const isEveryUserActive = (users) => {
    return users.every(item => item.isActive === true);
 };


//Option 32
//Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true(если хотя бы один элемент массива удовлетворяет условию) или false.
const firstArray2 = [26, 94, 36, 18];
const secondArray2 = [17, 61, 23];
const thirdArray2 = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray2.some(item => item % 2 === 0);
const anyElementInFirstIsOdd = firstArray2.some(item => item % 2 !== 0);

const anyElementInSecondIsEven = secondArray2.some(item => item % 2 === 0);
const anyElementInSecondIsOdd = secondArray2.some(item => item % 2 !== 0);

const anyElementInThirdIsEven = thirdArray2.some(item => item % 2 === 0);
const anyElementInThirdIsOdd = thirdArray2.some(item => item % 2 !== 0);


//Option 33
const isAnyUserActive = users => {
    return users.some(item => item.isActive === true);
};
 

//Option 34
//Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор.
/*массив.reduce((previousValue, element, index, array) => {
   //Тело коллбек-функции
}, initialValue);*/

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  const totalPlayTime = playtimes.reduce((item, number) => item + number);
  const averagePlayTime = totalPlayTime / playtimes.length;

  //Option 35
  const players2 = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  
  const totalAveragePlaytimePerGame = players2.reduce((total, name) => {return total + (name.playtime / name.gamesPlayed);
  }, 0);

  
  //Option 36
  const calculateTotalBalance = users => {
    return users.reduce((total, number) => {return total + number.balance}, 0);
 };

 //Option 37 
 const getTotalFriendCount = users => {
    return users.reduce((total, number) => {return total + number.friends.length},0);
};
 
//Option 38
//Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив. Поэтому делаем копию массива перед сортировкой.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();  //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
const alphabeticalAuthors = [...authors].sort();  //['Bernard Cornwell', 'Tanith Lee', 'Robert Sheckley', 'Fyodor Dostoevsky']


//Option 39
//Если вызов compareFunction(a, b) возвращает любое отрицательное значение, то есть a меньше b, сортировка поставит a перед b. Это сортировка по возрастанию. И наоборот.
const releaseDates2 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates2 = [...releaseDates2].sort((a, b) => a - b);  //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
const descendingReleaseDates = [...releaseDates2].sort((a, b) => b - a);  //[2016, 2012, 2008, 1997, 1984, 1973, 1967]


//Option 40
//Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().
// firstString.localeCompare(secondString)
const authors2 = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  const authorsInAlphabetOrder = [...authors2].sort((a,b) => a.localeCompare(b));  //['Bernard Cornwell', 'Fyodor Dostoevsky', 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']
  
const authorsInReversedOrder = [...authors2].sort((a, b) => b.localeCompare(a));  //['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Bernard Cornwell']
  

//Option 41
const books6 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
  const sortedByAuthorName = [...books6].sort((a, b) => a.author.localeCompare(b.author));  //массив книг отсортированный по имени автора в алфавитном порядке
  
  const sortedByReversedAuthorName = [...books6].sort((a, b) => b.author.localeCompare(a.author));  //массив книг отсортированный по имени автора в обратном алфавитном порядке
  
  const sortedByAscendingRating = [...books6].sort((a, b) => a.rating - b.rating);  //массив книг отсортированный по возрастанию рейтинга
  
  const sortedByDescentingRating = [...books6].sort((a, b) => b.rating - a.rating);  //массив книг отсортированный по убыванию рейтинга


//Option 42
const sortByAscendingBalance = users => {
    return users.sort((a, b) => a.balance - b.balance)
 };


//Option 43
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length)
 };  //возвращает новый массив пользователей отсортированный по убыванию количества их друзей


//Option 44
const sortByName = users => {
    return [...users].sort((a,b) => a.name.localeCompare(b.name));
 };  //возвращает новый массив пользователей, отсортированный по имени


//Option 45
//массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING
const books7 = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  
  const names = [...books7].filter(item => item.rating > MIN_BOOK_RATING).map(book => book.author).sort((a,b) => a.localeCompare(b));  //['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']


//Option 46
//возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends)
const getNamesSortedByFriendCount = users => {
    return [...users].sort((a,b) => a.friends.length - b.friends.length).map(user => user.name)
};
 

//Option 47
//возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
const getSortedFriends = users => {
    return [...users].flatMap(user => user.friends).filter((name, index, array) => array.indexOf(name) === index).sort((a, b) => a.localeCompare(b))
 };


//Option 48
//возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) => {
    return [...users].filter(sex => sex.gender === gender).map(find => find.balance).reduce((item, number) => item + number)
    };