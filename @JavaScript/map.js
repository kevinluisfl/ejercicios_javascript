const personajes =[
    {id:1, nombre:"Nova",familia:"Stark", edad:24},
    {id:2, nombre:"Pera",familia:"Snow", edad:28},
    {id:3, nombre:"Krita",familia:"Troll", edad:34},
    {id:4, nombre:"Curv",familia:"Stark", edad:29},
    {id:5, nombre:"Bowl",familia:"Troll", edad:36}
    ];

    //recorriendo array trayendo nombres y edad
    const nombres = personajes.map( per => `El personaje ${per.nombre} tiene ${per.edad} años`);
    console.log(nombres);

    //nuevo array recorrido, creado como objeto
    const objeto = personajes.map( per => ({
        nombre: per.nombre,
        edad: per.edad
    }));
    console.log(objeto);

    //nuevo array recorrido, creado como objeto con destructuring
    const objetoDes = personajes.map( ({nombre, edad}) => ({
        nombre,
        edad
    }));
    console.log(objetoDes);


//duplicar valores del array
const numeros = [1,2,3,4,5,6];

//arrow function para duplicar un numero
const doble = num => num * 2;

//callback es la function "doble"
const numeroDoble = numeros.map(doble);

console.log(numeroDoble);
