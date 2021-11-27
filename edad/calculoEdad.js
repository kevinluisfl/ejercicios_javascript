var nacimiento = document.getElementById("nacedad");
var futuro = document.getElementById("caledad");
var boton = document.getElementById("btnedad");
var residuo = document.getElementById("resulta");
var edad, xedad, yedad;
boton.addEventListener("click", calculaEdad);
function calculaEdad(){
  xedad = futuro.value;
  yedad = nacimiento.value;
  edad = xedad - yedad;
var actual = new Date;
if(xedad < actual.getFullYear() ){
  residuo.value = "Tenias "+edad+" años";
} else {
  residuo.value = "Tendrias "+edad+" años";
}
}