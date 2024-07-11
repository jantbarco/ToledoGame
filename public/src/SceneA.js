/***************** ESCENE A **/
export var SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneA ()
    {
        console.log('Inicializando sceneA')
        Phaser.Scene.call(this, { key: 'sceneA' });
    },
    preload: preoloadA,
    create: createA,
    update: updateA,
});

var line1;

export function preoloadA()
{    
    //console.log('Cargando sceneA')
    this.load.image('sky', 'public/assets/img/Fondo2.jpg');
    this.load.image('comenzar', './assets/img/comenzar.png');
    this.load.image('logo', 'public/assets/img/Logo_Toledo2.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/sound/intro.mp3");
}


export function updateA(){
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
}

export function createA()
{
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    this.fondo = this.add.image(fondopix, fondopiy, 'sky');
    //this.fondo.setScale(.5);
    
    this.buttonFs = this.add.image(gw - 40, 20, 'fullscreen').setInteractive();
    //this.add.rectangle(0, 180, gw * 2, 5, 0xffffff);

    this.add.text(350, 60, 'Bienvenidos a la', { font: 'bold 110px FontFabric', fill: '#ffffff' });
    this.add.text(520, 190, 'planta CIA', { font: 'bold 110px FontFabric', fill: '#ffffff' });
    
    /* ----------------- LOGO -----------------*/
    this.add.image(fondopix, 550, 'logo');
        
    /* --------------- BOTON FULL SCREEN -----------------*/
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

    /* ---------- AUDIO ------------*/
    var audio_intro = this.sound.add("audio_intro");
    audio_intro.play({
        loop: true
    });

    /* ---------- BOTON COMENZAR ------------*/
    this.buttonInicio = this.add.image(fondopix, fondopiy + 400, 'comenzar').setInteractive();
    this.buttonInicio.setScale(.6);
    this.buttonInicio.on('pointerdown', function(event){
        console.log('iniciAR presionado... ---');
        console.log(username);
        audio_intro.stop();
        this.scene.start('sceneB');
    }, this);
}