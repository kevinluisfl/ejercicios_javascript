var xi, yi, xf, yf;
var control;
var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var x = 150;
var y = 150;
var gros = document.getElementById("grosorLine");
var groso;

var boton = document.getElementById("btnLimp");

boton.addEventListener("click", limpiarLienzo);

var colorin = document.getElementById("colorete");
colorin.addEventListener("change", seletColor);

var colorcito = colorin.value;

function seletColor(){
  if (colorcito != colorin.value) {
    //console.log("el colorcito "+colorcito+" es diferente a colorin "+colorin.value);
    colorcito = colorin.value;
  }
}

var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");

//con mouse es cuadrito para limitar el dibujo al area del canva
document.addEventListener("keydown", dibujaTecla);//se activa al presionar un tecla

cuadrito.addEventListener("mousedown", oprimirClic);//clic de mouse preionado
cuadrito.addEventListener("mouseup", soltarClic);//clic de mouse soltado

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
        //al limpiar todo se quita por eso se manda a dibujar los bordes y punto central
  dibujarLinea("black", 0, 0, 0, 300, papel);//Borde izq
  dibujarLinea("black", 0, 0, 300, 0, papel);//Borde top
  dibujarLinea("black", 0, 300, 300, 300, papel);//Borde baj
  dibujarLinea("black", 300, 0, 300, 300, papel);//Borde der
  dibujarLinea("red", 149, 149, 151, 151, papel);//punto central
  x = 150;
  y = 150;
  gros.value="";
}
        //funciones para dibujar con el mouse
function oprimirClic(evento){
control = 0;
xi = evento.layerX;
yi = evento.layerY;
cuadrito.addEventListener("mousemove", pressClic);
xf = xi;
yf = yi;
}

function soltarClic(evento){
  control = 1;
}

function pressClic(evento){
  if (control == 0){
    groso = parseInt(gros.value);
    xi = evento.layerX;
    yi = evento.layerY;
    dibujarLinea(colorcito, xi, yi, xf, yf, papel, groso);
    xf = evento.layerX;
    yf = evento.layerY;
  }
}
      //funcion que dibuja con las teclas de flecha
function dibujaTecla(evento)
{
    var movimiento = 5;
    groso = parseInt(gros.value);

  switch(evento.keyCode){
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel, groso);
      x = x - movimiento;
    break;
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel, groso);
    y = y - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel, groso);
    x = x + movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel, groso);
    y = y + movimiento;
    break;
    default:
      //console.log("no es flecha");
    break; //en el default es opcional
  }
}
