/***************** CONSTANTES **/
var total = 0; // Total de productos cargados (Se usa para validar cuando se hayan seleccionado todos los productos)
var meta = 3;
const gaccel = 3; // Posiciones en x que se mueven en el estante1
const gaccel2 = 1; // Posiciones en x que se mueven en el estante2
const gaccel3 = 4; // Posiciones en x que se mueven en el estante3
const gaccel4 = 2; // Posiciones en x que se mueven en el estante4
const gw = 410; // Ancho de la pantalla 
const gh = 820; // Alto de la pantalla
const gt = 10; //Tiempo de juego en segundos
const estante1 = 600; //Posición y del estante1
const estante2 = 650; //Posición y del estante2
const estante3 = 700; //Posición y del estante3
const estante4 = 755; //Posición y del estante1

var intentos = 100;
var objetos = [];
var productos = 5;
var countercarreta = 1;
var flagcarreta = 1;
var audio_inicio;
var audio_fin;
var audio_moneda;
var audio_fondo;
const fondopix = gw / 2; 
const fondopiy = gh / 2;
const logox= gw / 2; 
const logoy = 75;
const alcancillapix = gw * 0.78; 
const alcancillapiy = gh * 0.8;