const { body } = document;
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
const width = 500;
const height = 700;
const screenWidth = window.screen.width;
const canvasPosition = screenWidth / 2 - width / 2;
const isMobile = window.matchMedia("(max-width:600px)");
const gameOverEl = document.createElement("div");

const paddleHeight = 10;
const paddleWidth = 50;
const paddleDiff = 25;
let paddleBottomX = 225;
let paddleTopX = 225;
let playerMoved = false;
let paddleContact = false;

let ballX = 250;
let ballY = 350;
const ballRadius = 5;

let speedY;
let speedX;
let trajectoryX;
let computerSpeed;

let playerScore = 0;
let computerScore = 0;
const winningScore = 7;
let isGameOver = true;
let isNewGame = true;

function renderCanvas() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "white";

  //   player paddle (bottom)
  context.fillRect(paddleBottomX, height - 20, paddleWidth, paddleHeight);

  //   second player paddle (top)
  context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight);

  //   dashed center line
  context.beginPath();
  context.setLineDash([5]);
  context.moveTo(0, 350);
  context.lineTo(500, 350);
  context.strokeStyle = "grey";
  context.stroke();
}

function createCanvas() {
  canvas.width = width;
  canvas.height = height;
  body.appendChild(canvas);
  renderCanvas();
}

createCanvas();
