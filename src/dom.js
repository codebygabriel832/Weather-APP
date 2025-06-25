import { getData } from "./api";
import { getDate, tempConversion } from "./utils";

export const screenController = () => {
  createUiElements();
  const searchBar = document.querySelector("#searchBar");
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temperature");
  const condition = document.querySelector("#condition");
  const date = document.querySelector("#date");
  const humidty = document.querySelector("#humidity");
  const windspeed = document.querySelector("#windspeed");
  const precipatate = document.querySelector("#precipitate");
  let currentLocation;
  async function displayData(currentLocation) {
    const Object = await getData(currentLocation);
    location.textContent = Object.address;
    temperature.textContent = `${tempConversion(Object.temperature)}°C`;
    condition.textContent = Object.condition;
    humidty.textContent = `${Object.humidity}g/m³`;
    windspeed.textContent = `${Object.windspeed}km/h`;
    precipatate.textContent = `${Object.precipatate}kg/m²`;

    date.textContent = getDate();
  }
  displayData("Nairobi");
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      currentLocation = searchBar.value;
      searchBar.value = "";
      displayData(currentLocation);
    }
  });
};
const createUiElements = () => {
  const contentDiv = document.querySelector("#content");
  const header = document.querySelector("header");
  const searchBar = document.createElement("input");
  const locationDiv = document.createElement("div");
  const conditionDiv = document.createElement("div");
  const temperatureDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const windDiv = document.createElement("div");
  const precipitateDiv = document.createElement("div");

  const humidity = document.createElement("h1");
  const windspeed = document.createElement("h1");
  const precipatation = document.createElement("h1");

  const locationValue = document.createElement("p");
  const conditionValue = document.createElement("p");
  const dateValue = document.createElement("p");
  const temperatureValue = document.createElement("p");
  const windspeedValue = document.createElement("p");
  const humidityValue = document.createElement("p");
  const precipatationValue = document.createElement("p");

  locationDiv.classList.add("locationDiv");
  conditionDiv.classList.add("conditionDiv");
  temperatureDiv.classList.add("temperatureDiv");
  dateDiv.classList.add("dateDiv");
  humidityDiv.classList.add("humidityDiv");
  windDiv.classList.add("windDiv");
  precipitateDiv.classList.add("precipitateDiv");

  searchBar.id = "searchBar";
  locationValue.id = "location";
  conditionValue.id = "condition";
  dateValue.id = "date";
  temperatureValue.id = "temperature";
  windspeedValue.id = "windspeed";
  humidityValue.id = "humidity";
  precipatationValue.id = "precipitate";
  searchBar.placeholder = "Enter a location";

  humidity.textContent = "Humidity";
  windspeed.textContent = "Wind";
  precipatation.textContent = "Precipitation";

  header.appendChild(searchBar);
  locationDiv.appendChild(locationValue);
  conditionDiv.appendChild(conditionValue);
  temperatureDiv.append(temperatureValue);
  dateDiv.appendChild(dateValue);
  humidityDiv.append(humidity, humidityValue);
  windDiv.append(windspeed, windspeedValue);
  precipitateDiv.append(precipatation, precipatationValue);
  contentDiv.appendChild(locationDiv);
  contentDiv.appendChild(temperatureDiv);
  contentDiv.appendChild(conditionDiv);
  contentDiv.appendChild(dateDiv);
  contentDiv.appendChild(humidityDiv);
  contentDiv.appendChild(windDiv);
  contentDiv.appendChild(precipitateDiv);
};
