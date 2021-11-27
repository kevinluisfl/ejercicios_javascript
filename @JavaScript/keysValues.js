const personajes =[
    {id:15, nombre:"Nova",familia:"Stark", edad:24},
    {id:22, nombre:"Pera",familia:"Snow", edad:28},
    {id:73, nombre:"Krita",familia:"Troll", edad:34},
    {id:41, nombre:"Curv",familia:"Stark", edad:29},
    {id:52, nombre:"Bowl",familia:"Troll", edad:36}
    ];

//  console.log(Object.keys(personajes[0]));

const arr1 = [Object.keys(personajes[0])];
console.log(arr1);
const arr2 = [];
console.log(arr2);

personajes.forEach(per =>{
    arr2.push([`${per.id}`,`${per.nombre}`,`${per.familia}`,`${per.edad}`])
})
console.log(arr2);

// //NO
// //arr2.shift();
// arr2.unshift(arr1)
// console.log(arr2);

//SI
// arr1.pop();
arr1.push(arr2);
console.log(arr1);