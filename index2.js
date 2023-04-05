let now = new Date();

let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentDate = document.querySelector(".current");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

let showCity = document.querySelector("h1");

function addCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector("h1");
  changeCity.innerHTML = `${form.value.toUpperCase()}`;
}

let form = document.querySelector("#form1");
form.addEventListener("search", addCity);

function searchCelsius() {
  currentTemperature.innerHTML = "+21 ⛅";
  celsius.style.backgroundColor = "#8064e9";
  farenheit.style.backgroundColor = "white";
}
let celsius = document.querySelector("#buttonCelsius");
celsius.addEventListener("click", searchCelsius);

function searchFarenheit() {
  currentTemperature.innerHTML = "+87 ⛅";
  celsius.style.backgroundColor = "white";
  farenheit.style.backgroundColor = "#8064e9";
}
let farenheit = document.querySelector("#buttonFarenheit");
farenheit.addEventListener("click", searchFarenheit);
let currentTemperature = document.querySelector(".temperaturecurrent");
