
//Var 1
const array = [1, 2, 3, 4, 5];

function multBy (arr, n) {
    return arr.map(function (i) {
        return i * n;
    })
}
console.log(multBy(array, 4));   //[4, 8, 12, 16, 20]


//Var 2  Using Prototype
Array.prototype.multBy = function (n){
    return this.map(function (i) {
        return i * n;
    })
}
console.log(array.multBy(5));   //[5, 10, 15, 20, 25]


//--------------------------------//

const person = new Object ({
    name: 'Alex',
    age: 25,
    greet: function () {
        console.log('Greetings human!');
    }
});

Object.prototype.sayHello = function () {
    console.log('Wasssaaaaaaaaaap!');
}

person.greet();
person.sayHello();



//--------------------------------//
const lena = Object.create(person);  //create a prototype 
lena.name = 'Lena';

const str = new String('Somthing beautiful');
console.log(str);  // Obj str has a prototype String which has a prototype Object (with all their properties)



//--------------------------------//


const Animal = function (options) {
    this.name = options.name;
    this.color = options.color;

    // this.voice = function () {
    //     console.log('Base voice from ', this.name)
    // }
}


Animal.prototype.voice = function () {
    console.log('Base voice from ', this.name)
}

// console.log(Animal.prototype);

const dog = new Animal({ name: 'Rex', color: 'white' })
// const dog = {name: 'Rex', color: 'white'}

// dog.voice();

const Cat = function (options) {
    Animal.apply(this, arguments)
    this.hasTail = options.hasTail;
    this.type = 'cat';
}


Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Animal.prototype.voice = function () {
    console.log('Change string without change the variable ', this.name)
}

Cat.prototype.voice = function () {
    Animal.prototype.voice.apply(this, arguments)  //add:  Change string without change the variable  Bob 
    console.log(this.name + ' says meow')
}

const cat = new Cat ({name: 'Bob', color: 'white', hasTail: true})
console.log(cat)

// cat.voice();  //Change string without change the variable  Bob   +   //Bob says meow
// dog.voice();  //Change string without change the variable  Rex



//-------------------- New syntaxis of Class --------------------//
class Animal2 {
    constructor(options){
        this.name = options.name;
        this.color = options.color;
    }
    
voice() {
    console.log('Base voice from ', this.name)
}
}

const dog2 = new Animal2( { name: 'Rex', color: 'white' } )
dog2.voice();


class Cat2 extends Animal2{
    constructor(options) {
        super(options)

        this.hasTail = options.hasTail;
        this.type = 'cat';
    }

    voice() {
        super.voice()  // Вызывает начальный
        console.log(this.name + ' says meow')
    }
}

const cat2 = new Cat2 ({name: 'Bob', color: 'white', hasTail: true})

//Examples
Object.prototype.print = function () {
    console.log('I am object ', this)
}

cat2.print()

Array.prototype.mapAndLog = function () {
    console.log('Array to map ', this)
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2));

String.prototype.toTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))
console.log('eminem'.toTag('em'))





// Answers the questions

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Cicle 'for'
for (let i = 0; i < array.length; i += 1){
    console.log(array[i]);
}

//Cicle 'while' - аналог for, разница в переменной i (тут она в глобальной обл.видимости)
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i += 1;
}

//Cicle 'do...while' - выполнится обязательно один раз!
let i = 0;
do {
    console.log(array[i]);
    i += 1;
} while (i < array.length);