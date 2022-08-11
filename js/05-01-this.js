//Module 5.2  Prototipes and classes
//--- Static Property ---
class User1 {
    // Объявление и инициализация статического свойства
    static Roles = {
      ADMIN: "admin",
      EDITOR: "editor",
    };
  
    #email;
    #role;
  
    constructor({ email, role }) {
      this.#email = email;
      this.#role = role;
    }
  
    get role() {
      return this.#role;
    }
  
    set role(newRole) {
      this.#role = newRole;
    }
  }
  
const mango = new User1({
email: "mango@mail.com",
role: User1.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User1.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User1.Roles.EDITOR;
console.log(mango.role); // "editor"
  


//--- Static Methods ---
class User {
    static #takenEmails = [];
  
    static isEmailTaken(email) {
      return User.#takenEmails.includes(email);
    }
  
    #email;
  
    constructor({ email }) {
      this.#email = email;
      User.#takenEmails.push(email);
    }
  }
  
  const mango1 = new User({ email: "mango@mail.com" });
  
  console.log(User.isEmailTaken("poly@mail.com"));   //false
  console.log(User.isEmailTaken("mango@mail.com"));   //true



//---Конструктор дочернего класса---
// class User2 {
//     constructor(email) {
//       this.email = email;
//     };
  
//     get email() {
//       return this.email;
//     };
  
//     set email(newEmail) {
//       this.email = newEmail;
//     };
// };
  
//   class ContentEditor extends User2 {
//     constructor({ email, posts }) {
//       // Вызов конструктора родительского класса User
//       super(email);
//       this.posts = posts;
//       };
// };
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
  



//'JS Lesson 09', 'Модуль 5. Заняття 9. Контекст виклику функції. this.'
//? ## Example -1 - як визначається контекст?

function fnCreator() {
    console.log('outer context:', this);
  
    // v1 звичайний контекст функції - визначииься в момент виклику
    return function () {
      console.log('inner context', this)
    }
  }
  
  function fnCreatorArrow() {
    console.log('outer context v2:', this);
  
    // v2 стрілка, контекст залишиться той шо був на момент виклику fnCreatorArrow
    return () => {
      console.log('inner context v2 arrow', this)
    }
  }
  
  
  // test()();
  
  const freddyA = {
    slogan: 'i want to break free',
    // fn: fnCreator()
    fn: fnCreator
  }
  
  const freddyB = {
    slogan: 'show must go on',
    // fn: fnCreator()
    fn: fnCreatorArrow
  }
  
  // freddyA.fn()();
  
  // freddyB.fn()();
  
  // подвійний виклик fn()():
  // const newFn = freddyA.fn();
  // newFn();
  
  const freddyC = {
    slogan: 'whatever another famous song',
    method: function () {
      console.log('method', this);
    },
    methodArrow: () => {
      console.log('method Arrow', this); // запам'ятає контекст (зовнішній)
    }
  }
  
  // freddyC.method();
  // freddyC.methodArrow();
  
  
  
  
  
  
  
  
  
  //? ## Example 0 - Базовий приклад на контекст виконання
  /*
    Є метод setMood в об'єкта user. Перевикористати метод setMood для
    інших схожих по суті об'єктів
  */
  
  /**
  * Задає поточний настрій
  * @param {string} currentMood
  */
  // function setMood(currentMood) {
  //  this.mood = currentMood;
  // }
  
  // v2
  const commonFunctions = {
    setMood: function(currentMood) {
      this.mood = currentMood;
    },
    doWalk: function() {
      console.log(`${this.name} is ${this.mood}  walks!`);
    }
  }
  
  //! default user
  const user = {
    name: 'Simon',
    age: 25,
    hobby: 'swimming',
    isPremium: true
  };
  
  //! even more default dog
  const dog = {
    name: 'Jerry',
    age: 3,
    breed: 'husky'
  };
  
  // приклад
  // user.setMood('happy');
  // console.log(`User ${user.name} now feels ${user.mood}`);
  
  // setMood.call(user, 'happy');
  // console.log(`User ${user.name} now feels ${user.mood}`);
  
  // setMood.call(dog, 'very-veryhappy');
  // console.log(`Dog ${dog.name} now feels ${dog.mood}`);
  
  
  // v2
  function assignMethods(obj = {}, methods = {}) {
    const entries = Object.entries(methods);
    // console.log(entries);
    entries.forEach(([ keyName, func ]) => {
      obj[keyName] = func;
    });
  }
  
  assignMethods(user, commonFunctions);
  assignMethods(dog, commonFunctions);
  
  user.setMood('a bit happy');
  dog.setMood('super happy');
  
  // user.doWalk();
  // dog.doWalk();
  
  
  
  
  
  
  
  
  
  
  //? ## Example 1 - Контекст виконання part 2
  /*
    Відрефакторити код, щоб:
    - 1. функція getModelNames стала методом в usedCars
    - 2. getModelNames працював для активного в даний момент менеджера.
    * addedBy дорівнює null, це означає що авто має бути доступне будь-якому менеджеру
  */
  
  const usedCars = {
    manager: 'Simon',
    storage: [
      { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045, addedBy: 'Simon' },
      { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195, addedBy: 'Nik' },
      { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210, addedBy: 'Nik' },
      { make: 'Ford', model: 'F-150', type: 'truck', price: 27110, addedBy: 'Simon' },
      { make: 'Ford', model: 'Explorer v2', type: 'suv', price: 31660, addedBy: null },
    ],
  
    /**
     * Задає ім'я менеджера який працює сьогодні
     * @param {string} managerName
     */
     setActiveManager(managerName) {
      this.manager = managerName;
    },
  };
  
  /**
   * Повертає моделі авто доступні для конкретного менеджера
   * @returns {string[]} масив з назвами доступних моделей
   */
  function getModelNames() {
    return this.storage
      .filter((car) => car.addedBy === this.manager || !car.addedBy)
      .map((car) => car.model)
  }
  
  // usedCars.getModelNames = getModelNames;
  
  // приклади
  // console.log(usedCars.manager, usedCars.getModelNames() );
  
  // usedCars.setActiveManager('Nik');
  // console.log(usedCars.manager, usedCars.getModelNames() );
  
  // usedCars.setActiveManager('Andrew');
  // console.log(usedCars.manager, usedCars.getModelNames() );
  
  // v2 call
  // console.log(usedCars.manager, getModelNames.call(usedCars) );
  
  // v3 bind
  const bindedFunc = getModelNames.bind(usedCars);
  // --- будь які дії
  // console.log(usedCars.manager, bindedFunc());
  
  
  
  
  
  
  
  
  
  
  //? ## Example 2 - Phonebook
  /*
    Відрефакторити код, щоб він запрацював як потрібно
  */
  
  function generateId() {
    console.log('ok, i will make a new ID');
  }
  
  const phonebook = {
    contacts: [],
  
    add(contact = {}) {
      const newContact = {
        list: 'default',
        ...contact,
        id: this.generateId(),
        createdAt: this.getDate(),
      };
      this.contacts.push(newContact);
    },
  
    generateId() {
      return '_' + Math.random().toString(36).substring(2, 9);
    },
  
    getDate() {
      return Date.now();
    },
  
    // v1
    // getContacts() {
    //   return this.contacts;
    // }
  };
  
  function getContacts() {
    return this.contacts;
  }
  
    phonebook.add({
      name: 'Simon',
      email: 'simonSaysEmailMe@email.com',
      list: 'friends',
    });
  
    phonebook.add({
      name: 'Nicolas',
      email: 'nn4@very-hot-mail.com',
    });
  
    // v0
    // console.log(phonebook.getContacts());
  
    // v1 call
    // console.log(getContacts.call(phonebook));
  
    // v2 bind
    const bindedGetContacts = getContacts.bind(phonebook);
    // function getContacts() {
    //   return phonebook.contacts;
    // }
    // console.log(bindedGetContacts());
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  //? ## Example 3 - Винаходимо калькулятор
  /*
    Створити об'єкт calculator з такими методами:
    - read(a, b) - приймає два значення і зберігає як властивості об'єкта.
    - add() - повертає суму отриманих раніше значень
  */
  
  const calculator = {
    arg1: null,
    arg2: null,
  
    read(a = 0, b = 0) {
      this.arg1 = a;
      this.arg2 = b;
    },
  
    add() {
      console.log(this.arg1 + this.arg2);
    }
  };
  
  
  calculator.read(8, 4);
  console.log(calculator.add());
  
  // * якщо нам потрібно буде виконувати метод з калькулятора як колбек?
  // * якщо calculator.read також буде якимось колбеком?
  
  const slowManager = {
    name: 'Dolan',
  
    doMath(calculator, ...numbers) {
      console.log(`Slow manager ${this.name} starts working...`);
      calculator.read(...numbers);
  
      // тут загубится контекст, тому що ми передаємо посилання на функцію, яка
      // виконається через таймаут
      // setTimeout( calculator.add, 3_000); // спрацює через 3 сек але ВТРАТИТЬ контекст
  
      // v1 bind
      setTimeout( calculator.add.bind(calculator) , 3_000); // спрацює через 3 сек
  
      // v2 arrow
      setTimeout(() => {
        calculator.add(); // тут ми всередині стрілки виконуємо наш метод напряму, з контекстом
      }, 3_000); // спрацює через 3 сек
      // (function() {
      //   calculator.arg1 + calculator.arg2;
      // })()
    }
  }
  
slowManager.doMath(calculator, 8, 2);
  

const animal = {
    eats: true,
  };
  const dog2 = Object.create(animal);
  dog.barks = true;
  
  for (const key in dog2) {
    if (!dog2.hasOwnProperty(key)) continue;
  
    console.log(key); // barks
  }



class User3 {
static #takenEmails = [];

static isEmailTaken(email) {
    return User3.#takenEmails.includes(email);
}

#email;

constructor({ email }) {
    this.#email = email;
    User3.#takenEmails.push(email);
}
}

const mango2 = new User3({ email: "mango@mail.com" });
  
console.log(User3.isEmailTaken("poly@mail.com"));
console.log(User3.isEmailTaken("mango@mail.com"));