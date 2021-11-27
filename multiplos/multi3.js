
///idea, pedir cuantos aleatorios, y hacer el mod a cada uno mostrando resultado al frente

var result = document.getElementById("resul");

var x = aleatorio(1,100);

result.innerHTML += "<strong>Numero a evaluar : " + x + "</strong><br>";
result.innerHTML += " <br>";
result.innerHTML += "Multiplos : <br><br>";
for (var i = 0; i < x; i++){
    if (x % i == 0) {
    result.innerHTML += i + "  <br>";
  }
}

function aleatorio(min, max){
    resultado = Math.floor( Math.random() * (max - min + 1)) + min;
    return resultado;
}
