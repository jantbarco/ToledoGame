/***************** ESCENE B */
var SceneC = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },   
    preload: preloadC,
    create: createC,
    update: updateC
});

function preloadC()
{
    this.load.image('sky', './assets/inicio/Fondo-01.png');
    // this.load.image('logo', './assets/instrucciones/logo.png');
    // this.load.image('texto', './assets/instrucciones/texto.png');
    this.load.image('productob', './assets/instrucciones/productos.png');
    this.load.image('barra', './assets/instrucciones/barra.png');
    // this.load.image('red', './assets/blue.png');
    
    this.load.audio("audio_cs", "./assets/Countdown-start.mp3");
}

function createC()
{
    //console.log('Creando sceneC');
    this.add.image(fondopix, fondopiy, 'sky');
    this.add.image(fondopix, fondopiy, 'productob');    
    //this.add.image(fondopix, fondopiy + 120, 'barra');

    // textInicio = this.add.text(gw / 4, 200, '', { font: '100px Gotham', fill: '#ffffff' });
    // textInicio.setText('Toca la pantalla para iniciar');

    var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    infoTiempoC = this.add.text(fondopix - 30, fondopiy - 300, '', { font: '200px Gotham', fill: '#ffffff' });    
    timerC = this.time.addEvent({ delay: 3 * 1000, callback: loadingfinish, callbackScope: this });

    audio_cs = this.sound.add("audio_cs");
    audio_cs.play({
        loop: false
    });
}

function updateC(){    
    infoTiempoC.setText(Math.floor(3 - timerC.getElapsed() / 1000));
}

function loadingfinish(){
    //console.log('Tiempo de cargar escena del juego');
    //game.scene.start('sceneGame');
    this.scene.start('sceneGame');
}