// Цикл for...in

//Для перебора всех свойств объекта исп. цикл for...in.
//Этот цикл отличается от for(;;).

// for (let key in object) {
//     //body of cicle performed in each  cycle of object

// }
let firstPart = "Let";
let userInfo = {
    name: "Bangalor",
    age: 37,
    "somthing not usual": "wtf",
    [firstPart + " the sunshine begin!"]: "Yeeeee!",
    adress: {
        city: "Neverland",
        street: "Unusual Happy",
    }
}

for (let key in userInfo) {
    //key
    console.log(key);  // name, age, address
    //value of key
    console.log(userInfo[key]);  // Bangalor, 37, city...
    }

for (let key in userInfo.adress) {
    //key
    console.log(key);  // city, street
    //value of key
    console.log(userInfo.adress[key]);  // Neverland, Unusual Happy
    }
