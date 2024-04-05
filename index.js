const inputText  = document.getElementById('inp')
const buttonOk = document.getElementById('but')
const containerWeather = document.getElementById('container-weather')


buttonOk.addEventListener('click' ,weather)


async function weather(){
    try{
        const inputValue = inputText.value;
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        const weatherInfo = await response.json()
        const containerBlock = document.createElement('div')
        containerBlock.innerHTML = `
        <p>Місто: ${weatherInfo.name}</p>
        <p>Температура: ${weatherInfo.main.temp}°C</p>
        <p>Тиск: ${weatherInfo.main.pressure}</p>
        <p>Опис: ${weatherInfo.weather[0].description}</p>
        <p>Вологість: ${weatherInfo.main.humidity}</p>
        <p>Швидкість вітру: ${weatherInfo.wind.speed}</p>
        <p>Напрямок вітру: ${weatherInfo.wind.deg}°</p>
        <img src='http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png' alt='Погодний символ'>
        `
        containerWeather.innerHTML = '';
        containerWeather.appendChild(containerBlock)
}
    catch(error){
        console.log(error);
    }
}