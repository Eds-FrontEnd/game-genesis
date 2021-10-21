let order = []; //ordens do jogo para clicar.
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const green = document.querySelector(".verde");
const red = document.querySelector(".vermelho");
const yellow = document.querySelector(".amarelo");
const blue = document.querySelector(".azul");

//Cria forma aleatória de cores
let shufflerOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1); //Traz o número + 1
  }
};

//Acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  }, number - 200);
};

//Checagem dos botões clicados se são os memos da ordem gerada no jogo.
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

//Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");
  setTimeout(() => {
    elementColor(color).classList.remove("selected");
  }, 500);

  checkOrder();
};

//Função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

//Função para próximo nível do jogo
let nextLevel = () => {
  score++;
  shufflerOrder();
};

//Função Game Over

let gameOver = () => {
  alert(
    `Pontuação: ${score}!\n GAME OVER!\nClique em Ok para iniciar um novo jogo.`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

// Iniciando novo jogo
let playGame = () => {
  alert("Bem-vindo ao Gênesis! \n Iniciando novo jogo...");
  score = 0;

  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Start
playGame();
