const body = document.querySelector("Body");
const moduleContent = document.querySelector(".module-content");

//rdy function to substitute jQuery
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// OLOO
let Widget = {
  init: function(width=50, height=50) {
    this.width = width;
    this.heigth = height;
    this.elem = null;
  },

  insert: function(where) {
    if(this.elem) {
      this.elem.style.width = this.width + "px";
      this.elem.style.height = this.height + "px";
      where.appendChild(this.elem);
    }
  }
};

let Button = Object.create(Widget);

Button.setup = function(width, height, label="Default") {
  this.init(width, height);
  this.elem = document.createElement("button");
  this.elem.textContent = label;
};

Button.build = function(where) {
  this.insert(where);
};

ready( function() {
  let onePlayerBtn = Object.create(Button);
  onePlayerBtn.setup( 125, 30, "One Player");
  onePlayerBtn.build(moduleContent);

  let twoPlayersBtn = Object.create(Button);
  twoPlayersBtn.setup( 125, 30, "Two Players");
  twoPlayersBtn.build(moduleContent);
});
