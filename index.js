function formatDate() {
  let now = new Date();
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
  let date = now.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  return `${hour}:${minutes}<br/> 
${month}${date}<br/>
${day}`;
}
//Calling for format date function
let nows = document.querySelector("#today");
nows.innerHTML = formatDate();
//search box
function showTemprature(response) {
  let tempreture = document.querySelector("#tempreture");
  let t = Math.round(response.data.main.temp);
  tempreture.innerHTML = t;
  let locationhere = document.querySelector("#city-location");
  locationhere.innerHTML = response.data.name;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#seach-text-input");
  let location = document.querySelector("#city-location");
  location.innerHTML = searchInput.value;
  /// call api for temprature
  let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&&units=metric`;
  axios.get(url).then(showTemprature);
}

function showPosition(position) {
  let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  let url = ` https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&&units=metric`;
  axios.get(url).then(showTemprature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let form = document.querySelector("#seach-form");
form.addEventListener("submit", search);

//current location
let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);
