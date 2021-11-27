var numero1 = document.getElementById("numer1");
var numero2 = document.getElementById("numer2");
var boton = document.getElementById("btn");
var limpia = document.getElementById("limp");
var resulta = document.getElementById("result");
var info = document.getElementById("info");
var  aux;

boton.addEventListener("click", genAleat);
limpia.addEventListener("click", limpiarR);

numero2.focus();

function genAleat(){
resulta.innerHTML = "";

var inicio = 0;
var final = 0;
var i = 0;

inicio = numero1.value;
final = numero2.value;

if(inicio=="" || final==""){
 numero2.focus();
 return
}

console.log(inicio, final);

      for (i = inicio; i <= final; i++){
        aux = 0;
        if (i % 3 == 0 && i % 5 == 0) {
          resulta.innerHTML += "<a>Fizz</a><strong>Buzz</strong>(" + i + ")";
          aux = 1;
        }
        if(i % 3 == 0 && aux == 0){
          resulta.innerHTML += "<a>Fizz</a>(" + i + ")";
        }
        if (i % 5 == 0 && aux == 0) {
          resulta.innerHTML += "<strong>Buzz</strong>(" + i + ")";
        }
        else if (i % 3 != 0 && i % 5 != 0){
        resulta.innerHTML += i;
        }
        resulta.innerHTML += "<br>";//con esto evitamos poner <br> en cada document.write de arriba
      }

}


function limpiarR(){
  resulta.innerHTML = "";
  numero1.value = 1;
  numero2.value = "";
  numero2.focus();

}
