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


var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')
var savedCities = []


function fetchData(event){
    event.preventDefault();
    var cityName = inputField.value
    var apiKey = 'df9350967b23dd28552df540966d900e'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey    
    
    fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(weatherData){
            console.log(weatherData)
            console.log(weatherData.weather)


            var row = document.createElement("tr");
            var tDataCity = document.createElement("td");
            var tataTemp = document.createElement ("td");
            var tDataBP = document.createElement("td");

