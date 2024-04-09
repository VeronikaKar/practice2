export class Timer {
    constructor(input, btn, display) {
        this.input = input,
            this.btn = btn,
            this.diplay = display;
        this.userSelectedDate = null;
    }
 convertMs(ms) {
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
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
startTimer(){
    const intervalId = setInterval(() => {
        const now = Date.now();
        const diff = this.userSelectedDate - now;

        if (diff <= 0) {
            clearInterval(intervalId);
            alert('Congratulation');
            this.input.disabled = false;
        }
        this.updateTimer(diff);
        this.btn.disabled = true;
        this.input.disabled = true;
    }, 1000);
}
updateTimer(ms){
    const { days, hours, minutes, seconds } = this.convertMs(ms);
    this.display.querySelector('[data-days]').textContent = this.addZero.days;
    this.display.querySelector('[data-hours]').textContent = this.addZero.hours;
    this.display.querySelector('[data-minutes]').textContent = this.addZero.minutes;
    this.display.querySelector('[data-seconds]').textContent = this.addZero.seconds;

}
addZero(value){
    return String(value).padStart(2, "0");
}

}

