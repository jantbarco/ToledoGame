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
    this.load.image('sky', './assets/img/Fondo.jpg');
    this.load.image('tigres', './assets/img/logo-02.png');
    this.load.image('productos', './assets/img/bodegon.png');
    this.load.image('logo', './assets/img/Logo_Malher.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/sound/intro.mp3");

    this.load.html('nameform', './assets/text/input.html');
    //this.load.plugin('RegistroFS', './.src/source.js');
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
    
    this.buttonFs = this.add.image(gw - 40, 20, 'fullscreen').setInteractive();
    this.add.rectangle(0, 180, gw * 2, 5, 0xffffff);

    this.add.text(100, 200, 'Bienvenido', { font: 'bold 40px Arial', fill: '#ffffff' });
    //this.add.text(100, 270, 'Ingresa tu nombre', { font: 'bold 25px Arial', fill: '#ffffff' });
    //this.add.text(150, 320, 'al juego de ', { font: '30px Intro', fill: '#ffffff' });
    var toca = this.add.text(35, 750, 'Toca la pantalla para iniciar', { font: 'bold 25px Arial', fill: '#ffffff' });
    toca.setDepth(2);

    var logo = this.add.image(fondopix, 100, 'logo');
    logo.setScale(.35);
    
    this.productos = this.add.image(fondopix, 530, 'productos');
    this.productos.setScale(.8);

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

    var audio_intro = this.sound.add("audio_intro");
    audio_intro.play({
        loop: true
    });

    /* ---------- INPUT NOMBRE ------------*/    
    // var text = this.add.text(10, 250, '', { color: 'white', fontFamily: 'Arial', fontSize: '0px '});
    
    // if (username == '') {
    //     var element = this.add.dom(250, 300).createFromCache('nameform');
    //     element.setPerspective(800);
    //     element.addListener('click');
    //     element.on('click', function (event) {
    //         if (event.target.name === 'loginButton')
    //         {
    //             var inputUsername = this.getChildByName('username');

    //             //  Have they entered anything?
    //             if (inputUsername.value !== '' || username !== '')
    //             {
    //                 //  Turn off the click events
    //                 this.removeListener('click');

    //                 //  Tween the login form out
    //                 this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });
    //                 this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 300, duration: 3000, ease: 'Power3',
    //                     onComplete: function ()
    //                     {
    //                         element.setVisible(false);
    //                     }
    //                 });                

    //                 //  Populate the text with whatever they typed in as the username!
    //                 //text.setText(inputUsername.value);
    //                 username=inputUsername.value;
                                        
    //                 //RegistroFS.callfn(400, 300);
    //             }
    //             else
    //             {
    //                 //  Flash the prompt
    //                 this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 100, ease: 'Power3', yoyo: false });
    //             }
    //         }

    //     });
    // }

    /* ---------- INPUT NOMBRE ------------*/
    // this.buttonInicio = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    // this.buttonInicio.on('pointerdown', function(event){
    //     console.log('iniciAR presionado... ---');
    //     console.log(username);
    //     if (username != '') {
    //         audio_intro.stop();
    //         this.scene.start('sceneC');
    //     }
    // }, this);
}