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
    this.load.image('producto', './assets/img/bodegon.png');
    this.load.image('logo', './assets/img/Logo_Malher.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/sound/intro.mp3");
}

function createA()
{
    //this.scale.mode = Phaser.Scale.RESIZE;
    //console.log('setInteractive1');
    this.buttonInicio = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    this.buttonFs = this.add.image(gw - 40, 50, 'fullscreen').setInteractive();
    this.productos = this.add.image(fondopix, fondopiy+100, 'producto');
    this.productos.setScale(.8);

    //line1 = new Phaser.Line(0, 140, gw, 140);
    this.add.line(0, 140, 0, 140, gw * 2, 140, 0xffffff);

    this.add.text(60, 200, 'Bienvenido', { font: '50px Intro', fill: '#ffffff' });
    this.add.text(35, gh - 100, 'Toca la pantalla para iniciar', { font: '25px Intro', fill: '#ffffff' });
    
    //var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     //speed: 100,
    //     scale: { start: .75, end: 0 },
    //     blendMode: 'ADD'
    // });


    //var logo = this.physics.add.image(50, 100, 'logo');
    var logo = this.add.image(fondopix, 100, 'logo');
    logo.setScale(.35);
    //logo.setVelocity(0, 0);
    //logo.setBounce(0, 0);
    //logo.setCollideWorldBounds(true);

    //emitter.startFollow(logo);

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