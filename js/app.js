const sliderFill = document.querySelector('.fill');
const timeLeftText = document.querySelector('#time-left');
const timerInputContainer = document.querySelector('.timer-choice');
const timerContainer = document.querySelector('.timer-container');
const body = document.querySelector('body');
const countdownForm = document.querySelector('#countdown-form');
const submitButton = document.querySelector('button');

let countdownAmount = '';
let timeLeft = '';

function toggleTimerVisibility() {
  timerContainer.classList.toggle('hidden');
  timerInputContainer.classList.toggle('hidden');
}

function updateCountdown(e) {
  if (!e.srcElement[0].value) return;
  e.preventDefault();
  countdownAmount = e.srcElement[0].value;
  timeLeft = countdownAmount;
  timeLeftText.textContent = timeLeft;
  startTimer();
}
countdownForm.addEventListener('submit', updateCountdown);

let timerId;

function startTimer() {
  toggleTimerVisibility();
  timerId = setInterval(() => {
    timeLeft--;
    timeLeftText.textContent = timeLeft;
    sliderFill.style.width = (timeLeft / countdownAmount) * 100 + '%';
    if (timeLeft === 0) {
      clearInterval(timerId);
      timeLeftText.textContent = 'COMPLETE!';
      surprise();
    }
  }, 1000);
}

function surprise() {
  const colors = [
    'rgba(255, 105, 97, 0.5)',
    'rgba(97, 168, 255, 0.5)',
    'rgba(247, 255, 97, 0.5)',
    'rgba(97, 255, 184, 0.5)',
    'rgba(255, 255, 255, 0.5)',
  ];
  for (let i = 0; i < 700; i++) {
    setTimeout(() => {
      const diamondElement = document.createElement('div');
      diamondElement.classList.add('diamond');
      diamondElement.style.left = Math.floor(Math.random() * 100) + '%';
      diamondElement.style.top = Math.floor(Math.random() * 100) + '%';
      diamondElement.style.transform =
        'rotate(' + Math.floor(Math.random() * 100) + 'deg)';
      diamondElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      body.append(diamondElement);
      diamondElement.style.width = Math.floor(Math.random() * 15) + 'px';
      diamondElement.style.height = diamondElement.style.width;
    }, i * 5);
  }
}
