const personajes =[
    {id:15, nombre:"Nova",familia:"Stark", edad:24},
    {id:22, nombre:"Pera",familia:"Snow", edad:28},
    {id:73, nombre:"Krita",familia:"Troll", edad:34},
    {id:41, nombre:"Curv",familia:"Stark", edad:29},
    {id:52, nombre:"Bowl",familia:"Troll", edad:36}
    ];

    // for (let per of personajes){
    //     if(per.edad > 30){
    //         console.log(`${per.nombre} es mayor de 30 años`)
    //     }
    // }

    // function orderkey(arr){
    //     let aux = 0;
    //     for(let i =0; i <= arr.length -2; i++){
    //         for(j = i+1; j <= arr.length -1; j++){
    //             if(arr[j].id > arr[i].id){
    //                 aux = arr[i];
    //                 arr[i] = arr[j];
    //                 arr[j] = aux;
    //             }
    //         }
    //     }
    //     return arr;
    // }
    // console.log(orderkey(personajes));


    function orderkey(arr, ide){
        let aux = 0;
        for(let i =0; i <= arr.length -2; i++){
            for(j = i+1; j <= arr.length -1; j++){
                if(arr[j][ide] > arr[i][ide]){
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            }
        }
        return arr;
    }
    console.log(personajes);
    console.log(orderkey(personajes, "id"));
