// //LET Y CONST
// // practicamente lo mismo, solo que const es para constantes
// // y const es lo mas usado en los frameworks
// // no permiten que el valor asignado se sobreescriba globalmente

// var a = 5;
// var b = 4;

// if(a === 5){
//     let a = 3;
//     var b = 2;
//     //aqui solo se cambia "a" dentro del "if"
//     // "b" si cambia globalmente
//     console.log("dentro del if: ");
//     console.log(a, b);
//     // al imprimir dentro "a" y "b", sus valores
//     // son 3 y 2 respectivamente
// }

// console.log("fuera del if: ");
// console.log(a, b);
// // al imprimir fuera "a" y "b", sus valores
// // son 5 y 2 respectivamente

////ARROW FUNCTION 

// //normal function
// function hola() {
//     return "Hola mundo 1";
// }
// console.log(hola());

// //declaration function
// hola2 = function() {
//     return "Hola mundo 2";
// }
// console.log(hola2());

// //arrow function
// //si solo recibe un parametro se coloca y puede obviarse los parentesis
// // si se retorna una linea se puede obviar el return y llaves
// hola3 = () => {
//     return "Hola mundo 3";
// }
// console.log(hola3());

// const words = ["HoLA", "KEVIN", "fLOrEz"];
// console.log("Array inicial");
// console.log(words);

// // la i dentro de map corresponde a cada item del array
// // se puede poner una palabra que se refiera a cada item en singular
// // para un array "carros", cada item "i" puede ser "carro"
// // const minusculas = words.map(i => i.toLocaleLowerCase() );

// const minusculas = words.map(word => word.toLocaleLowerCase() );
// console.log("Array final todo minuscula");
// console.log(minusculas);

//TEMPLATE LITERALS
// se refiere a dentro de comillas francesas escribir string y variables
// incluso realizar operaciones, tambien escribir en varias lineas
let precio = 2;
let impuesto = 1.5;
let total = `El precio total es ${precio * impuesto}`;

console.log(total);

let multilinea = "este texto es \n multilinea";
console.log(multilinea);

let textomultilinea = `este texto es
multilinea`;
console.log(textomultilinea);
