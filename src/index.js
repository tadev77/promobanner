const today = new Date();
const tomorrow = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1
);
import { DateTime } from "luxon";

class Promobanner {
  cssClasses = {
    container: "promobanner-container",
    counter: "promobanner-counter",
    days: "promobanner-days",
    hours: "promobanner-hours",
    seconds: "promobanner-seconds",
    warning: "promobanner-warning",
  };

  constructor({
    blacklistPaths = [],
<<<<<<< HEAD
    hideWhen = () => false,
=======
>>>>>>> ce112ef1ffe7b2047e877f4489933590b53ee5dd
    countdownFormatter = (interval) => interval.toFormat('hh:mm:ss'),
    bannerDisplayInterval = {
      init: today,
      end: tomorrow,
    },
    timerDisplayInterval = {
      init: today,
      end: tomorrow,
    },
    cssClasses,
  }) {
    Object.assign(this.cssClasses, cssClasses);
    Object.entries(this.cssClasses).forEach(
      ([k, v]) => (this.cssClasses[k] = `.${v}`)
    );

<<<<<<< HEAD
    if (blacklistPaths.includes(window.location.pathname) || hideWhen()) {
=======
    if (blacklistPaths.includes(window.location.pathname)) {
>>>>>>> ce112ef1ffe7b2047e877f4489933590b53ee5dd
      return;
    }

    if (
      new Date() < bannerDisplayInterval.init ||
      new Date() > bannerDisplayInterval.end
    ) {
      document.querySelector(this.cssClasses.container).remove();
    }

    const initDate = DateTime.fromJSDate(timerDisplayInterval.init);
    const endDate = DateTime.fromJSDate(timerDisplayInterval.end);

    if (DateTime.now() > initDate && DateTime.now() < endDate) {
      this.setCounter(endDate, countdownFormatter);
    }
  }

  setCounter(endDate, countdownFormatter) {
    setInterval(() => {
      const interval = endDate.diffNow([
        "days",
        "hours",
        "minutes",
        "seconds",
      ]);

      const formattedInterval = countdownFormatter(interval);

      document.querySelector(this.cssClasses.counter).innerHTML = formattedInterval;
    }, 1000);
  }
}

window.Promobanner = Promobanner;
