"use strict";

import getCurrentTime from "./clock";
import getDay from "./day";
// import getRandomJoke from './joke';
import "./app.css";
const jokes = require("./jokes.json");
var colors = require("nice-color-palettes");

(function () {
  function setTime() {
    const time = getCurrentTime();

    document.getElementById("clock").innerHTML = time;
  }

  function setDay() {
    const day = getDay();

    document.getElementById("day").innerHTML = day;
  }

  async function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function setRandomBackground() {
    randomNumber(0, colors.length).then((index) => {
      var pallet = colors[index];
      randomNumber(0, pallet.length).then((index) => {
        var color = pallet[index];
        document.body.style.background = color;
      });
    });
  }

  setRandomBackground();

  function getRandomJoke() {
    randomNumber(0, jokes.length).then((index) => {
      var joke = jokes[index];
      document.getElementById("setup").innerHTML = joke.setup;
      document.getElementById("punchline").innerHTML = joke.punchline;
    });
  }

  function setupDashboard() {
    setDay();
    setTime();
    setInterval(setTime, 1000);
  }

  setupDashboard();
  getRandomJoke();
})();
