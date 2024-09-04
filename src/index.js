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
    millis: "promobanner-millis",
    warning: "promobanner-warning",
  };

  constructor(
    blacklistPaths = [],
    displayFormat = "{Dx} {h}:{m}:{s}",
    bannerDisplayInterval = {
      init: today,
      end: tomorrow,
    },
    timerDisplayInterval = {
      init: new Date(),
      end: tomorrow,
    },
    cssClasses,
    warningBreakpoint = 86400,
    warningFormat = "{h}:{m}:{s}:{l}"
  ) {
    Object.assign(this.cssClasses, cssClasses);
    Object.entries(this.cssClasses).forEach(
      ([k, v]) => (this.cssClasses[k] = `.${v}`)
    );

    this.displayFormat = displayFormat;
    this.bannerDisplayInterval = bannerDisplayInterval;
    this.timerDisplayInterval = timerDisplayInterval;
    this.warningFormat = warningFormat;
    this.warningBreakpoint = warningBreakpoint;

    if (blacklistPaths.includes(window.location.pathname)) {
      return;
    }

    if (
      new Date() < this.bannerDisplayInterval.init ||
      new Date() > this.bannerDisplayInterval.end
    ) {
      document.querySelector(this.cssClasses.container).remove();
    }

    this.setCounter();
  }

  setCounter() {
    const counterEl = document.querySelector(this.cssClasses.counter);
    counterEl.innerHTML = "1 dia 13:09:10";
    const endDate = DateTime.fromJSDate(this.timerDisplayInterval.end);

    setInterval(() => {
      let interval = endDate.diffNow([
        "days",
        "hours",
        "minutes",
        "seconds",
      ]).toFormat('d h:m:s');
      document.querySelector(this.cssClasses.counter).innerHTML = interval;
    }, 1000);
  }
}

window.Promobanner = Promobanner;
