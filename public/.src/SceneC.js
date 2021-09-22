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
    this.load.image('productob', './assets/img/bodegon.png');
    
    this.load.audio("audio_cs", "./assets/sound/countdown1.mp3");
}

function createC()
{
    
    //console.log('Creando sceneC');
    this.add.image(fondopix, fondopiy, 'sky');
    this.add.text(100, 70, '¿Estás listo para \n      vencer a la \n  competencia?', { font: '25px Intro', fill: '#ffffff' });
    this.productos = this.add.image(fondopix, 400, 'productob');
    this.productos.setScale(.8);
    //this.add.image(fondopix, fondopiy + 120, 'barra');

    // textInicio = this.add.text(gw / 4, 200, '', { font: '100px Intro', fill: '#ffffff' });
    // textInicio.setText('Toca la pantalla para iniciar');

    //var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    infoTiempoC = this.add.text(fondopix - 60, fondopiy + 170, '', { font: '200px Intro', fill: '#ffffff' });    
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