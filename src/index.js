export default class Promobanner {

  cssClasses = {
    container: 'promobanner-container',
    counter: 'promobanner-counter',
    days: 'promobanner-days',
    hours: 'promobanner-hours',
    seconds: 'promobanner-seconds',
    millis: 'promobanner-millis',
    warning: 'promobanner-warning',
  };

  constructor(
    blacklistPaths = [],
    displayFormat = '{Dx} {h}:{m}:{s}',
    bannerDisplayInterval = {
      init: new Date(),
      end: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1),
    },
    timerDisplayInterval = {
      init: new Date(),
      end: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1),
    },
    cssClasses,
    warningBreakpoint = 86400,
	  warningFormat = '{h}:{m}:{s}:{l}',
  ) {

    Object.assign(this.cssClasses, cssClasses);
  }
};