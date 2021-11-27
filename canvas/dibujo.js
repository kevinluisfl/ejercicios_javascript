var lineas = document.getElementById("liniecitas");
var boton = document.getElementById("botoncito");
var color1 = document.getElementById("colore1");
var color2 = document.getElementById("colore2");
var color3 = document.getElementById("colore3");
var color4 = document.getElementById("colore4");

boton.addEventListener("click", generarLineas);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(colorLinea, xini, yini, xfin, yfin){
  lienzo.beginPath();
  lienzo.strokeStyle = colorLinea;
  lienzo.moveTo(xini, yini);
  lienzo.lineTo(xfin, yfin);
  lienzo.stroke();
  lienzo.closePath();
}

function generarLineas(){
//  console.log(lineas.value);

  var k; //en el ejemplo es l
  var limite = parseInt(lineas.value); //en el ejemplo es linea
  var yi, xf;
  var colorcito1 = color1.value;
  var colorcito2 = color2.value;
  var colorcito3 = color3.value;
  var colorcito4 = color4.value;
  var espacio = ancho / limite;

  for (k = 0; k < limite; k++){
    yi = espacio * k;
    xf = espacio * (k + 1);
  dibujarLinea(colorcito1, 0, yi, xf, 300);
  dibujarLinea(colorcito2, 300, yi, xf, 0);
  }
  for (k = 0; k < limite; k++){
    yi = espacio * k;
    xf= 290 - (espacio * k);
    dibujarLinea(colorcito3, 300, yi, xf, 300);
    dibujarLinea(colorcito4, 0, yi, xf, 0);
}

  dibujarLinea("black", 299, 299, 1, 299);
  dibujarLinea("black", 1, 1, 1, 299);
}
