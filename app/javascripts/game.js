import Main from 'javascripts/states/main.js';

class Game extends Phaser.Game {

  constructor(width, height) {
    super(width * window.devicePixelRatio, height  * window.devicePixelRatio, Phaser.AUTO);

    this.state.add('Main', Main, false);
    this.state.start('Main');
  }

}

export default Game;
