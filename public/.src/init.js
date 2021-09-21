/************CONFIG GAME */
var config2 = {
    width: gw,
    height: gh,
    parent: "container",
    //backgroundColor: '#392542',
    type: Phaser.AUTO,
    scene: [ SceneA, SceneB, SceneC, SceneGame, SceneD ],        
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x:500
            }
        }
    },
    // scale: {
    //      mode: Phaser.Scale.FIT,
    // //     parent: "container",
    // //     autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    // //     width: gw,
    // //     height: gh
    // },
}

var config = {
    width: gw,
    height: gh,
    parent: "container",
    //backgroundColor: '#392542',
    type: Phaser.AUTO,
    scene: [ SceneA, SceneB, SceneC, SceneGame, SceneD ],        
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x:500
            }
        }
    },
    scale: {
         mode: Phaser.Scale.FIT,
    //     parent: "container",
    //     autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    //     width: gw,
    //     height: gh
    },
}
var game = new Phaser.Game(config);