const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");

// getting colours

let leftColour = leftInput.value;
let rightColour = rightInput.value;

const backgroundColour = () => {
  const cssString = `linear-gradient(to right, ${leftColour},${rightColour})`;
  body.style.background = cssString;

  cssOutput.textContent = `Background:${cssString};`;
};

// adding events on inputs

leftInput.addEventListener("change", (event) => {
  leftColour = event.target.value;
  backgroundColour();
});

rightInput.addEventListener("change", (event) => {
  rightColour = event.target.value;
  backgroundColour();
});

//generating random colours

//select button

const button = document.querySelector(".button");

const randomColour = () => {
  const values = "0123456789abcedf";

  let colour = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * 100) % 16);
    colour += values[randomIndex];
  }
  return colour;
};

button.addEventListener("click", () => {
  leftColour = randomColour();
  rightColour = randomColour();

  leftInput.value = leftColour;
  rightInput.value = rightColour;
  backgroundColour();
});
