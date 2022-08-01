// Map.1 Callback 2 Param with map()
const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
//Var 1
// const comeback2Value = players.map(player => {
//     return {
//         name: player.name,
//         playtime: player.playtime,
//     };
// });
//Var 2
const comeback2Value = players.map(({name, playtime}) => ({name, playtime}));
console.log(comeback2Value);  


//Map.2 Однотипные операции для всех эл. в коллекции map()
const updatePlayers = players.map(player => {
    return {
        ...player,
        gamesPlayed: player.gamesPlayed * 2,
    };
});
// console.table(updatePlayers);


// Map.3 Change only one element in Object
const changeName = "Kiwi";
//Var 1
const updatePlayers2 = players.map(player => {
    if (changeName === player.name){
        return {
            ...player,
            name: "Kawasuki",
            playtime: player.playtime + 100,
            gamesPlayed: player.gamesPlayed + 1,
        };
    };
    return player;
});

//Var 2
// const updatePlayers2 = players.map(player =>
//     (changeName === player.name) ?
//     {...player,
//     name: "Kawasuki",
//     playtime: player.playtime + 100,
//     gamesPlayed: player.gamesPlayed + 1,
//     } :
//     player
// );

console.table(updatePlayers2);






//Reduce
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
  
//Получаем объект объектов!!!

const tweetsObj = tweets.reduce((acc, tweet) => {
    acc[tweet.id] = tweet;
    return acc;
}, {});
console.log(tweetsObj);  //000: {id: '000', likes: 5, tags: Array(2)}, 001: {id: '001', likes: 2, tags: Array(2)}...}


  // Пройдем по всем элементам коллекции и добавим значения свойства tags
  // к аккумулятору, начальное значение которого укажем пустым массивом [].
  // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
  const tags = tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);  //если не делать spread будет массив массивов
  
    return allTags;
  }, []);
  
  console.log(tags);
  
  // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
  // для сбора тегов из коллекции
  const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
      allTags.push(...tweet.tags);
  
      return allTags;
    }, []);
  
  console.log(getTags(tweets));


//После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.
const tweets2 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  
const getTags2 = tweets2 =>
    tweets2.reduce((allTags, tweet) => {
      allTags.push(...tweet.tags);
  
      return allTags;
    }, []);
  
const tags2 = getTags2(tweets2);
  
  // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
  // Это стандартная практика если callback-функция довольно большая.
  
  // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
  // то создаем его и записывает ему значение 0.
  // В противном случае увеличиваем значение на 1.
  const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {     //acc.hasOwnProperty(tag) === acc[tag]
      acc[tag] = 0;
    }
  
    acc[tag] += 1;
  
    return acc;
  };
  
  // Начальное значение аккумулятора это пустой объект {}
  const countTags = tags => tags.reduce(getTagStats, {});
  
  const tagCount = countTags(tags);
  console.log(tagCount);









//28.07.2022 Урок с преподавателем!

  // Будемо працювати з даним списком автомобілів
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6',type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia',type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
  { make: 'Ford', model: 'Explorer v2', type: 'suv',amount: 0, price: 31660, onSale: false }
];


//? ## Example 0 - Метод map (easy)
/*
  Отримати масив в якому будуть назви моделей наявних авто (amount > 0)
*/
const getModelNames = (cars = []) => {
  // return cars.map((car) => car.model);

  // v1
  // return cars
  //   .map((car) => car.amount ? car.model : null)
  //   .filter((modelName) => !!modelName);     // !!'ford' => false => !false => true
    // .filter((modelName) => modelName !== null);

  // v2
  return cars
    .filter((car) => !!car.amount)
    .map((car) => car.model)

}

// console.log( getModelNames(cars) );






//? ## Example 1 - Метод map (not so easy)
/*
  Написати функцію applyDiscount(cars = [], discount = 0), яка буде застосовувати
  надану знижку (%)
  до ціни кожного автомобіля, і повертати масив з новими даними.
  ! Важливо: початкові дані в масиві cars мають залишатись незмінними
*/

function applyDiscount(cars = [], discount = 0) {

    // v1
    // return cars.map((car) => {
    //   return {
    //     ...car,
    //     price: car.price - discount
    //   }
    // });
  
    // v2
    return cars.map((car) => ({
        ...car,
        price: car.price - discount
    }));
  }
  
  // console.log( applyDiscount(cars, 10_000) );
  // console.log(cars);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //? ## Example 2 - Метод filter (easy)
  /*
    Написати функцію filterByPrice(limit = 0), яка має фільтрувати автомобілі за ціною,
    і повертати  масив авто у яких ціна нижче за переданий ліміт
  */
  
  function filterByPrice(cars = [], limit = 0) {
    // v1
    // return cars.filter((car) => car.price <= limit)
  
    // v2
    return cars.filter(({ price }) => price <= limit);
  }
  
  
  // console.log( filterByPrice(cars, 10_000) );
  // console.log( filterByPrice(cars, 25_000) );
  // console.log( filterByPrice(cars, 100_000) );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //? ## Example 3 - Метод find
  /*
    Функція getCarByModel має повертати об'єкт авто із заданою моделлю
  */
  // v1
  const getCarByModel = (cars = [], model = '') => {
    return cars.find(({ model: carModel }) => carModel === model);
  };
  
  // v2
  const getCarByModelV2 = (cars = [], model = '') => cars
    .find(({ model: carModel }) => carModel === model);
  
  // приклади
  // console.log( getCarByModel(cars, 'F-150') );
  // console.log( getCarByModel(cars, 'CX-9') );
  // console.log( getCarByModel(cars, 'CX-9999.99') );
  
  
  
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //? ## Example 4 - Метод filter + every (not so easy)
  /*
    Написати функцію filterBy(cars, filterObject), яка буде отримувати масив, і фільтр у вигляді
    об'єкта з потрібними умовами
    Повертати масив авто які відповідають всім умовам для переданого фільтра
  */
  
  const filterByHondaAndFord = {
    make: (make) => ['Honda', 'Ford'].includes(make)
  }
  
  const filterCheapFords = {
    make: (make) => make === 'Ford',
    price: (price) => price < 30_000
  }
  
  const filterTrucksOnSale = {
    onSale: (onSale) => onSale === true,
    type: (type) => type === 'truck'
  }
  
  /**
   * Отримує об'єкт з фільтрами, і повертає масив із авто для яких
   * кожний фільтр з об'єкта повернув true
   *
   * @param {Object[]} cars
   * @param {Object} filterObject об'єкт з колбеками в якості фільтрів
   *
   * @returns {Object[]}
   */
  function filterBy(cars, filterObject) {
    const filterKeys = Object.keys(filterObject);
    // console.log('filterKeys', filterKeys);
  
    return cars.filter((car) => {
      const isAllFiltersOK = filterKeys.every((key = '') => {
        const currentFilterFn = filterObject[key];
        console.log(key, filterObject[key], car[key]);
  
        // return currentFilterFn( car[key] ); // car.make => Ford, Toyota...
        return currentFilterFn( car[key] ); // car.price => 20000...
      });
  
      return isAllFiltersOK;
    });
  }
  
  
//   console.log( filterBy(cars, filterByHondaAndFord) );
//   console.log( filterBy(cars, filterCheapFords) );
//   console.log( filterBy(cars, filterTrucksOnSale) );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //? ## Example 5 - Метод sort (easy)
  /*
    Написати функцію sortByAmountAscending(cars), що повертає новий масив з
    відсортованими авто за значенням в ключі amount, сортування за зростанням
  */
  
  /**
   * @param {Object[]} cars
   */
  const sortByAscendingAmount = function (cars = []) {
    return [...cars].sort((current, next) => current.amount - next.amount);
  };
  
  
  // console.log( sortByAscendingAmount(cars) );
  // console.log(cars);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //? ## Example 6 - Метод sort (a bit harder)
  /*
    Написати функцію sortByAmount(cars, isAsc = true), що повертає новий масив з відсортованими авто.
    Параметр isAsc відповідає за тип сортування - за збільшенням чи за зменшенням кількості
  */
  
  const sortAsc = (current, next) => current.amount - next.amount;
  const sortDesc = (current, next) => next.amount - current.amount;
  
  /**
   * @param {Object[]} cars
   * @param {boolean} isAsc
   */
  const sortByAmount = function (cars = [], sortFn) {
    // return [...cars].sort(isAsc ? sortAsc : sortDesc);
    return [...cars].sort(sortFn);
  };
  
  
  
//   console.log( sortByAmount(cars) );
//   console.log( sortByAmount(cars, false) );
  