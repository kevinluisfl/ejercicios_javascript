var z, i;

// XXX: se van a traer maximo, minimo y cantidad

var umini = document.getElementById("numin");//rango minimo
var umaxi = document.getElementById("numax");//rango maximo
var ucant = document.getElementById("cont");//cantidad de numeros aleatorios
var boton = document.getElementById("btn");//boton para generar

var result = document.getElementById("resultado");

boton.addEventListener("click", generaAleat)

function generaAleat(){
ucant = parseInt(ucant.value);
umaxi = parseInt(umaxi.value);
umini = parseInt(umini.value);

  for (i = 0; i < ucant; i++){
    z = aleatorio(umini, umaxi);//pasa los valores a la funcion y recibe el resultado
    var x = i + 1; //para numerar en orden los aleatorios
    result.innerHTML += x +": "+ z + "<br>"; //escribe los aleatorios en el orden dando salto de linea
  }
  function aleatorio(min, max){
      resultado = Math.floor( Math.random() * (max - min + 1)) + min;
      return resultado;
  }
}
