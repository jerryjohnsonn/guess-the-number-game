const getSecretNumber = () => Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let secretNumber = getSecretNumber();
const scoreDisplay = document.querySelector('.score');
const modifyDomByClassName = (className, message) => {
	document.querySelector(className).textContent = message;
};

modifyDomByClassName('.number', '?');

document.querySelector('.check').addEventListener('click', () => {
	let guess = Number(document.querySelector('.guess').value);
	if (score > 0) {
		if (!guess) {
			modifyDomByClassName('.message', '💣 No Number!');
		} else if (guess === secretNumber) {
			modifyDomByClassName('.message', '🎉 Correct Number!');
			modifyDomByClassName('.number', secretNumber);
			document.querySelector('body').style.backgroundColor = '#60b347';
			if (highScore < score) {
				highScore = score;
				modifyDomByClassName('.highscore', score);
			}
		} else if (guess !== secretNumber) {
			guess > secretNumber
				? modifyDomByClassName('.message', '📈 Too high!')
				: modifyDomByClassName('.message', '📉 Too low!');
			score--;
			modifyDomByClassName('.score', score);
		}
	} else {
		modifyDomByClassName('.message', '💥 You lose!');
	}
});

document.querySelector('.again').addEventListener('click', () => {
	score = 20;
	secretNumber = getSecretNumber();
	modifyDomByClassName('.number', secretNumber);
	document.querySelector('body').style.backgroundColor = '#222';
	modifyDomByClassName('.message', 'Guess the number');
	modifyDomByClassName('.score', score);
	document.querySelector('.guess').value = '';
	modifyDomByClassName('.number', '?');
});
