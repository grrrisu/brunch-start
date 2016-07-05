"use strict";

var Phaser = require('phaser');

var App = {
  init: function() {
    let appName = "brunch-starter";
    console.log(`${appName} initialized.`);
  },

  game: function() {
    new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: function() {},
      create: function() {},
      update: function() {}
    });
  }


};

module.exports = App;
