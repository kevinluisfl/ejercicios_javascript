var entrada = parseInt (prompt('digite un numero del 1 al 7: '));
var salida = null;

switch (entrada) {
    case 1:
        salida = 'Lunes';
    break;
    case 2:
        salida = 'Martes';
    break;
    case 3:
        salida = 'Miercoles';
    break;
    case 4:
        salida = 'Jueves';
    break;
    case 5:
        salida = 'Viernes';
    break;
    case 6:
        salida = 'Sabado';
    break;
    case 7:
        salida = 'Domingo';
    break;
    default:
        salida = 'Ingrese un numero del 1 al 7';
}

document.getElementById('result').innerHTML = salida;

var resutado = document.getElementById('titulo');

resutado.innerHTML += salida;