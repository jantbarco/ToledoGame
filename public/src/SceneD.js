//import { callfn } from "./source.js";

/***************** ESCENE D */
export var SceneD = new Phaser.Class({
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
    this.load.image('res', 'public/assets/img/fondo_resultado.png');
    this.load.image('botonFin', 'public/assets/img/restart.png');
    //this.load.image('picapica', 'public/assets/fin/picapica.png');

    // this.load.image('fondopuntaje', 'public/assets/img/boton.png');
    //this.load.image('tigre', 'public/assets/img/logo-02.png');
    //this.load.image('siguejugando', 'public/assets/img/sigue_jugando.png');

    this.load.audio("audio_fin", "public/assets/sound/winner.mp3");
    this.load.audio("audio_gameover", "public/assets/sound/lose.mp3");
}

function createD()
{
    console.log(productos + ' pts');
    //callfn(username, productos);
    this.add.image(fondopix, fondopiy, 'res');
    //picapica = this.add.image(fondopix, 0, 'picapica');
    // this.logo = this.add.image(fondopix, 100, 'logo');
    // this.logo.setScale(.10);
    // //this.add.image(fondopix, fondopiy + 400, 'boton');

    var audio_fin = this.sound.add("audio_fin");
    //audio_fin1 = this.sound.add("audio_fin1");
    var gameover = this.sound.add("audio_gameover");

    // this.add.line(0, 0, 0, 150, gw * 2, 150, 0xffffff);
    // this.add.line(0, 0, 0, 260, gw * 2, 260, 0xffffff);

    this.add.text(gw * .44, gh - 300, 'TOTAL DE\n PUNTOS:', { font: 'bold 40px FontFabric', fill: '#ffffff' });
    this.add.text(gw * .46, gh - 200, productos + ' pts', { font: 'bold 40px FontFabric', fill: '#ffffff' });
    //this.add.text(gw / 2 - 200, 250, 'productos de la competencia', { font: '20px Intro', fill: '#ffffff' });

    // this.fondop = this.add.image(fondopix, 500, 'fondopuntaje');
    // this.fondop.setScale(.8);

    var textoFin = '';

    if (productos >= meta   ){
        //picapica.setVisible(true);      
        audio_fin.play({
            loop: false
        });
        //this.add.image(fondopix, 200, 'trigre');
        // textoFin = 'GANASTE! \n';
        // this.add.text(25, 310, textoFin, { font: '40px Intro', fill: '#FFFFFF' });
        // this.tigresrojos = this.add.image(fondopix, 475, 'tigre');
        // this.tigresrojos.setScale(.28);
    }
    else {        
        //picapica.setVisible(false);
        gameover.play({
            loop: false
        });
        //this.add.image(fondopix, 200, 'mish');
        // textoFin = '   SIGUE INTENTANDO';  
        // this.add.text(110, 325, textoFin, { font: '40px Intro', fill: '#FFFFFF' });
        // this.tigresrojos = this.add.image(fondopix, 480, 'siguejugando');
        // this.tigresrojos.setScale(.90);
    }
    
    this.buttonFin = this.add.image(gw * .85, fondopiy + 300, 'botonFin').setInteractive();
    this.buttonFin.setScale(.25)
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

    // if (picapica.y > gh) {
    //     picapica.y = 0;
    // }
    // else {
    //     picapica.y += 2;
    // }

    countercarreta++;
    //picapica.x = picapica.x + 0.5 * flagcarreta;
    if ((countercarreta % 50) == 0) {        
        flagcarreta = flagcarreta * -1;
    }
}

function RegistrarResultado() {
    //callfn();
}