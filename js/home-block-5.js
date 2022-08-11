//Option 1  (Add 'this' in methods )
const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }
  
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
  };


//Option 2
const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



//Option 3
const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
};
  

//Option 4
const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  
const child = Object.create(parent);

child.name = "Jason";
child.age = 27;
  

//Option 5
const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  
const parent2 = Object.create(ancestor);
parent2.name = "Stacey";
parent2.surname = "Moore";
parent2.age = 54;

const child2 = Object.create(parent2);
child2.name = "Jason";
child2.age = 27;



//Option 7  -  Классы
class Car {
  constructor (brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
//Вызов new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }


//Option 8
//принимает один параметр - объект со свойсвами brand, model и price. Для этого деструктиризируется объект в сигнатуре (подписи) конструктора.
class Car2 {
    constructor({brand, model, price}) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }
//вызов new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }


//Option 9
//Методы класса
class Car3 {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  getPrice(){
    return this.price;
  };
  changePrice(newPrice){
  this.price = newPrice;
  };
}


//Option 10
//написать методы обьекта
class Storage{
    constructor(items){
        this.items = items;
    }
    getItems(){
        return this.items;
    }
    addItem(newItem){
        this.items.push(newItem);
    }
    removeItem(itemToRemove){
      // for (let i = 0; i < this.items.length; i += 1){
      //   if (this.items[i] === itemToRemove){
      //       this.items.splice(i, 1);
      //   }
      // }
      this.items.forEach(function (number, index, array) {
        if(number === itemToRemove){
          array.splice(index, 1);
        }
      })
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


//Option 11

class StringBuilder {
    constructor (value){
        this.value = value;
}
  getValue(){
    return this.value;
  };
  padEnd(str){
    //   this.value += str;
      this.value = this.value.concat(str);
  }
  padStart(str){
    //   this.value = str + this.value;
      this.value = str.concat(this.value);
  }
  padBoth(str){
    this.value = str + this.value + str;
  }
}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


//Option 12
//Приватное свойство #name
class Car4 {
    #brand;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    };
    getBrand(){
      return this.#brand;
    };
    changeBrand(newBrand){
      this.#brand = newBrand;
    }
}
  

//Option 13
class Storage2 {
    #items;
    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove);
    }
  }
  const storage2 = new Storage2(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage2.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage2.addItem("Droid");
  console.log(storage2.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage2.removeItem("Prolonger");
  console.log(storage2.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  

//Option 14
class StringBuilder2 {
    #value;
    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  const builder2 = new StringBuilder2(".");
  console.log(builder2.getValue()); // "."
  builder2.padStart("^");
  console.log(builder2.getValue()); // "^."
  builder2.padEnd("^");
  console.log(builder2.getValue()); // "^.^"
  builder2.padBoth("=");
  console.log(builder2.getValue()); // "=^.^="
  

//Option 15
class Car5 {
    #brand;
    #model;
    #price;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
  
    get brand() {
      return this.#brand;
    }
  
    set brand(newBrand) {
      this.#brand = newBrand;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      this.#model = newModel;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
  }
  

//Option 16

class Car6 {
    // Change code below this line
    static MAX_PRICE = 50000;
    #price;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      if (newPrice <= Car6.MAX_PRICE){
  
      this.#price = newPrice;
      }
    }
    // Change code above this line
  }
  
  const audi = new Car6({ price: 35000 });
//   console.log(audi.price); // 35000
  
  audi.price = 49000;
//   console.log(audi.price); // 49000
  
  audi.price = 51000;
//   console.log(audi.price); // 49000
  

  //Option 17
  class Car7 {
    static #MAX_PRICE = 50000;
    // Change code below this line
  static checkPrice(price){
    if (price > Car7.#MAX_PRICE){
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
    // Change code above this line
    constructor({ price }) {
      this.price = price;
    }
  }
  
  const audi2 = new Car7({ price: 36000 });
  const bmw = new Car7({ price: 64000 });
  
//   console.log(Car7.checkPrice(audi2.price)); // "Success! Price is within acceptable limits"
//   console.log(Car7.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  

//Option 18
class User2 {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Change code below this line
  class Admin extends User2{
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser"
    }
  }

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);


//Option 19
class User3 {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin2 extends User3 {
    // Change code below this line
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({email, accessLevel}){
      super(email);
      this.accessLevel = accessLevel;
    }
    // Change code above this line
  }
  
  const mango = new Admin2({
    email: "mango@mail.com",
    accessLevel: Admin2.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"
  


  //Option 20
  class User4 {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin3 extends User4 {
    // Change code below this line
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    blacklistedEmails = [];
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
    blacklist(email){
      this.blacklistedEmails.push(email);
    }
    isBlacklisted(email){
      return this.blacklistedEmails.includes(email);
    }
    // Change code above this line
  }
  
  const mango2 = new Admin3({
    email: "mango@mail.com",
    accessLevel: Admin3.AccessLevel.SUPERUSER,
  });
  
  console.log(mango2.email); // "mango@mail.com"
  console.log(mango2.accessLevel); // "superuser"
  
  mango2.blacklist("poly@mail.com");
  console.log(mango2.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango2.isBlacklisted("mango@mail.com")); // false
  console.log(mango2.isBlacklisted("poly@mail.com")); // true
  