// Menu Behavior Code
const toggleMenu = document.getElementById("toggleMenu");
const navMenu = document.getElementById("navMenu");
const navLogo = document.getElementById("navLogo");
const navBar = document.getElementById("navBar");
const mainContainer = document.getElementById("mainContainer");
const gadgetsContainer = document.getElementById("gadgetsContainer");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.forEach((classT) => {
    if (classT === "-translate-y-[10rem]") {
      navMenu.classList.replace("-translate-y-[10rem]", "translate-y-20");
      navBar.classList.replace("h-12", "h-auto");
      mainContainer.classList.replace("blur-0", "blur");
      mainContainer.classList.replace("mb-0", "mb-10");
      gadgetsContainer.classList.replace("grid", "hidden");
    }
    if (classT === "translate-y-20") {
      navMenu.classList.replace("translate-y-20", "-translate-y-[10rem]");
      navBar.classList.replace("h-auto", "h-12");
      mainContainer.classList.replace("blur", "blur-0");
      mainContainer.classList.replace("mb-10", "mb-0");
      gadgetsContainer.classList.replace("hidden", "grid");
    }
  });
});

// Fetching Weather Data Code

let inputCity = document.getElementById("inputCity");
const searchBtn = document.getElementById("searchBtn");
let showCity = document.getElementById("showCity");
let flagPic = document.getElementById("flagPic");
let weatherPic = document.getElementById("weatherPic");
let today = document.getElementById("today");
let temperature = document.getElementById("temperature");
let weatherStatus = document.getElementById("weatherStatus");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let showHour = document.getElementById("showHour");
let showMinutes = document.getElementById("showMinutes");
let showDate = document.getElementById("showDate");
let showMonth = document.getElementById("showMonth");
let showYear = document.getElementById("showYear");
let city;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tuersday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May.",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

// Date Code

const showActualDate = () => {
  const time = new Date();
  today.textContent = days[time.getDay()];
  showHour.textContent = time.getHours();
  showMinutes.textContent =
    time.getMinutes() >= 1 && time.getMinutes() <= 9
      ? `0${time.getMinutes()}`
      : time.getMinutes();
  showDate.textContent = time.getDate();
  showMonth.textContent = months[time.getMonth()];
  showYear.textContent = time.getFullYear();
};

body.addEventListener("onLoad", showActualDate());

// Fetching Code

searchBtn.addEventListener("click", () => {
  if (showCity && inputCity) showCity.innerText = inputCity.value.toUpperCase();
  if (inputCity) city = inputCity.value;
  const api_key = "3d5e14ad5de2f372aa12181929a17365";

  showActualDate();

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=en`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cityCode = data.sys.country.toLowerCase();
      if (data && temperature)
        temperature.textContent = `${parseInt(data.main.temp)}°C`;
      if (data && windSpeed)
        windSpeed.textContent = `${parseInt(data.wind.speed)}`;
      if (data && humidity) humidity.textContent = `${data.main.humidity}`;
      if (data && weatherPic) {
        if (data.weather[0].icon === "01d")
          weatherPic.src = "../src/assets/01d.png";
        if (data.weather[0].icon === "01n")
          weatherPic.src = "../src/assets/01n.png";
        if (data.weather[0].icon === "02d")
          weatherPic.src = "../src/assets/02d.png";
        if (data.weather[0].icon === "02n")
          weatherPic.src = "../src/assets/02n.png";
        if (data.weather[0].icon === "03d" && data.weather[0].icon === "03n")
          weatherPic.src = "../src/assets/03.png";
        if (data.weather[0].icon === "04d" && data.weather[0].icon === "04n")
          weatherPic.src = "../src/assets/04.png";
        if (data.weather[0].icon === "09d" && data.weather[0].icon === "09n")
          weatherPic.src = "../src/assets/09.png";
        if (data.weather[0].icon === "10d")
          weatherPic.src = "../src/assets/10d.png";
        if (data.weather[0].icon === "10n")
          weatherPic.src = "../src/assets/10n.png";
        if (data.weather[0].icon === "11d" && data.weather[0].icon === "11n")
          weatherPic.src = "../src/assets/11.png";
        if (data.weather[0].icon === "13d" && data.weather[0].icon === "13n")
          weatherPic.src = "../src/assets/13.png";
        if (data.weather[0].icon === "50d" && data.weather[0].icon === "50n")
          weatherPic.src = "../src/assets/50.png";
      }
      if (data && flagPic)
        flagPic.src = `https://flagicons.lipis.dev/flags/4x3/${cityCode}.svg`;
      weatherStatus.textContent = data.weather[0].main;
    })
    .catch((err) => console.log(err));
});
