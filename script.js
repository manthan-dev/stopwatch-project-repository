/**
 * we have created simple stopwatch interface with Start, Stop
 * and Rest Buttons using JavaScript setInterval to control
 * timer's functionallity and updates the timer.
 * Manipulated using DOM to display the stopwatch elements.
 */


/**
 * we will retreive contianer element from HTML and manipulate
 * it using DOM.
 */
const bodyContainer = document.getElementById('container');

// Stop watch container
const stopWatchContainer = document.createElement('div');
stopWatchContainer.classList.add('stop-watch-container');
bodyContainer.append(stopWatchContainer);


/**
 * Creating a Timer Display
 * we are displaying and manipulating hourly stopwatch time here.
 */
const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');
timerContainer.textContent = `00:00`;
stopWatchContainer.append(timerContainer);


/**
 * Creating START, STOP and RESET Buttons
 */
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
stopWatchContainer.appendChild(buttonContainer);
// stopWatchContainer.textContent = `Time`;


const startBtn = document.createElement('button');
startBtn.classList.add('btn', 'start-btn');
startBtn.textContent = 'Start';

const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop-btn');
stopBtn.textContent = 'Stop';

const resetBtn = document.createElement('button');
resetBtn.classList.add('btn', 'reset-btn');
resetBtn.textContent = 'Reset';

buttonContainer.append(startBtn, stopBtn, resetBtn);


/**
 * here we will use Timer logic to display time for 
 * seconds, minutes and hours.
 */
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;



/**
 * START BUTTON EVENT LISTENER
 * after clicking on StartBtn timer will start then display
 * using timerContainer.
 */
startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        seconds++;
        if (seconds % 60 === 0) {
            minutes++;
            seconds = 0;
        }
        // timerContainer.textContent = `${ seconds } `;
        timerContainer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} `;
    }, 1000);
});


/**
 * STOP BUTTON EVENT LISTENER
 * when we click on stopBtn it will stop timer and clearing
 * the timer which is already running.
 */
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timerContainer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} `;
});


/**
 * RESET BUTTON EVENT LISTENER
 * 
 */
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    timerContainer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} `;
});