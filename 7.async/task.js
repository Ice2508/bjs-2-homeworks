"use strict"

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || typeof callback !== 'function') {
      throw new Error('Параметр времени не передан');
    }
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i]['time'] === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }
    this.alarmCollection.push({
      time: time,
      callback,
      canCall: true
    })

  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(el => el.time !== time);
  }

    getCurrentFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((el) => {
        if (el.time === currentTime && el.canCall) {
          el.canCall = false;
          el.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((el) => el.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}