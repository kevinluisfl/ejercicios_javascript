var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
//console.log(teclas);
//document.addEventListener("keyup", dibujaTecla);//se activa al soltar
document.addEventListener("keydown", dibujaTecla);//se activa al presionar

var cuadrito =document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xini, yini, xfin, yfin, lienzo){
  lienzo.beginPath();//Iniciar trazo
  lienzo.strokeStyle = color;//color linea
  lienzo.lineWidth =3; //grosor de linea
  lienzo.moveTo(xini, yini);//punto de inicio dibujo
  lienzo.lineTo(xfin, yfin);//punto fin dibujo
  lienzo.stroke();//dibujar
  lienzo.closePath();//finalizar trazo
}

function dibujaTecla(evento)
{
//  console.log(evento.keyCode);
  //  if (evento.keyCode == teclas.LEFT) { //ejemplo con if
    //  console.log("izquierda")}
    var colorcito = "blue";
    var movimiento = 5;

  switch(evento.keyCode){
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    default:
      console.log("no es flecha");
    break; //en el default es opcional
  }
}
