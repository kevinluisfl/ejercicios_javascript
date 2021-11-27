// var texto = 'un nombre';

// //JSON = JavaScript Object Notation
// var textoAenviar = JSON.stringify(texto);

// console.log(texto);
// console.log(textoAenviar);

// var persona = {
//     name: 'k',
//     age: 27
// }

//// texto plano JSON para enviar
// var personaAenviar = JSON.stringify(persona);

// console.log(persona);
// console.log(personaAenviar);
// //datos de JSON recibidos pasados a objeto
// var personaRecibida = JSON.parse(personaAenviar);

// console.log(personaRecibida);

//Web storage
//localStorage se guarda hasta que el usuario elimine  (permanente)
//sessionStorage se guarda mientras hay sesion o esta abierto   (temporal)

//LOCALSTORAGE
var persona = {
    name: 'kevin f',
    age: 27
}

//creando datos JSON
var personaAenviar = JSON.stringify(persona);
console.log(persona);
console.log(personaAenviar);
//enviando datos JSON al localstorage del navegador
//el localstorage es una "key" y su valor (string, number, array, objeto, etc)
localStorage.setItem("persona", personaAenviar);

//recibiendo y guardando en variable datos del localstorage
var datosLocalStorage = localStorage.getItem("persona");

console.log(datosLocalStorage);

//parseando los datos del localstorage, para que no sea texto plano
var datosParseados = JSON.parse(datosLocalStorage);

//mostrando los datos en el html
document.getElementById("result").innerHTML = datosParseados.name;

//SESSIONSTORAGE
var user = {
    usuario: "klfl",
    pass: 123
}
//creando el JSON
var userAenviar = JSON.stringify(user);
//enviando al session
sessionStorage.setItem("user", userAenviar);
//recibiendo los datos JSON en el session
var datosSessionStorage = sessionStorage.getItem("user");
//mostrando los datos traidos
console.log(datosSessionStorage);
//parseando los datos del sessionstorage
var sessionParse = JSON.parse(datosSessionStorage);
// mostrando datos del session en html
document.getElementById("edad2").innerHTML = sessionParse.usuario;
