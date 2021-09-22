/***************** ESCENE B */

var SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },   
    preload: preloadB,
    create: createB
});

function preloadB()
{
    this.load.image('sky', './assets/instrucciones/Fondo-01.png');
    //this.load.image('logo', './assets/instrucciones/logo.png');
    //this.load.image('texto', './assets/instrucciones/texto.png');
    this.load.image('productob', './assets/img/bodegon.png');
    this.load.image('boton', './assets/img/start1.gif');
}

function createB()
{
    console.log('Creando sceneB');
    this.add.image(fondopix, fondopiy, 'sky');
    this.productos = this.add.image(fondopix, fondopiy, 'productob');
    //this.productos.setScale(.8);
    //this.add.image(fondopix, fondopiy + 100, 'texto');
    //this.add.text(170, fondopiy, 'Selecciona todos los productos Nestlé que encuentres \n               en la góndola para ahorrar en grande', { font: '25px Intro', fill: '#ffffff' });

    this.logo = this.add.image(200, 140, 'logo');
    this.logo.setScale(.5);
    this.button =this.add.image(fondopix, fondopiy + 270, 'boton').setInteractive();
    this.button.setScale(.5);
    this.button.on('pointerdown', function(event){
        audio_intro.stop();
        //console.log('Boton iniciar presionado...');
        this.scene.start('sceneC');
      }, this);    
}