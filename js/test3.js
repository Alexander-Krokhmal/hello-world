function makeUserInfo(name, age) {
    return {
        name, // the same like name: name,
        age: age,
        "like for JS": "not shure but it`s good",
    }
};

let user = makeUserInfo("Goblin", 118);
// console.log(user);

// console.log(user.name);

showName();
function showName() {
    console.log('VasyaLong!');
} 
setTimeout(showName, 0);
console.log('Kolya!');


let showMessage;
if (2 > 1) {
    showMessage = () => {
        console.log('Vasya15!');
    };
};
showMessage();