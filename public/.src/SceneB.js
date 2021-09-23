/***************** ESCENE B */

var SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },   
    preload: preloadB,
    create: createB
});

var username = '';

function preloadB()
{
    this.load.image('sky', './assets/instrucciones/Fondo-01.png');
    this.load.image('productob', './assets/img/bodegon.png');
    this.load.image('boton', './assets/img/continuar.png');
    this.load.image('block', './assets/img/block.png');
    this.load.bitmapFont('arcade', './assets/font/bitmap/arcade.png', './assets/font/bitmap/arcade.xml');
}

function createB()
{
    console.log('Creando sceneB');
    this.add.image(fondopix, fondopiy, 'sky');
    //this.productos = this.add.image(fondopix, fondopiy, 'productob');
    //this.productos.setScale(.8);
    //this.add.image(fondopix, fondopiy + 100, 'texto');
    
    this.logo = this.add.image(200, 140, 'logo');
    this.logo.setScale(.5);
    this.add.text(100, 270, 'Ingresa tu nombre', { font: 'bold 25px Arial', fill: '#ffffff' });
    this.button =this.add.image(fondopix, fondopiy + 270, 'boton').setInteractive();
    this.button.setScale(1);
    this.button.on('pointerdown', function(event){
        audio_intro.stop();
        //console.log('Boton iniciar presionado...');
        this.scene.start('sceneC');
      }, this);    


    var chars = [
        [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
        [ 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
        [ 'U', 'V', 'W', 'X', 'Y', 'Z', '.', '-', '<', '>' ]
    ];
    var cursor = { x: 0, y: 0 };
    

    var input = this.add.bitmapText(0, 350, 'arcade', 'ABCDEFGH\n\nIJKLMNOP\n\nQRSTUVWXYZ\n\n').setLetterSpacing(20);
    var block = this.add.image(input.x - 10, input.y - 2, 'block').setOrigin(0);

    input.setInteractive();
    var playerText = this.add.bitmapText(20, 550, 'arcade', username).setTint(0x000000);

    this.input.keyboard.on('keyup', function (event) {

        if (event.keyCode === 37)
        {
            //  left
            if (cursor.x > 0)
            {
                cursor.x--;
                block.x -= 52;
            }
        }
        else if (event.keyCode === 39)
        {
            //  right
            if (cursor.x < 9)
            {
                cursor.x++;
                block.x += 52;
            }
        }
        else if (event.keyCode === 38)
        {
            //  up
            if (cursor.y > 0)
            {
                cursor.y--;
                block.y -= 64;
            }
        }
        else if (event.keyCode === 40)
        {
            //  down
            if (cursor.y < 2)
            {
                cursor.y++;
                block.y += 64;
            }
        }
        else if (event.keyCode === 13 || event.keyCode === 32)
        {
            //  Enter or Space
            if (cursor.x === 9 && cursor.y === 2 && username.length > 0)
            {
                //  Submit
            }
            else if (cursor.x === 8 && cursor.y === 2 && username.length > 0)
            {
                //  Rub
                username = username.substr(0, username.length - 1);

                playerText.text = 'Nombre: ' + username;
            }
            else if (username.length < 3)
            {
                //  Add
                username = username.concat(chars[cursor.y][cursor.x]);

                playerText.text = 'Nombre: ' + username;
            }
        }

    });

    input.on('pointermove', function (pointer, x, y) {

        var cx = Phaser.Math.Snap.Floor(x, 52, 0, true);
        var cy = Phaser.Math.Snap.Floor(y, 64, 0, true);
        
        var char = chars[cy][cx];

        cursor.x = cx;
        cursor.y = cy;

        block.x = input.x - 10 + (cx * 52);
        block.y = input.y - 2 + (cy * 64);

    }, this);

    input.on('pointerup', function (pointer, x, y) {

        var cx = Phaser.Math.Snap.Floor(x, 52, 0, true);
        var cy = Phaser.Math.Snap.Floor(y, 64, 0, true);
        var char = chars[cy][cx];
        console.log(cx + '-' + cy);
        cursor.x = cx;
        cursor.y = cy;

        block.x = input.x - 10 + (cx * 52);
        block.y = input.y - 2 + (cy * 64);

        if (char === '<' && username.length > 0)
        {
            //  Rub
            username = username.substr(0, username.length - 1);

            playerText.text = 'Nombre: ' + username;
        }
        else if (char === '>' && username.length > 0)
        {
            //  Submit
        }
        else if (username.length < 3)
        {
            //  Add
            username = username.concat(char);

            playerText.text = 'Nombre: ' + username;
        }

    }, this);
}