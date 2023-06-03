// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback){

//     const name = prompt ('name?');

//     callback(name);
// }

// function greet(name){
//     console.log(`Hi, ${name}!`);
// }
// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;
// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },

//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];

// 1)получити масив вчених які народились у 19ст;

// const array1 = scientists.filter(
//   (born) => born.born > 1800 && born.born < 1900
// );

// const scientistName = array1.map(({ name, surname }) => `${name} ${surname}`);
// console.table(scientistName);

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const array2 = scientists
//   .map(({ born, dead }) => dead - born)
//   .reduce((a, scientist) => a + scientist, 0);

// console.log(array2 / scientists.length);

// 3) відсортувати по алфавіту;

// const array3 = [...scientists].sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));

// console.table(scientists);
// console.table(array3);

// 4)відсортувати по кількості прожитих років;

// const array4 = [...scientists].sort(
//   (a, b) => a.dead - a.born - (b.dead - b.born)
// );

// console.table(array4);

// 5)відфільтрувати, хто народився в 15, 16, 17ст;

// const array15 = scientists.filter(
//   (born) => born.born > 1400 && born.born < 1500
// );

// const array16 = scientists.filter(
//   (born) => born.born > 1500 && born.born < 1600
// );

// const array17 = scientists.filter(
//   (born) => born.born > 1600 && born.born < 1700
// );

// Скорочений варіант ( на перевірку)
// const array15 = scientists.filter(
//   (born) => born.born > 1400 && born.born < 1700
// );

// console.table(array15);

// console.table(array16);
// console.table(array17);

// 6)знайти рік народження Albert Einstein;

// const array6 = scientists.find(
//   ({ name, surname }) => name === "Albert" && surname === "Einstein"
// );

// console.table(array6.born);

// 7)визначити, чи усі вчені працювали у 19ст;

// const array7 = scientists.every(({ dead }) => dead > 1400);
// console.table(scientists);
// console.log(array7);

// letMeSeeYourName(greet);

//   ЗАДАЧА 4
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.
// const prices = [2, 14, 1, 37, 26, 8];
// const prices = [2, 14, 1, 37, 26, 8];
// const pricesMin = [...prices].sort((a,b) => a - b);
// const pricesMax = [...prices].sort((a,b) => b - a);
// console.log(pricesMin, pricesMax);

// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// const pricesMin = [...items].sort((a,b) => a > b ? -1 : 1);
// const pricesMax = [...items].sort((b,a) => b < a ? 1 : -1);
// console.log(pricesMin, pricesMax);

// ====== ЗАДАЧІ НА САМООПРАЦЮВАННЯ (Задачі 6, 7, 8, 9) ===== //

//  ==== ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

// ==== ЗАДАЧА 7
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// con

// ==== ЗАДАЧА 8
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.
// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")

// ==== ЗАДАЧА 9
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.
// ЗАДАЧА НА ЗАМИКАННЯ 5
// У вас є функція counter(), яка повинна повернути нове значення лічильника кожного разу, коли вона викликається. Проте, коли ви викликаєте counter() два рази, вона повертає одне і те ж значення. Ви хочете, щоб кожен виклик counter() повертав нове значення лічильника. Використовуючи замикання, напишіть функцію, яка розв'язує цю проблему.
