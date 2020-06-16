import inputBoard from "./input";
import Board from "./Board";
import "./scss/style.scss";

const canvas = document.querySelector("#board");
const ballCanvas = document.querySelector('#ball');
const startButton = document.querySelector(".start");

const board = new Board(inputBoard, canvas, ballCanvas);
board.initView();

startButton.addEventListener('click', ()=>{
  startButton.disabled = true;
  board.startBall();
});