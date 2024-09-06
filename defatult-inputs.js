({
	locale: 'pt-br',
	blacklistPaths: [
		'/dont-show-here',
		'/not-here-either',
	],
	hideWhen: () => false,
	countdownFormatter: (interval) => interval.toFormat('hh:mm:ss'),
	countdownUpdate: (formattedInterval, counterEl) => {
      counterEl.innerHTML = formattedInterval;
    },
	bannerDisplayInterval: {
		init: new Date(),
		end: new Date(
			new Date.getFullYear(),
			new Date.getMonth(),
			new Date.getDate() + 1
		),
	},
	timerDisplayInterval: {
		init: new Date(),
		end: new Date(
			new Date.getFullYear(),
			new Date.getMonth(),
			new Date.getDate() + 1
		),	},
	cssClasses: {
		container: 'promobanner-container',
		counter: 'promobanner-counter',
	},
})