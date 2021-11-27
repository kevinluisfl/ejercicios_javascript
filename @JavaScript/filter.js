const personajes =[
    {id:1, nombre:"Nova",familia:"Stark", edad:24},
    {id:2, nombre:"Pera",familia:"Snow", edad:28},
    {id:3, nombre:"Krita",familia:"Troll", edad:34},
    {id:4, nombre:"Curv",familia:"Stark", edad:29},
    {id:5, nombre:"Bowl",familia:"Troll", edad:36}
    ];

// let stark = [];

// for(let i = 0; i < personajes.length; i++){
//     if(personajes[i].familia === 'Stark'){
//         stark.push(personajes[i]);
//     }
// }

// console.log(stark);

//con arrow function normal
const troll = personajes.filter((personaje) =>{
    return personaje.familia === 'Troll';
});
    console.log(troll);

//con arrow function reducida, sin "() {return ;}"
const stark = personajes.filter(personaje => personaje.familia === 'Stark');
 console.log(stark);

 //////////////////////////////////////////////////////////////////////////////////
 //FIND, igual que filter su uso, la diferencia que filter trae todo lo que encuentre con la condicion
 // "find" trae solo el primer resultado que encuentre

//  const buscaStark = personaje => personaje.familia === 'Stark';
 //con destructuring
 const buscaStark = ({familia}) => familia === 'Stark';

 const queri = personajes.find(buscaStark);
 console.log(queri);