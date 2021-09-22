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
});

var line1;

function preoloadA()
{    
    //console.log('Cargando sceneA')
    this.load.image('sky', './assets/img/Fondo.jpg');
    this.load.image('tigres', './assets/img/logo-02.png');
    this.load.image('logo', './assets/img/Logo_Malher.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/sound/intro.mp3");
}

function createA()
{
    this.buttonInicio = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    this.buttonFs = this.add.image(gw - 40, 50, 'fullscreen').setInteractive();
    this.tigres = this.add.image(fondopix, 150, 'tigres');
    this.tigres.setScale(.25);

    //line1 = new Phaser.Line(0, 140, gw, 140);
    this.add.line(0, 120, 0, 120, gw * 2, 120, 0xffffff);

    this.add.text(100, 270, 'Bienvenido', { font: '40px Intro', fill: '#ffffff' });
    this.add.text(150, 320, 'al juego de ', { font: '30px Intro', fill: '#ffffff' });
    this.add.text(35, gh - 200, 'Toca la pantalla para iniciar', { font: '25px Intro', fill: '#ffffff' });
    
    var logo = this.add.image(fondopix, 470, 'logo');
    logo.setScale(.35);
    
    //if (intentos == 0) {
    this.buttonInicio.on('pointerdown', function(event){
        console.log('iniciAR presionado... ---');
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