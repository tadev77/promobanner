const today = new Date();
const tomorrow = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1
);
import { DateTime, Settings } from "luxon";

class Promobanner {
  cssClasses = {
    container: "promobanner-container",
    counter: "promobanner-counter",
  };

  constructor({
    locale = "pt-br",
    blacklistPaths = [],
    hideWhen = () => false,
    countdownFormatter = (interval) => interval.toFormat("hh:mm:ss"),
    countdownUpdate = (formattedInterval, counterEl) => {
      counterEl.innerHTML = formattedInterval;
    },
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
    Settings.defaultLocale = locale;
    this.countdownUpdate = countdownUpdate;

    Object.assign(this.cssClasses, cssClasses);
    Object.entries(this.cssClasses).forEach(
      ([k, v]) => (this.cssClasses[k] = `.${v}`)
    );

    if (blacklistPaths.includes(window.location.pathname) || hideWhen()) {
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
      const interval = endDate.diffNow(["days", "hours", "minutes", "seconds"]);

      const formattedInterval = countdownFormatter(interval);
      this.countdownUpdate(
        formattedInterval,
        document.querySelector(this.cssClasses.counter)
      );
    }, 1000);
  }
}

window.Promobanner = Promobanner;
