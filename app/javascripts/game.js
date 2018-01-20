import Main from 'javascripts/states/main.js';

class Game extends Phaser.Game {

  constructor(width, height) {
    const config = {
      width: width,
      height: height,
      renderer: Phaser.AUTO,
      resolution: window.devicePixelRatio
    }
    super(config);

    this.state.add('Main', Main, false);
    this.state.start('Main');
  }

}

export default Game;
