var xi, yi, xf, yf;
var control;
var colorcito;

var gros = document.getElementById("grosorLine");
var color1 = document.getElementById("btnAmar");
var color2 = document.getElementById("btnAzul");
var color3 = document.getElementById("btnRojo");

color1.addEventListener("click", seletColor1);
color2.addEventListener("click", seletColor2);
color3.addEventListener("click", seletColor3);

function seletColor1(){
colorcito = "yellow";
}
function seletColor2(){
colorcito = "blue";
}
function seletColor3(){
colorcito = "red";
}

var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");

var boton = document.getElementById("btnLimp");
boton.addEventListener("click", limpiarLienzo);

cuadrito.addEventListener("mousedown", oprimirClic);
cuadrito.addEventListener("mouseup", soltarClic);
//cuadrito.addEventListener("click", pressClic);

function oprimirClic(evento){
  //funciona mejor con layer
  //console.log("inicial");
  //console.log(evento.layerX);
  //console.log(evento.layerY);
  //xi = evento.clientX;
  //yi = evento.clientY;
  //xi = evento.layerX;
  //yi = evento.layerY;
//dibujarLinea(colorcito, xi, yi, xf, yf, papel);
control = 0;
xi = evento.layerX;
yi = evento.layerY;
cuadrito.addEventListener("mousemove", pressClic);
xf = xi;
yf = yi;
}

function soltarClic(evento){
  //funciona mejor con layer
  //console.log("final");
  //console.log(evento.layerX);
  //console.log(evento.layerY);
  //xf = evento.clientX;
  //yf = evento.clientY;
  //xf = evento.layerX;
  //yf = evento.layerY;
  //dibujarLinea(colorcito, xi, yi, xf, yf, papel);
  control = 1;
}

function pressClic(evento){
  if (control == 0){
    var groso = parseInt(gros.value);
    xi = evento.layerX;
    yi = evento.layerY;
    dibujarLinea(colorcito, xi, yi, xf, yf, papel, groso);
    xf = evento.layerX;
    yf = evento.layerY;
  }
}

dibujarLinea("black", 0, 0, 0, 300, papel);//Borde izq
dibujarLinea("black", 0, 0, 300, 0, papel);//Borde top
dibujarLinea("black", 0, 300, 300, 300, papel);//Borde baj
dibujarLinea("black", 300, 0, 300, 300, papel);//Borde der

dibujarLinea("red", 149, 149, 151, 151, papel);//punto central

function dibujarLinea(color, xini, yini, xfin, yfin, lienzo, grosor){
  lienzo.beginPath();//Iniciar trazo
  lienzo.strokeStyle = color;//color linea
  lienzo.lineWidth = grosor; //grosor de linea
  lienzo.moveTo(xini, yini);//punto de inicio dibujo
  lienzo.lineTo(xfin, yfin);//punto fin dibujo
  lienzo.stroke();//dibujar
  lienzo.closePath();//finalizar trazo
}

function limpiarLienzo(){
  cuadrito.width = cuadrito.width;//SOLO SE QUE LIMPIA, NO SE COMO FUNCIONA
  dibujarLinea("black", 0, 0, 0, 300, papel);//Borde izq
  dibujarLinea("black", 0, 0, 300, 0, papel);//Borde top
  dibujarLinea("black", 0, 300, 300, 300, papel);//Borde baj
  dibujarLinea("black", 300, 0, 300, 300, papel);//Borde der
  dibujarLinea("red", 149, 149, 151, 151, papel);//punto central
}
