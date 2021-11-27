//UN OBJETO TIENE CLAVE Y VALOR
// var datos = {
//     nombre: 'kevin',
//     edad: 27,
//     tes: true
// }

// console.log(datos);
// console.log(datos.nombre);
// console.log(datos['tes']); //menos convencional, en lo personal poco practica

// //forma comoda para acceder a variables de un objeto
// const {nombre, edad, tes} = datos;

// console.log(edad);

//CLASES
class Car {
    constructor(marca, modelo, costo){
        this.marca = marca;
        this.modelo = modelo;
        this.costo = costo;
    }
}

var carro = new Car('Lexus', '2020', 250000);

console.log(carro);
console.log(carro.marca);

//CLLASES CON METODOSs
class Persona {
    constructor(nomb, ed){
        this.nomb = nomb;
        this.ed = ed;
    }
    saludar(){
        return 'Hola ' + this.nomb + ' tienes ' + this.ed + ' años';
    }
    coche(mod){
        return this.nomb + ' tiene un coche marca ' + mod;
    }
}

var yo = new Persona('kevin', 27);
console.log(yo.saludar());
console.log(yo.coche('lamborghini'));
