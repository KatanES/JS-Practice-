// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

const headerEl = document.querySelector(".header");
console.dir(headerEl);

const navigationEl = document.getElementById("navigation");
