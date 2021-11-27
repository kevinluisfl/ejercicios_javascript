const personajes =[
    {id:1, nombre:"Nova",familia:"Stark", edad:24},
    {id:2, nombre:"Pera",familia:"Snow", edad:28},
    {id:3, nombre:"Krita",familia:"Troll", edad:34},
    {id:4, per:[1,2, {nombre:"Curv",familia:"Stark", edad:29}]},
    [{id:5, nombre:"Bowl",familia:"Troll", edad:{e:1,f:3, arr:[4,3]}}]
    ];

    console.log(personajes);

    // const persoFlat = personajes.flat();
    // console.log(persoFlat);

    const persoFlat = personajes.flat(Infinity);
    console.log(' :persoFlat ',persoFlat);