const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const countdown = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    changeColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let index = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[index];
    }, 1000);
  },
  stop() {
    clearInterval(changeColors);
    this.isActive = false;
  },
};

refs.btnStart.addEventListener("click", countdown.start.bind(countdown));
refs.btnStop.addEventListener("click", countdown.stop.bind(countdown));