/***************** ESCENE A **/
var SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneA ()
    {
        //console.log('Inicializando sceneA')
        Phaser.Scene.call(this, { key: 'sceneA' });
    },
    preload: preoloadA,
    create: createA,
    update: updateA,
});

var line1;

function preoloadA()
{    
    //console.log('Cargando sceneA')
    this.load.image('sky', './assets/img/Fondo.png');
    this.load.image('tigres', './assets/img/logo-02.png');
    this.load.image('productos', './assets/img/bodegon.png');
    this.load.image('logo', './assets/img/Logo_Malher.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/sound/intro.mp3");
}

function updateA(){
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
}

function createA()
{
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();

    this.buttonInicio = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    this.buttonFs = this.add.image(gw - 40, 50, 'fullscreen').setInteractive();
    //line1 = new Phaser.Line(0, 140, gw, 140);
    //this.add.line(0, 120, 0, 120, gw * 2, 120, 0xffffff);
    this.add.rectangle(0, 200, gw * 2, 5, 0xffffff);

    this.add.text(100, 220, 'Bienvenido', { font: 'bold 40px Arial', fill: '#ffffff' });
    //this.add.text(100, 270, 'Ingresa tu nombre', { font: 'bold 25px Arial', fill: '#ffffff' });
    //this.add.text(150, 320, 'al juego de ', { font: '30px Intro', fill: '#ffffff' });
    var toca = this.add.text(35, 750, 'Toca la pantalla para iniciar', { font: 'bold 25px Arial', fill: '#ffffff' });
    toca.setDepth(2);

    var logo = this.add.image(fondopix, 120, 'logo');
    logo.setScale(.35);
    
    this.productos = this.add.image(fondopix, 500, 'productos');
    this.productos.setScale(.9);

    //if (intentos == 0) {
    this.buttonInicio.on('pointerdown', function(event){
        //console.log('iniciAR presionado... ---');
        audio_intro.stop();
        //game = new Phaser.Game(config);            
        this.scene.start('sceneC');
        // game.destroy(true);
        // document.addEventListener('mousedown', function newGame () {
        //     game = new Phaser.Game(config);
        //     document.removeEventListener('mousedown', newGame);
        // });
    }, this);

    this.buttonFs.on('pointerdown', function(event){
        //console.log('Boton fs presionado...');
        if (this.scale.isFullscreen){
            this.scale.stopFullscreen();
        }
        else {
            this.scale.startFullscreen();
        }
        //window['game']['canvas'][game.device.fullscreen.request]();
              
    }, this);
    // }
    // else{
    //     console.log('Siguiente intento...');
    //     this.scene.restart();
    //     intentos--;

    //     //game.scene.start('sceneA');
    // }
    // this.input.once('pointerup', function (e) {
    //     //e.preventDefault();
    //     console.log('Tecla de inicio presionada');        
    //     //this.input.reset(true);
    //     this.scene.start('sceneD');        
    // }, this);

    audio_intro = this.sound.add("audio_intro");
    audio_intro.play({
        loop: true
    });
}