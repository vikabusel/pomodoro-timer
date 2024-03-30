const startBtn = document.querySelector('#start');
const pomodoroTime = document.querySelector('#pomodoro-time');
let timerId = 0;
let minutes = pomodoroTime.textContent.split(":")[0];
let seconds = pomodoroTime.textContent.split(":")[1];

const format = val => {
    if (val < 10) {
        return '0' + val;
    } else {
        return val;
    }
};

startBtn.addEventListener('click', function() {
    if (startBtn.textContent == "stop") {
        clearInterval(timerId);
        startBtn.textContent = "start";
    } else {
        startBtn.textContent = "stop";
        timerId = setInterval(function() {

            if (seconds > 0) {
                seconds --;
                pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`
            } else if (minutes > 0 ) {
                minutes--;
                seconds = 59;
                pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`
            }
            if (seconds <= 0 && minutes <= 0) {
                clearInterval(timerId);
                pomodoroTime.textContent = '25:00';
                startBtn.textContent = 'start';
            }

        }, 100)
    }
})
