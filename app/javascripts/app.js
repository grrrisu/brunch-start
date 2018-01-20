"use strict";

import Game from 'javascripts/game.js';

const App = {

  init: function() {
    let appName = "brunch-starter";
    console.log(`${appName} initialized.`);
    return new Game(800, 600);
  }

};

module.exports = App;
