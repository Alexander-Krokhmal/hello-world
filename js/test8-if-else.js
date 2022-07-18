let message1 = "Hi there!";

if (2 > 1) console.log(message1);   // сокращенная версия записи


let shot = 92 > "11" ? "True" : "False"
console.log(shot);


//Massives
const clients = ["Sam", "Body", "Cler", "Poly"];

console.log('clients', clients);

clients[0] = "Tom";
console.log('clients', clients);   //  Tom, Body, Cler 
console.log(clients[clients.length - 1]);  // Cler

//Iteration massives (cycle "for")
for (let i = 0; i < clients.length; i += 1) {
    console.log("name:",clients[i]);
}

//Iteration massives (cycle "for...of")
for (const client of clients) {
    console.log(client);
  }

  /*  Example:
  for (const variable of iterable) {
    // тело цикла
    }

variable — переменная которая будет хранить значение элемента на каждой итерации.
iterable — коллекция, которая имеет перечислимые элементы, например массив.
  */

const string = "javascript";

for (const character of string) {
  console.log(character);   // spell the string "javascript" in column
}


const clientNameToFind = "Poly";
let message = "Клиента с таким именем нету в базе данных!";  //сразу прописываем не удов сценарий, такой вариант больше нравится

for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";  //второй вариант записи сценария
}
console.log(message); // "Клиент с таким именем есть в базе данных!"



// Используем цикл для вывода только чисел больше определенного значения.

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        // console.log(numbers[i]);   // выводит не прошедшие условия итерации
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}



//1.Методы split() и join()
//split()
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message5 = "JavaScript это интересно";
console.log(message5.split(" ")); // ["JavaScript", "это", "интересно"]
// join()
const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"

//2.Метод indexOf()
//indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента
const clients2 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients2.indexOf("Poly")); // 2
console.log(clients2.indexOf("Monkong")); // -1


//3.Метод includes()
//includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно.
const clients3 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients3.includes("Poly"));   // true
console.log(clients3.includes("Margaret"));   // false

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//4.Методы push() и pop(); unshift() и shift()
//push() и pop() - добавляют или удаляют крайние ПРАВЫЕ элементы массива. 
//unshift() и shift() - добавляют или удаляют крайние ЛЕВЫЕ элементы массива.
const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers2.pop()); //  5
console.log(numbers2); // [1, 2, 3, 4]

numbers2.push(6);
console.log(numbers2); // [1, 2, 3, 4, 5, 6]

numbers2.pop();
console.log(numbers2); // [1, 2, 3, 4, 5]

numbers2.shift();
console.log(numbers2); // [2, 3, 4, 5]

numbers2.unshift(10);
console.log(numbers2); // [10, 2, 3, 4, 5]


//5.Метод slice()
//slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

const clients4 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients4.slice(1, 3)); // ["Ajax", "Poly"]


//6.Метод splice()

//6.1 Удаление
//Чтобы удалить элементы в массиве, передаются два аргумента.
// splice(position, num)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]


//6.2 Добавление
// Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

//6.2 Замена
// Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.

// splice(position, num, new_element_1, new_element_2, ...)

// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]


languages.splice(1, 3);
console.log(languages); // ["C", "Go", "JavaScript"]


//7.Метод concat()
// Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.table(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]