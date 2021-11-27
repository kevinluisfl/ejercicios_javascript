//ARRAY TIENE POSICION Y VALOR

var futbol = ['messi', 'cristiano', 'neymar'];

// console.log(futbol[0]);
// console.log(futbol[1]);
// console.log(futbol[2]);

//CONTANDO
// console.log(futbol.length);
// console.log(futbol[futbol.length - 1]);

//RECORRIENDO
// for (i=0; i < futbol.length; i++){
//     console.log(futbol[i]);
// }

//las arrow function deben ir antes de ser requeridas
const mec = (elemento, indice, array) =>{
    console.log(`el jugador: "${elemento}" esta en la posicion: [${indice}], el array=> [${array}]`);
}

futbol.forEach(mec);

//INSERTANDO
// futbol[4] = 'falcao';
futbol[futbol.length] = 'falcao';
console.log(futbol);

futbol.unshift('kevin');
console.log(futbol);

futbol.pop();

futbol.push('james');
console.log(futbol);

futbol.shift();

//ELIMINANDO Y MODIFICANDO
// array.splice(indiceinicio,cantidadeliminar,nuevodato);
futbol.splice(1, 1, 'ronaldo');
console.log(futbol);

futbol.splice(1, 1);
console.log(futbol);

let ind = futbol.indexOf('james');
console.log(ind);

// const jugm = futbol.map(jug => jug !=="james");
// console.log(jugm);

// const jugf = futbol.filter(jug => jug ==='messi');
// console.log(jugf);