// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// fetch(
//   "https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&category=nature&category=computer"
// )
//   .then((responce) => responce.json())
//   .then((data) => arrImg(data.hits))
//   .catch((error) => console.log("Error!", error));
// // userImageURL: "https://cdn.pixabay.com/user/2023/06/21/18-17-52-438_250x250.jpg";

// function img({ userImageURL }) {
//   const el = document.createElement("img");
//   el.src = userImageURL;
//   el.width = 300;
//   el.height = 300;
//   imgJs.appendChild(el);
// }

// function arrImg(obj) {
//   for (const i of obj) {
//     img(i);
//   }
// }

// const imgJs = document.querySelector(".img-js");

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
//
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const item = document.querySelector(".item");
// form.addEventListener("submit", foo);
// let page = 1;
// const loadBtn = document.querySelector(".load-js");
// loadBtn.addEventListener("click", foo);

// function foo(e) {
//   e.preventDefault();
//   const value = input.value;
//   fetch(
//     `https://api.github.com/search/users?q=${value}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`
//   )
//     .then((responce) => responce.json())
//     .then((data) => mee(data.items))
//     .then(() => page++)
//     .catch((error) => console.log("Error!", error));
// }

// function boo({ html_url, avatar_url, login }) {
//   const markUp = `<img src="${avatar_url}" alt="Тут должна быть Катя!">
// <a href="${html_url}">LINK</a>
// <h1>${login}</h1>`;
//   item.insertAdjacentHTML("beforeend", markUp);
// }
// function mee(arr) {
//   arr.forEach((e) => {
//     return boo(e);
//   });
// }

// html_url: "https://github.com/KatanES";
// avatar_url: "https://avatars.githubusercontent.com/u/124148302?v=4";
// login: "KatanES";

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

const form = document.getElementById("form");
const input = document.getElementById("input");
const item = document.querySelector(".item");
form.addEventListener("submit", foo);

function foo(e) {
  e.preventDefault();
  const value = input.value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then((responce) => responce.json())
    .then((data) => {
      item.innerHTML = "";
      mee(data.drinks);
    })
    .catch((error) => console.log("Error!", error));
}

function boo({ strCategory, strDrinkThumb, strInstructions }) {
  const markUp = `<img src="${strDrinkThumb}" alt="IMG!">
<h2>${strCategory}</h2>
  <p>${strInstructions}</p>;`;

  item.insertAdjacentHTML("beforeend", markUp);
}
function mee(arr) {
  arr.forEach((e) => {
    return boo(e);
  });
}

// strCategory;
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg";
// strInstructions;

// https://www.loom.com/share/4b7a70df9aea467baba3c8a45b8fe2a6
