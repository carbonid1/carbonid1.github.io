const mainMenu = document.getElementById("mainMenu");

const myWindow = document.getElementById("myWindow");
const authorName = document.getElementById("authorName");
const quoteText = document.getElementById("quoteText");
const mainMenuBtn = document.getElementById("mainMenuBtn");
const getQuoteBtn = document.getElementById("getQuoteBtn");
const tweetQuote = document.getElementById("tweetQuote");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");


function appendName(name) {
  authorName.textContent = name;
}

function appendQuote(quote) {
  quoteText.textContent = quote;
}

function randomInteger(max) {
  const rand = Math.random() * (max + 1);
  return Math.floor(rand);
}

function fadeIn(el) {
  el.style.opacity = 0;

  let last = +new Date();
  const tick = () => {
    el.style.opacity = +el.style.opacity + ((new Date() - last) / 400);
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function setTweet() {
  tweetQuote.setAttribute("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(quoteText.textContent) + " " + encodeURIComponent(authorName.textContent));
}

mainMenuBtn.addEventListener("click", () => {
  mainMenu.style.display = "block";
  myWindow.style.display = "none";
});

getQuoteBtn.addEventListener("click", () => {
  let name = authorName.textContent;
  const arr = citesObj[name];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  fadeIn(quoteText);
  setTweet();
});

// ---------MENU EVENT LISTENER
one.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Steve Jobs");
  const arr = citesObj["Steve Jobs"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});

two.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Abraham Lincoln");
  const arr = citesObj["Abraham Lincoln"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});

three.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Bruce Lee");
  const arr = citesObj["Bruce Lee"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});

four.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Friedrich Nietzsche");
  const arr = citesObj["Friedrich Nietzsche"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});

five.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("Mahatma Gandhi");
  const arr = citesObj["Mahatma Gandhi"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});

six.addEventListener("click", () => {
  mainMenu.style.display = "none";
  myWindow.style.display = "flex";
  appendName("John Kennedy");
  const arr = citesObj["John Kennedy"];
  appendQuote(arr[randomInteger(arr.length - 1)]);
  setTweet();
});
// ---------/MENU EVENT LISTENER

