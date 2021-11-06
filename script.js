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
var searchedCityName = document.querySelector("#searched-city-name")
var currentDay = document.querySelector("#currentDay")
var searchedCityTemp = document.querySelector("#searched-city-temp")
var searchedCityWind = document.querySelector("#searched-city-wind")
var searchedCityHumidity = document.querySelector("#searched-city-humidity")
var today = moment().format("l")

var currentCityContainer = document.querySelector("#current-city")




searchedCityName.text = inputField.value

function fetchData(event) {
    event.preventDefault();
    var cityName = inputField.value;
    var apiKey = "df9350967b23dd28552df540966d900e";
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
            console.log("Temp: "+ weatherData.list[0].main.temp)
            console.log("Wind: " + weatherData.list[0].wind.speed + " MPH")
            console.log("Humidity: " + weatherData.list[0].main.humidity)
            console.log(moment().format("LLLL"))
            
           //today
            var cityTempFarenheit = (weatherData.list[0].main.temp - 273.15) * 9/5 + 32
            console.log(cityTempFarenheit)
            var cityTemp = "Temp: "+ cityTempFarenheit.toFixed(0) + "°"
            var cityWind = "Wind: " + weatherData.list[0].wind.speed + " MPH"
            var cityHumidity = "Humidity: " + weatherData.list[0].main.humidity

            searchedCityName.append(cityName + " " + today);
            searchedCityTemp.append(cityTemp)
            searchedCityWind.append(cityWind);
            searchedCityHumidity.append(cityHumidity + "%");
            
            //1day
            var oneDay = document.querySelector("#one-day-date")
            var oneDayTemp = document.querySelector("#one-day-temp")
            var oneDayWind = document.querySelector("#one-day-wind")
            var oneDayHumidity = document.querySelector("#one-day-humidity")
         
            oneDay.append(moment().add(1, 'days').format("l"))
            oneDayTemp.append("Temp: " + ((weatherData.list[1].main.temp - 273.15) * 9/5 + 32).toFixed(0) + "°")
            oneDayWind.append("Wind: " + weatherData.list[1].wind.speed + " MPH")
            oneDayHumidity.append("Humidity: " + weatherData.list[1].main.humidity + "%")
            //2day
            var twoDay = document.querySelector("#two-day-date")
            var twoDayTemp = document.querySelector("#two-day-temp")
            var twoDayWind = document.querySelector("#two-day-wind")
            var twoDayHumidity = document.querySelector("#two-day-humidity")
            
            twoDay.append(moment().add(2, 'days').format("l"))
            twoDayTemp.append("Temp: " + ((weatherData.list[2].main.temp - 273.15) * 9/5 + 32).toFixed(0) + "°")
            twoDayWind.append("Wind: " + weatherData.list[2].wind.speed + " mph")
            twoDayHumidity.append("Humidity: " + weatherData.list[2].main.humidity + "%")
            //3day
            var threeDay = document.querySelector("#three-day-date")
            var threeDayTemp = document.querySelector("#three-day-temp")
            var threeDayWind = document.querySelector("#three-day-wind")
            var threeDayHumidity = document.querySelector("#three-day-humidity")
           
            threeDay.append(moment().add(3, 'days').format("l"))
            threeDayTemp.append("Temp: " + ((weatherData.list[3].main.temp - 273.15) * 9/5 + 32).toFixed(0) + "°")
            threeDayWind.append("Wind: " + weatherData.list[3].wind.speed + " mph")
            threeDayHumidity.append("Humidity: " + weatherData.list[3].main.humidity + "%")
            //4day
            var fourDay = document.querySelector("#four-day-date")
            var fourDayTemp = document.querySelector("#four-day-temp")
            var fourDayWind = document.querySelector("#four-day-wind")
            var fourDayHumidity = document.querySelector("#four-day-humidity")
     
            fourDay.append(moment().add(4, 'days').format("l"))
            fourDayTemp.append("Temp: " + ((weatherData.list[4].main.temp - 273.15) * 9/5 + 32).toFixed(0) + "°")
            fourDayWind.append("Wind: " + weatherData.list[4].wind.speed + " mph")
            fourDayHumidity.append("Humidity: " + weatherData.list[4].main.humidity + "%")
            //5day
            var fiveDay = document.querySelector("#five-day-date")
            var fiveDayTemp = document.querySelector("#five-day-temp")
            var fiveDayWind = document.querySelector("#five-day-wind")
            var fiveDayHumidity = document.querySelector("#five-day-humidity")
            
            fiveDay.append(moment().add(4, 'days').format("l"))
            fiveDayTemp.append("Temp: " + ((weatherData.list[5].main.temp - 273.15) * 9/5 + 32).toFixed(0) + "°")
            fiveDayWind.append("Wind: " + weatherData.list[5].wind.speed + " mph")
            fiveDayHumidity.append("Humidity: " + weatherData.list[5].main.humidity + "%")
        })
    }

button.addEventListener("click", fetchData)

var currentCity = document.querySelector('#current-city-name')



