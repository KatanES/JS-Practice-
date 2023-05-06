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
