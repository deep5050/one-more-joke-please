"use strict";
const jokes = require("./jokes.json");

async function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomJoke() {
  randomNumber(0, jokes.length).then((index) => {
      var joke = jokes[index];
      return joke;
  });
}

export default getRandomJoke;
