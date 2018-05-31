"use strict";

const body = document.querySelector("Body");
const wrapper = document.querySelector(".wrapper");
const modalWindow = document.querySelector(".modal-window");
const modalContent = document.querySelector(".modal-content");
const scoreTableX = document.querySelector(".score-table .score-x");
const scoreTableO = document.querySelector(".score-table .score-o");
const fieldContainer = document.querySelector(".field-container");
const blocks = document.querySelectorAll(".field-container .block");
const Xsvgs = document.querySelectorAll(".block .X");
const Osvgs = document.querySelectorAll(".block .O");
const nav = document.querySelector(".nav");
const resultsModule = document.querySelector(".results-module");
let X_score = 0;
let O_score = 0;

// OLOO
let Widget = {
  init: function(widgetClass, width = 50, height = 50) {
    this.width = width;
    this.height = height;
    this.elem = null;
    this.class = widgetClass;
  },

  insert: function(where) {
    if (this.elem) {
      this.elem.style.width = this.width + "px";
      this.elem.style.height = this.height + "px";
      this.elem.classList.add(this.class);
      where.appendChild(this.elem);
    }
  }
};

let Button = Object.create(Widget);

Button.setup = function(buttonClass, width, height, label = "Default") {
  this.init(buttonClass, width, height);
  this.elem = document.createElement("button");
  this.elem.textContent = label;
};

Button.build = function(where) {
  this.insert(where);
};

let onePlayer = Object.create(Button);
onePlayer.setup("one-player-btn", 145, 40, "One Player");
onePlayer.build(modalContent);
const onePlayerBtn = document.querySelector(".one-player-btn");

let twoPlayers = Object.create(Button);
twoPlayers.setup("two-players-btn", 145, 40, "Two Players");
twoPlayers.build(modalContent);
const twoPlayersBtn = document.querySelector(".two-players-btn");

let menu = Object.create(Button);
menu.setup("toMenu-btn", 145, 40, "Back to Menu");
menu.build(nav);
const toMenuBtn = document.querySelector(".toMenu-btn");

let again = Object.create(Button);
again.setup("again-btn", 145, 40, "Next Game");
again.build(nav);
const againBtn = document.querySelector(".again-btn");

setTimeout(openModal, 500);

// modal window
function openModal() {
  modalWindow.style.width = "100%";
}

function closeModal() {
  modalWindow.style.width = "0%";
}

twoPlayersBtn.onclick = function() {
  closeModal();
  modalContent.style.display = "none";
};

function currentBoard() {
  let arr = [];
  for (let block of blocks) {
    arr.push(block.dataset.token);
  }

  function checkWinner(n) {
    if ( (arr[0] == n && arr[1] == n && arr[2] == n) || (arr[3] == n && arr[4] == n && arr[5] == n) || (arr[6] == n && arr[7] == n && arr[8] == n) || (arr[0] == n && arr[3] == n && arr[6] == n) || (arr[1] == n && arr[4] == n && arr[7] == n) || (arr[2] == n && arr[5] == n && arr[8] == n) || (arr[0] == n && arr[4] == n && arr[8] == n) || (arr[2] == n && arr[4] == n && arr[6] == n) ) {
      if (n == "X") {
        X_score += 1;
        scoreTableX.textContent = `X : ${X_score}`;
      } else {
        O_score += 1;
        scoreTableO.textContent = `O : ${O_score}`;
      }
      resultsModule.style.display = "block";
      resultsModule.textContent = `${n} has won`;
      fieldContainer.removeEventListener("mouseup", drawToken);
      setTimeout(function() {resultsModule.style.display = "none";}, 1500);
      // return is to prevent double result, when n = "o" and "x" won or it is a draw
      return "done";
    } else if (!arr.includes("none")) {
      resultsModule.style.display = "block";
      resultsModule.textContent = "It is a draw";
      setTimeout(function() {resultsModule.style.display = "none";}, 1500);
      return "done";
    }
  }

  if( checkWinner("X") == "done") {
    return;
  } else checkWinner("O");
}

// two players logic
function drawToken(ev) {

  // if not empty display proper svg token
  if (fieldContainer.classList.contains("xIsNext") && !ev.target.classList.contains("notEmpty")) {
    ev.target.querySelector(".X").style.display = "block";
    fieldContainer.classList.remove("xIsNext");
    fieldContainer.classList.add("oIsNext");
    ev.target.classList.add("notEmpty");
    ev.target.dataset.token = ("X");
  } else if (fieldContainer.classList.contains("oIsNext") && !ev.target.classList.contains("notEmpty")) {
    ev.target.querySelector(".O").style.display = "block";
    fieldContainer.classList.remove("oIsNext");
    fieldContainer.classList.add("xIsNext");
    ev.target.classList.add("notEmpty");
    ev.target.dataset.token = ("O");
  }
  // board's state
  currentBoard();
}

fieldContainer.addEventListener("mouseup", drawToken);

// nav buttons
function clearField() {
  for (let X of Xsvgs) {
    X.style.display = "none";
  }

  for (let O of Osvgs) {
    O.style.display = "none";
  }
  for (let block of blocks) {
    block.dataset.token = "none";
    if ( block.classList.contains("notEmpty") ) {
      block.classList.remove("notEmpty");
    }
  }

  if ( fieldContainer.classList.contains("oIsNext") ) {
    fieldContainer.classList.remove("oIsNext");
    fieldContainer.classList.add("xIsNext");
  }

  fieldContainer.addEventListener("mouseup", drawToken);
}

againBtn.onclick = function() {
  clearField();
  resultsModule.style.display = "none";
};

toMenuBtn.onclick = function() {
  clearField();
  resultsModule.style.display = "none";
  openModal();
  modalContent.style.display = "block";
  X_score = 0;
  scoreTableX.textContent = `X : ${X_score}`;
  O_score = 0;
  scoreTableX.textContent = `O : ${O_score}`;
};
