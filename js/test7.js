// Функция конструктор (ФК)

// Обычный синтаксис создавния объекта {...} позволяет создать
// только один объект. Но часто нужно создать множество однотипных объектов,
//таких как пользователи, элементы меню и тд.
//Это можно сделать при помощи ФК и оператиора "new".

/*
ФК - обычные ф-ции, но есть 2 правила:
1. Имя ФК должно начинаться с большой буквы.
2. ФК должна вызываться при помощи оператора "new".
*/

function UserInfo(name) {
    //this = {}; Создается пустой объект (неявно)
    this.name = name;
    this.age = 45;

    //return.this; Возвращается объект (неявно)
}

console.log(new UserInfo("Aragorn"));
console.log(new UserInfo("Priscilla"));

//Exercise 1
let userInfo2 = {
    name: "Bangalor2",
    age: 372,
    "423": "wtf",
}
console.log(userInfo2[423]);

//Exercise 2  что будет в консоли?
let userInfo3 = {
    name: "Bangalor2",
    age: 372
}
let user = userInfo3;
user.age = 1;
console.log(userInfo3.age);

//Exercise 3  что будет в консоли?
let userInfo4 = {
    name: "Bangalor2",
    age: 372,

    showInfo() {
       
        console.log(`${this.name}, age ${this.age} y.`);
    
    }
}
let user2 = userInfo4;
userInfo4 = null;

user2.showInfo ();