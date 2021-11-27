var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keydown", moverPJ);

var mp = document.getElementById("corralito");
var lienzo = mp.getContext("2d");

var xi = 0;
var yi = 0;

var cantV = aleatorio(0, 10);
var cantP = aleatorio(0, 15);

fondo = {
  url: "fondo.png",
  cargaOK: false
};

vaca = {
  url: "vaca.png",
  cargaOK: false
};

pollo = {
  url: "pollo.png",
  cargaOK: false
};

cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url; //nunca olvidar el error que tuve aqui de sintaxis puse scr en lugar de src
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarMapa(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar(){

  if (fondo.cargaOK) {
    lienzo.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK == true) { //por defecto en if debe ser verdadero la condicion para ejecutar su contenido
    for(var v = 0; v < cantV; v++){
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x * 70;
      y = y * 70;
      lienzo.drawImage(vaca.imagen, x, y);
    }
  }

  if (pollo.cargaOK) {
    for(var p = 0; p < cantP; p++){
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x * 70;
      y = y * 70;
      lienzo.drawImage(pollo.imagen, x, y);
    }
  }

  if (cerdo.cargaOK){
  lienzo.drawImage(cerdo.imagen, xi, yi);//el cerdo que voy a mover
  }

}

  function aleatorio(min, max){
      resultado = Math.floor( Math.random() * (max - min + 1)) + min;
      return resultado;
  }

  function moverPJ(evento)
  {
    var mov = 30;

    switch(evento.keyCode){
      case teclas.LEFT:
        xi = xi - mov;
        cargarCerdos();
      break;

      case teclas.UP:
      yi = yi - mov;
      cargarCerdos();
      break;

      case teclas.RIGHT:
      xi = xi + mov;
      cargarCerdos();
      break;

      case teclas.DOWN:
      yi = yi + mov;
      cargarCerdos();
      break;
      default:

      break; //en el default es opcional
    }
  }

//////////////////queria probar como mover solo el cerdo in recargar
/////////////////pero por ahora no es posible

//  function cargarCerdos2(){
  //  cerdo.cargaOK = true;
    //dibujar2();
  //}

/////////////se mueve el cerdo en el mapa solo

//function dibujar2(){
  //lienzo.drawImage(fondo.imagen, 0, 0);
  //if (cerdo.cargaOK){
  //lienzo.drawImage(cerdo.imagen, xi, yi);//el cerdo que voy a mover
  //}
//}
