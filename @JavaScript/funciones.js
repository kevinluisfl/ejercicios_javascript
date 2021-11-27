var edad = prompt('Escriba la edad 1:');
var edad2 = prompt('Escriba la edad 2:');

const calculo = (edad) =>{

    if(edad >= 18){
        var result =  `con ${edad} años eres mayor de edad`;
    } else if(edad < 18) {
        var result =  `con ${edad} años eres menor de edad`;
    }
    return result;
}

const compar = (edad, edad2) => {
    if(edad > edad2){
        var result = `La edad 1: ${edad} años es mayor`;
    } else if(edad2 > edad){
        var result = `La edad 2: ${edad2} años es mayor`;
    }else {
        var result = `La edad 1: ${edad} años y edad 2: ${edad2} años, son iguales`;
    }
    return result;
}

document.getElementById('edad').innerHTML = calculo(edad);
document.getElementById('edad2').innerHTML = calculo(edad2);
document.getElementById('result').innerHTML = compar(edad, edad2);
