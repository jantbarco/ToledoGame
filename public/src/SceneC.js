/***************** ESCENE B */
export var SceneC = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function initialize() {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },
    preload: preloadC,
    create: createC,
    update: updateC
});

var infoTiempoC;
var timerC;

function preloadC()
{
    this.load.image('sky', './assets/img/Fondo.jpg');
    this.load.image('logo', './assets/instrucciones/logo.png');
    // this.load.image('texto', './assets/instrucciones/texto.png');
    //this.load.image('productob', './assets/img/bodegon.png');
    
    this.load.audio("audio_cs", "./assets/sound/countdown.wav");
}

function createC()
{
    this.fondo = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    this.fondo.setScale(.5);
    
    this.logo = this.add.image(fondopix, 300, 'logo');
    this.logo.setScale(.15);

    
    infoTiempoC = this.add.text(fondopix - 90, fondopiy - 80, '', { font: 'bold 300px FontFabric', fill: '#ffffff' });    
    timerC = this.time.addEvent({ delay: 3 * 1000, callback: loadingfinish, callbackScope: this });

    var audio_cs = this.sound.add("audio_cs");
    audio_cs.play({
        loop: false
    });
}

function updateC(){    
    infoTiempoC.setText(Math.floor(3 - timerC.getElapsed() / 1000));
}

function loadingfinish() {
    //console.log('Tiempo de cargar escena del juego');
    //game.scene.start('sceneGame');
    this.scene.start('sceneGame');
}