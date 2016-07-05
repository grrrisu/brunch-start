module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {presets: ['es2015']}
  },

  npm: {
    globals:{
      PIXI: 'phaser/dist/pixi.js',
      p2:   'phaser/dist/p2.js'
    }
  }
};
