/***************** ESCENE B */

export var SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },
    init: init,
    preload: preloadB,
    create: createB
});

var user;

function init(data) {
    user = data.user;
}

function preloadB()
{
    this.load.image('instrucciones', 'public/assets/img/instrucciones.png');
    this.load.image('boton', 'public/assets/img/comenzar.png');
}

function createB()
{
    console.log('Creando sceneB');
    this.fondo = this.add.image(fondopix, fondopiy, 'instrucciones');
    
    // this.button =this.add.image(fondopix, fondopiy + 270, 'boton').setInteractive();
    // this.button.setScale(.5);

    /* ---------- AUDIO ------------*/
    var audio_intro = this.sound.add("audio_intro");
    audio_intro.play({
        loop: true
    });
    
    this.fondo.on('pointerdown', function(event){
        audio_intro.stop();
        //console.log('Boton iniciar presionado...');
        this.scene.start('sceneGame');
      }, this);    
    this.fondo.setInteractive();
}