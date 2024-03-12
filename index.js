document.addEventListener("DOMContentLoaded", function() {
    const watch = document.getElementsByClassName('time')[0];
    const timer = document.getElementsByClassName('timer')[0]
    const alarmClock = document.getElementsByClassName('alarm-clock')[0]
    let alarmTime;

    function clock() {
        watch.innerHTML = '';
        const time = new Date();
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');

        const timing = hours + ':' + minutes + ':' + seconds;
        const newDiv = document.createElement('div');
        newDiv.textContent = timing;
        watch.appendChild(newDiv);
        if(alarmTime && alarmTime.hour === parseInt(hours) && alarmTime.min === parseInt(minutes) && parseInt(seconds) === 0){
            alert('Просыпайся')
        }
    }

    timer.addEventListener('click', () =>{
        const inputValue = prompt('Введите значение для таймера')
        const divTimer = document.createElement('div')
        timer.appendChild(divTimer)
        let [minTimer, secTimer] = inputValue.split(':').map(value => parseInt(value, 10));
        let timerTime = minTimer * 60 + secTimer;
        const timerInterval = setInterval(() => {
            minTimer = Math.floor(timerTime / 60)
            secTimer = timerTime % 60;
            secTimer = secTimer < 10 ? '0' + secTimer : secTimer;
            divTimer.textContent = `${minTimer}:${secTimer}`;
            if(--timerTime < 0){
                clearInterval(timerInterval);
                divTimer.innerHTML = 'Время вышло!'
            }
        } , 1000);
    })
    const alarBut = document.createElement('button')
    alarBut.classList.add('alarmClockButton')
    alarBut.textContent = 'Поставить будильник'
    alarBut.addEventListener('click' , () =>{
        const alarInput = prompt('Введите время через :')
        const [alarHours, alarSec] = alarInput.split(':')
        alarmTime = {hour: parseInt(alarHours) , min: parseInt(alarSec)}
        alert('Будильник установлен')
    })
    alarmClock.appendChild(alarBut)

    setInterval(clock, 1000);
    clock();
});