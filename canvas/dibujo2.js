var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var k;
var limite = 30;
var yi;
var xf;
var colorcito = "#AAF";

for (k = 0; k < limite; k+=0.5){
  yi = 10 * k;
  xf = 10 * (k + 1);
dibujarLinea(colorcito, 0, yi, xf, 300);
}

for (k = 0; k < limite; k++){
  yi = 300 - (10 * k);
  xf = yi - 10;
dibujarLinea("#AFA", 300, yi, xf, 0);
}

//BORDES
dibujarLinea(colorcito, 299, 299, 1, 299);//inferior
dibujarLinea(colorcito, 1, 1, 1, 299);//izquierdo
dibujarLinea("#AFA", 299, 299, 299, 1);//derecho
dibujarLinea("#AFA", 299, 1, 1, 1);//superior

function dibujarLinea(color, xini, yini, xfin, yfin){
  lienzo.beginPath();//Iniciar trazo
  lienzo.strokeStyle = color;//color linea
  lienzo.moveTo(xini, yini);//punto de inicio dibujo
  lienzo.lineTo(xfin, yfin);//punto fin dibujo
  lienzo.stroke();//dibujar
  lienzo.closePath();//finalizar trazo
}
