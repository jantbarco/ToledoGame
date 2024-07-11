import { SceneA } from "./SceneA.js"
import { SceneB } from "./SceneB.js"
import { SceneC } from "./SceneC.js"
import { SceneD } from "./SceneD.js"
import { SceneLoading } from "./SceneLoading.js"
import { SceneGame } from "./SceneGame.js"

/************CONFIG GAME */
var config2 = {
    width: gw,
    height: gh,
    parent: "container",
    backgroundColor: '#1f346b',
    type: Phaser.AUTO,
    scene: [ SceneLoading, SceneA, SceneB, SceneC, SceneGame, SceneD ],        
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
    backgroundColor: '#1f346b',
    "transparent"    : true,
    type: Phaser.AUTO,
    scene: [ SceneLoading, SceneA, SceneB, SceneC, SceneGame, SceneD ],        
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
    dom: {
        createContainer: true
    },
}
var game = new Phaser.Game(config);