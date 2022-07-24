const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
console.log(products);
  function getProductPrice(productName) {
    // Change code below this line
  
      for (const product of products) {
     
          if (product.name === productName) {
              return product.price;
          }
     
        }
        return null;
    // Change code above this line
  }

//   let findPrice;
//   for (const product of products) {
//     findPrice = product.name === productName ? product.price : null;
//   return findPrice;
//   }


//Option 19
/*Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.*/
const products2 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  const getAllPropValues = function(propName) {
    // Change code below this line
  const array = [];
  
  for (const product of products2){
    if (product.hasOwnProperty(propName)){
      array.push(product[propName]);
    }
  }
  return array;
  
    // Change code above this line
}
getAllPropValues("name");   //["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues("quantity");  //[4, 3, 7, 9]
getAllPropValues("price");  //[1300, 2700, 400, 1200]
getAllPropValues("category"); //возвращает []


//Option 20
/*Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products. */
const products3 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let total = 0;
  
    for (const product of products3){
      if(productName === product.name){
        total = product.price * product.quantity;
      }
    }
    return total;
  
    // Пиши код выше этой строки
}
calculateTotalPrice("Blaster");  //возвращает 0
console.log(products3);
calculateTotalPrice("Radar");  //возвращает 5200
calculateTotalPrice("Droid");  //возвращает 2800
calculateTotalPrice("Grip");  //возвращает 10800
calculateTotalPrice("Scanner");  //возвращает 8100
// console.log("Scanner: ", calculateTotalPrice("Scanner"));









const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
  
    getPotions() {
        const { potions } = this;
        return potions;
    },
    addPotion(newPotion) {
        const { potions } = this;
        const { name: newName } = newPotion;
  
        for (const { name } of potions) {
            if (name === newName) {
                return `Error! Potion ${newName} is already in your inventory!`;
            }
        }
        potions.push(newPotion);
    },
  
  
    removePotion(potionName) {
        const { potions } = this;
  
        //   const potionIndex = potions.indexOf(potionName);
        //     console.log(potionIndex);
        for (let i = 0; i < potions.length; i += 1) {
  
          
            if (potions[i].name === potionName) {
                console.log(i);
                potions.splice(i, 1);
            }
        }
        return `Potion ${potionName} is not in inventory!`;
  
    },
  
  
  
    updatePotionName(oldName, newName) {
        const { potions } = this;

        // for (const {name} of potions) {
        //     if (name === oldName) {
        //         potions.name = newName;
        //     }
        // }

        // return `Potion ${oldName} is not in inventory!`;
        for (let i = 0; i < potions.length; i += 1) {
            const { name } = potions[i];
    
            if (name === oldName) {
                potions[i].name = newName;
                // potions.name.splice(i, 1, newName);
                //   const  { name: newName } = potions[i];
            }
        }
    
        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};

// console.log(atTheOldToad.removePotion("Dragon breath"));
console.table(atTheOldToad.potions);

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.table(atTheOldToad.potions);



// updatePotionName(oldName, newName) {
//     const { potions } = this;
    
//     const potionIndex = potions.indexOf(oldName);
//     console.log(potionIndex);

//   if (potions.name === oldName) {
//     // return `Potion ${oldName} is not in inventory!`;
//     potions.splice(potionIndex, 1, newName);
//   }

// },