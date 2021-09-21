/***************** ESCENE GAME */
var SceneGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneGame' });
    }, 
    preload: preload,
    create: create,
    update: update
});

function preload(){
    this.load.image("fondo", "./assets/img/Fondo.jpg");
    this.load.image("fondo_gondola", "./assets/img/Fondo_obstaculos.png");
    this.load.image("mira", "./assets/img/mira.png");
    this.load.image("logom", "./assets/img/Logo_Malher.png");
    this.load.image("alcancilla", "./assets/COCHINITO.png");
    this.load.image("botonB", "./assets/boton.png");

    CargarImagenes(this);
    
    this.load.audio("audio_fondo", "./assets/fondo.mp3");
    this.load.audio("audio_moneda", "./assets/coin.wav");
}

function create(){
    //console.log("Creando esceneGame...")    
    //escena juego    
    this.fondo = this.add.image(fondopix, fondopiy, "fondo");
    this.fondo_gondola = this.add.image(fondopix, fondopiy + 50, "fondo_gondola");    
    this.fondo_gondola.setScale(.4);
    this.logo = this.add.image(logox, logoy, "logom");
    this.logo.setScale(.35);
    mira = this.add.image(fondopix, fondopiy, "mira");
    mira.setScale(.3);

    CrearProductos(this);

    //audio
    audio_fondo = this.sound.add("audio_fondo");
    audio_fondo.play({
        loop: true
    });
    
    audio_moneda = this.sound.add("audio_moneda");

    //habilitar click
    this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);

    this.add.text(5, gh - 140, 'Regresar', { font: '20px Gotham', fill: '#00a4dc' });
    this.buttonBack =this.add.image(0 + 50, gh - 70, "botonB").setInteractive();
    
    this.buttonBack.on('pointerdown', function(event){
        //console.log('Boton regresar...');
        this.scene.start('sceneA');
      }, this);

    textoTiempo = this.add.text(80, 180, 'TIEMPO RESTANTE', { font: '25px Gotham', fill: '#ffffff' });
    infoTiempo = this.add.text(160, 210, '', { font: '30px Gotham', fill: '#ffffff' });
    infoMarcador = this.add.text(gw * .65, 650, '', { font: '100px Gotham', fill: '#ffffff' });
    timer = this.time.addEvent({ delay: gt * 1000, callback: gameOver, callbackScope: this });
}

function update() {
    //if (productos != total && Math.floor(gt - timer.getElapsed() / 1000) > 0) {
    if (Math.floor(gt - timer.getElapsed() / 1000) > 0) {
        for (i in objetos){
            restarx(objetos[i]);
        }

        infoTiempo.setText('00:0' + Math.floor(gt - timer.getElapsed() / 1000));        
    }
    infoTiempo.setText('00:0' + Math.floor(gt - timer.getElapsed() / 1000));
    infoMarcador.setText(productos);
}

function crearProducto (x, y, nombre, puntos, t){
    //console.log('Creando producto:' + nombre);
    var prod = t.add.image(x, y, nombre);
    //console.log(prod.width + ', ' + prod.height + ' - ' + prod.x + ',' + prod.y + '+' + prod.height / 2 + '=' + prod.y + prod.height / 2);
    prod.y -=  prod.height / 2;
    prod.setScale(.15);
    
    if (puntos > 0) {
        total += puntos;
        //  Make them all input enabled
        prod.setInteractive();
        
        //  The images will dispatch a 'clicked' event when they are clicked on
        prod.on('clicked', clickHandler, this);
    }
    return prod;
}

function CrearProductos(g){
    productos = 0;
    total = 0;
    for (i in Listado){
        objetos.push(crearProducto(Listado[i].x, Listado[i].y, Listado[i].nombre, Listado[i].puntos, g))
    }
}

function CargarImagenes(g){
    for (i in Listado){
        g.load.image(Listado[i].nombre, Listado[i].img);
    }
}

function clickHandler (prod)
{
    productos++;
    
    audio_moneda.play({
        loop: false
    });

    prod.setVisible(false);

    mira.x = prod.x;
    mira.y = prod.y;
}

function gameOver ()
{
    this.input.off('gameobjectup');

    audio_fondo.stop();
    
    this.scene.start('sceneD');
}

function restarx(o){
    var restar = gaccel;
    var y = o.y + o.height / 2;
    //console.log('y: ' + y);

    switch(y) {
        case estante1: restar = gaccel; break;
        case estante2: restar = gaccel2; break;
        case estante3: restar = gaccel3; break;
        case estante4: restar = gaccel4; break;
    }

    if (o.x < 0) {
        o.x = gw;

        //o.input.enabled = true;
        o.setVisible(true);
    }
    else {
        o.x -= restar;
    }
}