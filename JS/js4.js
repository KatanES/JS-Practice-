// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */
}

// const inputEl = document.getElementById("validation-input");

// inputEl.addEventListener("blur", () => {
//   if (inputEl.value.length == inputEl.dataset.length) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });

// TASK 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// let counterValue = 0;
// const bttnDecrement = document.querySelector(`[data-action="decrement"]`);
// const bttnIncrement = document.querySelector(`[data-action="increment"]`);
// const value = document.querySelector("#value");

// bttnDecrement.addEventListener("click", () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });

// bttnIncrement.addEventListener("click", () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// });

// TASK 5

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const elInput = document.querySelector("#name-input");
// const elOutput = document.querySelector("#name-output");
// elInput.addEventListener("input", (el) => {
//   elOutput.textContent = el.currentTarget.value;
//   if (el.currentTarget.value === "") {
//     elOutput.textContent = "Anonymous";
//   }
// });
