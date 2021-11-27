
///idea, pedir cuantos aleatorios, y hacer el mod a cada uno mostrando resultado al frente

var numer = document.getElementById("numero");
var result = document.getElementById("resul");
var boton = document.getElementById("btn");

var x;
boton.addEventListener("click", calcui);

function calcui(){
  result.innerHTML = "";
  result.innerHTML = "<strong>Reultado... </strong><br>";
x = aleatorio(1,1000);
result.innerHTML += "<strong>Numero aleatorio : " + x + "</strong><br>";
for (var i = 0; i < x; i++){
    if (x % i == 0) {
    result.innerHTML += i + "  <br>";
    console.log(i)
  }
}
}


function aleatorio(min, max){
    resultado = Math.floor( Math.random() * (max - min + 1)) + min;
    return resultado;
}


function calcular(){
result.innerHTML = "";
result.innerHTML = "<strong>Reultado... </strong><br>";
x = numer.value;
result.innerHTML += "<strong>Los múltiplos de "+ x +" son : </strong><br>"
  for (var i = 0; i < x; i++){
            if (x % i == 0) {
            result.innerHTML += i + " <br>";
          }
        }
  if(x==""){
    result.innerHTML = "";
  }
}
