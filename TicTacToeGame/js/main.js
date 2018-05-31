const body = document.querySelector("Body");
const wrapper = document.querySelector(".wrapper");
const modalWindow = document.querySelector(".modal-window");
const modalContent = document.querySelector(".modal-content");
const fieldContainer = document.querySelector(".field-container");

// ready function to substitute jQuery
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

  return fn;
}

// OLOO
let Widget = {
  init: function(widgetClass, width=50, height=50) {
    this.width = width;
    this.height = height;
    this.elem = null;
    this.class = widgetClass;
  },

  insert: function(where) {
    if(this.elem) {
      this.elem.style.width = this.width + "px";
      this.elem.style.height = this.height + "px";
      this.elem.classList.add(this.class);
      where.appendChild(this.elem);
    }
  }
};

let Button = Object.create(Widget);

Button.setup = function(buttonClass, width, height, label="Default") {
  this.init(buttonClass, width, height);
  this.elem = document.createElement("button");
  this.elem.textContent = label;
};

Button.build = function(where) {
  this.insert(where);
};

let onePlayer = Object.create(Button);
onePlayer.setup( "one-player-btn", 145, 40, "One Player");
onePlayer.build(modalContent);
const onePlayerBtn = document.querySelector(".one-player-btn");

let twoPlayers = Object.create(Button);
twoPlayers.setup( "two-players-btn", 145, 40, "Two Players");
twoPlayers.build(modalContent);
const twoPlayersBtn = document.querySelector(".two-players-btn");

let again = Object.create(Button);
again.setup( "again-btn", 100, 40, "Again");
again.build(wrapper);
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

// two players logic
fieldContainer.addEventListener("mouseup", function(ev) {
  // let's make arrays of classes to manipulate them
  let fieldClassList = Array.from(fieldContainer.classList);
  let targetClassList = Array.from(ev.target.classList);

  // if not empty display proper svg token
  if ( fieldClassList.includes("xIsNext") && !targetClassList.includes("notEmpty") ) {
    ev.target.querySelector(".X").style.display = "block";
    fieldContainer.classList.remove("xIsNext");
    fieldContainer.classList.add("oIsNext");
    ev.target.classList.add("notEmpty");
  } else if ( fieldClassList.includes("oIsNext") && !targetClassList.includes("notEmpty") ) {
    ev.target.querySelector(".O").style.display = "block";
    fieldContainer.classList.remove("oIsNext");
    fieldContainer.classList.add("xIsNext");
    ev.target.classList.add("notEmpty");
  }
});

// again
againBtn.onclick = function() {
  location.reload();
};
