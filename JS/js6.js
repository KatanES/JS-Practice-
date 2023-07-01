// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

fetch(
  "https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&category=nature&category=computer"
)
  .then((responce) => responce.json())
  .then((data) => arrImg(data.hits))
  .catch((error) => console.log("Error!", error));
// userImageURL: "https://cdn.pixabay.com/user/2023/06/21/18-17-52-438_250x250.jpg";

function img({ userImageURL }) {
  const el = document.createElement("img");
  el.src = userImageURL;
  el.width = 300;
  el.height = 300;
  imgJs.appendChild(el);
}

function arrImg(obj) {
  for (const i of obj) {
    img(i);
  }
}

const imgJs = document.querySelector(".img-js");
