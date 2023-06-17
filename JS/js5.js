// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

const headerEl = document.querySelector(".header");

const navigation = document.getElementById("navigation");
console.dir(headerEl.clientHeight);
console.dir(headerEl.clientWidth);

// pageYOffset - old
// scrollY - new

const height = headerEl.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  if (scrollY > height) {
    navigation.classList.add("fixed-nav");
  } else {
    navigation.classList.remove("fixed-nav");
  }
}
