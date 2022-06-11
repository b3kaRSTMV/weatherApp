// const key = '4ec1048d61ca67c80e2b85f876f3155d'
// const url1=`https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&lang=ru&units=metric&appid=${key}`
// let $dat = document.querySelector('.rightBlock')
// let $el2 = document.querySelector('.el1')
// let $el3 = document.querySelector('.el2')
// let $el4 = document.querySelector('.el3')
// let $el5 = document.querySelector('.el4')
// let $el6 = document.querySelector('.el5')
// let $daily = document.querySelector('.daily')

// let $hours=[
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     '11',
//     '12',
//     '13',
//     '14',
//     '15',
//     '16',
//     '17',
//     '18',
//     '19',
//     '20',
//     '21',
//     '22',
//     '23',
//     '24',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     '11',
//     '12',
//     '13',
//     '14',
//     '15',
//     '16',
//     '17',
//     '18',
//     '19',
//     '20',
//     '21',
//     '22',
//     '23',
//     '24',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     '11',
//     '12',
//     '13',
//     '14',
//     '15',
//     '16',
//     '17',
//     '18',
//     '19',
//     '20',
//     '21',
//     '22',
//     '23',
//     '24',
// ]


// fetch(url1)
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
//     $dat.textContent = new Date().toLocaleDateString('ru-RU', {day:'2-digit',month:'long'});
//     let $listOfHours = document.querySelector('.listOfHours')
//     data.hourly.forEach((element, i) => {
//     $listOfHours.insertAdjacentHTML('beforeend',`
//     <div class='day'>
//     <p>${Math.floor(Number(element.temp))}°C<p>
//     <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
//     <p>${$hours[new Date().getHours() + i]}.00</p>
//     <div>
//     `)
// });
//     data.daily.forEach((element, i)=>{
//     $daily.insertAdjacentHTML('beforeend',`
//     <div class = 'weekDays'>
//     <p>${new Date(element.dt * 1000).toLocaleDateString('ru-ru', {weekday: 'short'})}</p>
//     <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
//     <p>${Math.floor(Number(element.temp.day))}°</p.
//     </div>
//     `)
// })
// })




// let $btn = document.querySelector('#push');
// let $info = document.querySelector('.page1');
// let $week = document.querySelector('.page2');
// let $btn2 = document.querySelector('#back')
// $btn.addEventListener('click', function(){
//     $info.style.display = 'none'
//     $week.style.display = 'block'
// })
// $btn2.addEventListener('click', function(){
//     $info.style.display = 'block'
//     $week.style.display = 'none'
// })