/***************** ESCENE D */
var SceneD = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneD' });
    },   
    preload: preloadD,
    create: createD,
    update: updateD
});

function preloadD()
{
    this.load.image('sky', './assets/inicio/Fondo-01.png');
    this.load.image('contador', './assets/fin/contador.png');
    this.load.image('botonFin', './assets/fin/boton.png');
    this.load.image('picapica', './assets/fin/picapica.png');
    this.load.image('tigre', './assets/img/tigre.gif');
    this.load.image('mish', './assets/img/mish.gif');

    this.load.audio("audio_fin", "./assets/fin.mp3");
    this.load.audio("audio_gameover", "./assets/gameover.mp3");
}

function createD()
{
    this.add.image(fondopix, fondopiy, 'sky');
    picapica = this.add.image(fondopix, 0, 'picapica');
    //this.add.image(fondopix, fondopiy + 400, 'boton');

    audio_fin = this.sound.add("audio_fin");
    //audio_fin1 = this.sound.add("audio_fin1");
    gameover = this.sound.add("audio_gameover");

    this.add.text(gw / 2 - 200, 100, 'Derribaste', { font: '30px Gotham', fill: '#ffffff' });
    this.add.text(gw / 2 - 130, 150, productos, { font: '70px Gotham', fill: '#1b1464' });
    this.add.text(gw / 2 - 200, 250, 'productos de la competencia', { font: '20px Gotham', fill: '#ffffff' });

    var textoFin = '';

    if (productos >= meta   ){  
        picapica.setVisible(true);      
        audio_fin.play({
            loop: false
        });
        //this.add.image(fondopix, 200, 'trigre');
        textoFin = '¡GANASTE! \n    Llegaste al nivel Tigre Rojo';
    }
    else {
        
        picapica.setVisible(false);
        gameover.play({
            loop: false
        });
        //this.add.image(fondopix, 200, 'mish');
        textoFin = ' GRACIAS POR PARTICIPAR \n   Estas en nivel Mishito';        
    }

    this.add.text(200, 375, textoFin, { font: '40px Gotham', fill: '#ffffff' });
    this.buttonFin = this.add.image(fondopix, fondopiy + 200, 'botonFin').setInteractive();
    
    this.buttonFin.on('pointerdown', function(event){
        console.log('Boton intentar de nuevo presionado...');
        //intentos++;
        //game.destroy(true);
        //game = new Phaser.Game(config);
        //game.state.restart();
        //this.scene.start('sceneA');
        this.scene.start('sceneA');
      }, this);   
}

function updateD (){

    if (picapica.y > gh) {
        picapica.y = 0;
    }
    else {
        picapica.y += 2;
    }

    countercarreta++;
    picapica.x = picapica.x + 0.5 * flagcarreta;
    if ((countercarreta % 50) == 0) {        
        flagcarreta = flagcarreta * -1;
    }
}