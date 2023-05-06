// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Jazz", "Bluz"];
// styles.push("Rock&Roll");
// styles.splice(1, 1, "Classic");
// const viewStyles = styles.shift();
// console.log(viewStyles);
// styles.unshift("Rap", "Reggy");
// console.log(styles);

// ЗАДАЧА 2
// / Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i}:${array[i]}`)
//         }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// const user = ['Mango', 'Poly', 'Ajax'];
// function logItems() {
// for (let i = 0; i < user.length; i++) {
//     console.log(i, user[i]);
//     }
// }
// logItems();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
// function findSmallestNumber(numbers) {
//     let min = numbers[0];
//    for ( let i = 1; i < numbers.length; i +=1) {
//     if (min > numbers[i]) { min = numbers[i]}
//    };
//     return min;
// };
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   numbers = Math.min(...numbers);
//   return numbers;
// }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
//
// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// function calculateAverage(...args) {
//   //   let argsLength = args.length;
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }

//   return sum / args.length;
// }

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// function greet(name = "гість") {
//   return `Привіт, ${name}`;
// }

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію

// const checkNumbers = (a, b) =>
//   a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;
// //   if (a > b) {
// //     return `число ${a} більше ${b}`;
// //   }

// //   return `число ${b} більше ${a}`;

// console.log(checkNumbers(10, 20));

// const checkNumbers = function (a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// };
// console.log(checkNumbers(10, 20));

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:
//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (let key of keys) {
//   console.log(key, user[key]);
// }

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ
//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;
//  const calculator = {
//  a: null,
//  b: null,
//   read() {},
//   sum() {},
//   mult() {},
// };
// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// // capitalize('the quick brown fox')// 'The Quick Brown Fox '

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:
// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// // addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse("CSS"); // 'У вас уже є такий курс'
// // removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// // updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);
