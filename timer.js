class CountdownTimer {
  constructor({selector,targetDate}){
    this.timerEl = document.querySelector(selector);
    this.targetDate = targetDate;

    this.daysEl = this.timerEl.querySelector('[data-value="days"]');
    this.hoursEl = this.timerEl.querySelector('[data-value="hours"]');
    this.minsEl = this.timerEl.querySelector('[data-value="mins"]');
    this.secsEl = this.timerEl.querySelector('[data-value="secs"]');
  };

  getTimeRemaining() {
    const time =  Date.parse(this.targetDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
  
    return {
      time,
      days,
      hours,
      mins,
      secs
    }
  }

  render(timeLeft) {
    this.daysEl.textContent = timeLeft.days;
    this.hoursEl.textContent = timeLeft.hours;
    this.minsEl.textContent = timeLeft.mins;
    this.secsEl.textContent = timeLeft.secs;
  }

  start() {
    const timeinterval = setInterval(() => {
      const timeLeft = this.getTimeRemaining();
      this.render(timeLeft);
      if (timeLeft.time <= 0){
        clearInterval(timeinterval);
      }
    }, 1000); 
  }
}


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
}).start();
