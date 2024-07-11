/***************** ESCENE B */
export var SceneLoading = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function initialize() {
        Phaser.Scene.call(this, { key: 'sceneLoading' });
    },
    preload: preloadC,
    create: createC
});

var timerC;

function preloadC()
{
    this.load.image('logo', 'public/assets/img/Logo_Toledo2.png');
    this.load.image('sky', 'public/assets/img/Fondo2.jpg');
}

function createC()
{
    this.add.image(fondopix, fondopiy, 'sky');
    this.logo = this.add.image(fondopix, 300, 'logo');
    
    timerC = this.time.addEvent({ delay: 3 * 1000, callback: loadingfinish, callbackScope: this })
}

function loadingfinish() {
    //console.log('Tiempo de cargar escena del juego');
    //game.scene.start('sceneGame');
    this.scene.start('sceneA');
}