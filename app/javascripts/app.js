"use strict";

import Game from 'javascripts/game.js';

var App = {
  init: function() {
    let appName = "brunch-starter";
    console.log(`${appName} initialized.`);
  },

  game: function() {
    //new Game(window.innerWidth, window.innerHeight);
    new Game(800, 600);
  }

};

module.exports = App;
