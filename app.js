const key = '4ec1048d61ca67c80e2b85f876f3155d'
const url1=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// const url2=`https://api.openweathermap.org/data/2.5/onecall?lat=41.42866&lon=75.99111&lang=ru&units=metric&appid=${key}`
// const url3=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// const url4=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// const url5=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// const url6=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// const url7=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
let $option = document.querySelector('option')
let $desc = document.querySelector('.desc')
let $temp = document.querySelector('.temp')
let $dat = document.querySelector('.tektime')
let $windSpeed = document.querySelector('.windSpeed')
let $probability = document.querySelector('.probability')
let $weatherImg = document.querySelector('.weatherImg')

fetch(url1)
.then(resp => resp.json())
.then(data => {
    console.log(data)
    $dat.textContent = new Date().toLocaleDateString('ru-RU', {day:'2-digit',month:'long'})
    $temp.textContent=`${Math.floor(Number(data.current.temp))}°`
    $desc.textContent = `${data.current.weather[0].description}`
    $windSpeed.textContent = `${Math.ceil(Number(data.current.wind_speed))} км/ч`;
    $probability.textContent = `${data.current.humidity}%`
    $weatherImg.insertAdjacentHTML('beforeend', `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="" />`)

})  
