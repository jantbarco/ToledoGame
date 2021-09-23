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
    this.load.image("marcador", "./assets/img/marcador.png");
    this.load.image("logom", "./assets/img/Logo_Malher.png");
    
    CargarImagenes(this);
    
    this.load.audio("audio_fondo", "./assets/sound/game.mp3");
    this.load.audio("audio_moneda", "./assets/coin.wav");
}

function create(){
    this.input.setDefaultCursor('url(./assets/img/mira.png), pointer');
    //console.log("Creando esceneGame...")    
    //escena juego    
    //this.fondo = this.add.image(fondopix, fondopiy, "fondo");
    this.add.rectangle(0, 135, gw * 2, 3, 0xdb766c);

    this.fondo_gondola = this.add.image(fondopix, fondopiy + 50, "fondo_gondola");    
    this.fondo_gondola.setScale(.55);
    this.logo = this.add.image(logox, logoy, "logom");
    this.logo.setScale(.25);
    // mira = this.add.image(fondopix, fondopiy, "mira");
    // mira.setScale(.25);
    // mira.setDepth(2);

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

    // this.add.text(5, gh - 140, 'Regresar', { font: '20px Intro', fill: '#00a4dc' });
    // this.buttonBack =this.add.image(0 + 50, gh - 70, "botonB").setInteractive();
    
    // this.buttonBack.on('pointerdown', function(event){
    //     //console.log('Boton regresar...');
    //     this.scene.start('sceneA');
    //   }, this);

    this.marcador = this.add.image(fondopix  * 2 -60, 720, "marcador");
    this.marcador.setScale(.9);
    this.marcador.setDepth(-1);

    textoTiempo = this.add.text(80, 140, 'TIEMPO RESTANTE', { font: '25px Arial', fill: '#ffffff' });
    infoTiempo = this.add.text(160, 170, '', { font: 'bold 30px Arial', fill: '#ffffff' });
    //textoTiempo = this.add.text(80, 180, '', { font: '25px Intro', fill: '#ffffff' });
    infoMarcador2 = this.add.text(gw * .74, 690, 'PUNTOS', { font: 'bold 25px Arial', fill: '#aa0201' });
    infoMarcador = this.add.text(gw * .74, 720, '', { font: 'bold 30px Arial', fill: '#aa0201' });
    timer = this.time.addEvent({ delay: gt * 1000, callback: gameOver, callbackScope: this });

    this.add.rectangle(0, 770, gw * 2, 3, 0xffffff);
    textoInstrucciones = this.add.text(20, 780, 'DERRIBA LOS PRODUCTOS VERDES', { font: '20px Arial', fill: '#ffffff' });
}

function update() {
    //if (productos != total && Math.floor(gt - timer.getElapsed() / 1000) > 0) {
    falta = Math.floor(gt - timer.getElapsed() / 1000);
    //console.log(falta);
    if (falta > 0) {
        for (i in objetos){
            restarx(objetos[i]);
        }

        //infoTiempo.setText('00:' + segundosfaltan(falta0));        
    }
    infoTiempo.setText('00:' + segundosfaltan(falta));
    infoMarcador.setText('     ' + productos);
}

function segundosfaltan(segundos) {
    //console.log(segundos);
    //if (productos != total && Math.floor(gt - timer.getElapsed() / 1000) > 0) {
    if (segundos > 10) 
        return segundos;
    else
        return '0' + segundos;
}

function crearProducto (x, y, nombre, puntos, t){
    //console.log('Creando producto:' + nombre);
    var prod = t.add.image(x, y, nombre);
    //console.log(prod.width + ', ' + prod.height + ' - ' + prod.x + ',' + prod.y + '+' + prod.height / 2 + '=' + prod.y + prod.height / 2);
    
     if (nombre.includes('sobre')) {
    //     //console.log('Creando sobre:' + nombre+ ', x:' + prod.x + ', y:' + prod.y);
         prod.setScale(.07);
    //     prod.y -= 150;
     }
     else
     {
        //console.log('Creando sobre:' + nombre+ ', x:' + prod.x + ', y:' + prod.y);        
        prod.setScale(.18);        
    }
    //prod.y -=  prod.height / 2;

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
        objetos.push(crearProducto(Listado[i].x, Listado[i].y, Listado[i].nombre, Listado[i].puntos, g));
    }
}

function CargarImagenes(g){
    for (i in Listado){
        //console.log('Cargando producto:|' + Listado[i].nombre + '|-|' + Listado[i].img + '|');
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

    // mira.x = prod.x;
    // mira.y = prod.y;
}

function gameOver ()
{
    this.input.off('gameobjectup');

    audio_fondo.stop();
    
    this.scene.start('sceneD');
}

function restarx(o){
    var restar = 0;
    var y = o.y + o.height / 2;
    //console.log('y: ' + y);
    //console.log(o.texture.key + '-' + y);
    
    switch(o.y) {
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