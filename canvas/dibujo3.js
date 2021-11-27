var lineas = document.getElementById("liniecitas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", generarLineas);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xini, yini, xfin, yfin){
  lienzo.beginPath();//Iniciar trazo
  lienzo.strokeStyle = color;//color linea
  lienzo.moveTo(xini, yini);//punto de inicio dibujo
  lienzo.lineTo(xfin, yfin);//punto fin dibujo
  lienzo.stroke();//dibujar
  lienzo.closePath();//finalizar trazo
}

function addColor(lin){
  if (lin >= 0 && lin <= 9) {
    return "yellow";
  }
  else if (lin >= 10 && lin <= 19 ) {
    return "teal";
  }
  else if (lin >= 20 && lin <= 29) {
    return "blue";
  }
}

function generarLineas(){
//  console.log(lineas.value);

  var k; //en el ejemplo es l
  var limite = parseInt(lineas.value); //en el ejemplo es linea
  var yi, xf;
  var colorcito = "#AAF";
  var espacio = ancho / limite;

  for (k = 0; k < limite; k++){
    yi = espacio * k;
    xf = espacio * (k + 1);
  dibujarLinea(addColor(k), 0, yi, xf, 300);
  dibujarLinea(addColor(k),xf ,0, 300, yi);//va dibujando de izquierda a derecha, arriba hacia abajo
  }

  //BORDES
  dibujarLinea(colorcito, 299, 299, 1, 299);//inferior
  dibujarLinea(colorcito, 1, 1, 1, 299);//izquierdo
  dibujarLinea("#AFA", 299, 299, 299, 1);//derecho
  dibujarLinea("#AFA", 299, 1, 1, 1);//superior
}
