////RECURSIVIDAD DE FUNCION
//Exercise 1
function f(x){
    console.log(x);
    if(x == 0){
        return 0;
    }
    return x + f(x-2);
}

console.log(f(4));

////CUAL ES LA RESPUESTA
// 1. 4     ( )
// 2. 6     ( )
// 3. 2     ( )
// 4. Error ( )

///---------------------------------------------------------------------------//////
/////CICLO MIENTRAS
//Exercise 2
let x = 0;
const arr = [];
while(x < 6){
    x += 1;
    if(x % 2 == 0){
        continue;
    }
    arr.push("#");
}
//dentro del join va lo que unira cada elemento
console.log(arr.join(""));

////CUAL ES LA RESPUESTA
// 1. #     ( )
// 2. ##    ( )
// 3. ###   ( )
// 4. []    ( )