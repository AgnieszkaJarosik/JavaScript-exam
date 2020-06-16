import './scss/style.scss';
import input from "./input";
import Game from "./Game";

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const canvas = document.querySelector('.board');

const game = new Game(input, canvas);
game.draw();

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  game.playGame();
});

stopButton.addEventListener('click', ()=>{
  startButton.disabled = false;
  game.stopGame();
})
