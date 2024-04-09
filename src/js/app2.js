import { Timer } from "./timer.js";
import { refs } from "./refs.js";

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.startBtn2.addEventListener("click", onStartBtnClick2);

refs.startBtn.disabled = true;
refs.startBtn2.disabled = true;

const timer = new Timer(refs.input, refs.startBtn, refs.display);
const timer2 = new Timer(refs.input2, refs.startBtn2, refs.display2);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      return alert("Please choose a date in the future");
    }
    refs.startBtn.disabled = false;
    timer.userSelectedDate = selectedDates[0];
  },
};

const options2 = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      return alert("Please choose a date in the future");
    }
    refs.startBtn2.disabled = false;
    timer2.userSelectedDate = selectedDates[0];
  },
};

flatpickr(refs.input, options);
flatpickr(refs.input2, options2);

function onStartBtnClick() {
  timer.startTimer();
}

function onStartBtnClick2() {
  timer2.startTimer();
}