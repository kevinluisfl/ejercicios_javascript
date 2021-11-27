//REDUCE
const numeros = [1, 2, 3];

    //(acumulador, valor actual)
    const suma = (cont, num) =>{
        return cont + num;
    }

    //REDUCE (funcion, valor en que inicia)
    const total = numeros.reduce(suma, 0);

    console.log(total);
///////////////////////////////////////////////////////////////
    const personajes =[
        {id:1, nombre:"Nova",familia:"Stark", edad:24},
        {id:2, nombre:"Pera",familia:"Snow", edad:38},
        {id:3, nombre:"Krita",familia:"Troll", edad:34},
        {id:5, nombre:"Bowl",familia:"Troll", edad:36},
        {id:4, nombre:"Curv",familia:"Stark", edad:29},
        ];

    //usando reduce para comparar numeros
    const compararEdad = (acumulador, personaje) =>{
        if (acumulador > personaje.edad){
            return acumulador;
        } else {
            return personaje.edad;
        }
    }
    const mayor = personajes.reduce(compararEdad, 0);
    console.log(mayor);

    // //con destructuring
    // const compar = (acumulador, {edad}) =>{
    //     if (acumulador > edad   ) {
    //         return acumulador;
    //     } else{
    //         return edad;
    //     }
    // }
   