const personajes =[
    {id:1, nombre:"Nova",familia:"Stark", edad:24},
    {id:2, nombre:"Pera",familia:"Snow", edad:28},
    {id:3, nombre:"Krita",familia:"Troll", edad:34},
    {id:4, nombre:"Curv",familia:"Stark", edad:29},
    {id:5, nombre:"Bowl",familia:"Troll", edad:36}
    ];

    //FOREACH, para recorrer un array
    //en una sentencia
    personajes.forEach( personaje => console.log(personaje.edad));

    //separando la funcion
    const traeNombres = personaje => console.log(personaje.nombre);
    personajes.forEach(traeNombres);

    //da igual sea let o const
    // const familia = {};
    let familia = {};
    personajes.forEach((personaje) =>{
        if(familia[personaje.familia]){
            familia[personaje.familia]++;
        } else{
            familia[personaje.familia] = 1;
        }
    })
    //en el array personajes busca un valor de la "key" familia, pregunta si ya existe en el nuevo objeto
    //"si", al valor que esta en esa "key" o nombre familia le suma "1", en caso que
    //"no", crea la "key" con el nombre de la familia y le asigna el valor de "1"

    //se muestra el objeto resultante
    console.log(familia);
