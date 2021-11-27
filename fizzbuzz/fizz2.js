var numeros = 100;
var i;
var divisible = false;

for (i = 1; i <= numeros; i++){
  divisible = false;
  
  if(esDivisible(i,3)){
    document.write("<a>Fizz</a>");
    divisible = true;
  }
  if (esDivisible(i,5)) {
    document.write("<strong>Buzz</strong>");
    divisible = true;
  }
  if (!divisible){
  document.write(i);
  }
  document.write("<br>");//con esto evitamos poner <br> en cada document.write de arriba
}

function esDivisible(num, div){
  if (num % div == 0) {
    return true;
  }
  return false;
}
