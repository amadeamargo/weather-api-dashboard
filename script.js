/*
user searches for city in input box
user clicks on search button to invoke function to make API call
returns with name of city, the current date + the next 5 days
returns: temp, wind, humidity, UV index with color indicating UV index

returns: 5 day forecast
- using moment js
temp, wind, and humidity


use local storage to save previously searched cities below the city search section. 

*/

const body = document.body
var inputField = document.querySelector('#city')
var button = document.querySelector('#search-btn')
var savedCities = []
var cityContianer = document.querySelector('.container')
var currentCityName = document.querySelector("#current-city-name")
var currentCityContainer = document.createElement("div")

currentCityName.text = inputField.value


// var currentDay = document.querySelector("#currentDay");
// var today = moment().format("LLLL");
// currentDay.text(today)




function fetchData(event) {
    event.preventDefault();
    var cityName = inputField.value;
    var apiKey = "df9350967b23dd28552df540966d900e";
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
            console.log("Temp: "+ weatherData.main.temp)
            console.log("Wind: " + weatherData.wind.speed + " MPH")
            console.log("Humidity: " + weatherData.main.humidity)
            console.log(moment().format("LLLL"))
            
            cityContianer.append(cityName);
            cityContianer.append("Temp: "+ weatherData.main.temp)
            cityContianer.append("Wind: " + weatherData.wind.speed + " MPH");
            cityContianer.append("Humidity: " + weatherData.main.humidity);
            cityContianer.append(moment().format("LLLL"))

        })
    }

button.addEventListener("click", fetchData)

var currentCity = document.querySelector('#current-city-name')



