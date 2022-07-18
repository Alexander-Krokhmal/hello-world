
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

console.log(userInfo);
console.log(userInfo.age);
console.log(userInfo.adress);
console.log(userInfo.adress.city);
console.log(userInfo["name"]);
console.log(userInfo["somthing not usual"]);
console.log('Let the sunshine begin:',userInfo["Let the sunshine begin!"]);

// Add new property
userInfo.adressGross = {
    planet: "Goblonomia",
    materic: "Head",
    city: "UnderGround",
}

console.log(userInfo);

// Delete property
delete userInfo.adress;  
console.log(userInfo);

//Change property
userInfo.adressGross.planet = 'Earth';

console.log(userInfo.adressGross);