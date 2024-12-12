function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
console.dir(controlsEl);
const boxesEl = document.querySelector('#boxes');
console.dir(boxesEl);

let step = 30;

const createBoxes = amount => {
  step += 10;

  if (amount >= 1 && amount <= 100) {
  }
  return;
};
