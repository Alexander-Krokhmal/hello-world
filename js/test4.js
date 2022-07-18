// Dublicate Object with method (Object.assign)

//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...)

let userInfo = {
    name: "BigBoddy",
    age: 123,
};

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);

// Add new property
Object.assign(user, { ["Unbelievable property"]: true, adress: "Moon" });
console.log(user);

//Check availeble property
console.log(user?.adress);
console.log(user?.adress?.city);


//Check availeble property with operator 'in'
if ("name" in user) {
    console.log(user.name);
    
}