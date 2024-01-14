import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
function renderTime(timeInMs, days, hours, minutes, seconds) {
  const timeToFutureDate = convertMs(timeInMs);
    days.textContent = timeToFutureDate.days.toString().padStart(2,"0");
    hours.textContent = timeToFutureDate.hours.toString().padStart(2,"0");
    minutes.textContent = timeToFutureDate.minutes.toString().padStart(2,"0");
    seconds.textContent = timeToFutureDate.seconds.toString().padStart(2,"0");
};
function getError(errorText) {
iziToast.error({
    message: errorText,
    messageColor: "#FFF",
    messageSize: "16px",
    messageLineHeight: "24px",
    position: "topRight",
    transitionIn: "fadeInLeft",
    backgroundColor: "#EF4040",
    title:"Error",
    titleColor:"#FFF",
    titleSize:"16px",
    titleLineHeight: "24px",
    timeout: 5000,
    iconUrl: "./img/error-icon.svg",
    theme: "dark",
});
};
const startButton = document.querySelector(".start-button");
startButton.disabled = true;
const dateInput = document.querySelector("#datetime-picker");
const days = document.querySelector(".value[data-days]");
const hours = document.querySelector(".value[data-hours]");
const minutes = document.querySelector(".value[data-minutes]");
const seconds = document.querySelector(".value[data-seconds]");
let userSelectedDate;
let intervalId = null;

flatpickr("#datetime-picker", {enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (intervalId) {
          getError("Timer already started");
      } else {
        userSelectedDate = selectedDates[0].getTime();
      if (userSelectedDate <= new Date().getTime()) { 
          getError("Please choose a date in the future");
      } else {
          startButton.disabled = false;
          };
        }; }});


startButton.addEventListener("click", () => {
  startButton.disabled = true;
  let timeInMs = userSelectedDate - new Date().getTime();
  renderTime(timeInMs, days, hours, minutes, seconds)
  intervalId = setInterval(() => {
    if (timeInMs > 1000) {
      timeInMs -= 1000;
      renderTime(timeInMs, days, hours, minutes, seconds);
    } else {
      clearInterval(intervalId)
      intervalId = null;
      dateInput.disabled = false;
    }
  }, 1000)
});

