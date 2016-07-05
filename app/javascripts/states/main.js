class Main extends Phaser.State {

  preload() {
    this.game.load.image('logo', '/images/phaser.png');
  }

  create() {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

  update() {

  }

}

export default Main;
