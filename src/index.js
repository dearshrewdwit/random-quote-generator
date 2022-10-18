import { colours } from "./colours.js";
import { quotes } from "./quotes.js";

const cardElement = document.querySelector(".card");
const quoteElement = document.querySelector(".quote");
const imageElement = document.querySelector(".image");
const buttonElement = document.querySelector(".button");

// if you change the number of images, update the value for this variable below
const numOfPics = 10;

buttonElement.addEventListener("click", () => {
  changeQuote();
});

function changeQuote() {
  quoteElement.innerHTML = "";
  const quote = randomQuote();

  const textElement = createTextElement(quote);
  const authorElement = createAuthorElement(quote);

  imageElement.style.backgroundImage = randomImageFilePath();
  cardElement.style.backgroundColor = randomColour();

  quoteElement.append(textElement, authorElement);
}

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function createTextElement(quote) {
  const textElement = document.createElement("p");
  textElement.innerText = `"${quote.text}"`;
  return textElement;
}

function createAuthorElement(quote) {
  const authorElement = document.createElement("p");
  authorElement.innerText = quote.author;
  authorElement.classList.add("quote-author");
  return authorElement;
}

function randomImageFilePath() {
  const randomNumber = Math.floor(Math.random() * numOfPics) + 1;
  return `url(./assets/images/pic${randomNumber}.png)`;
}

function randomColour() {
  return `#${colours[Math.floor(Math.random() * colours.length)]}`;
}
