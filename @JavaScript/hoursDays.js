const usch = [
    ["17:00","18:00","19:00"],
    ["17:00","18:00","19:00","20:00"],
    ["17:00","18:00","19:00"],
    ["17:00"],
    ["17:00","18:00","19:00"],
    ["18:00"],
    ["17:00","18:00","19:00"],
];

const result = [];
const hours = [];

for (let x = 0; x <= usch.length -1; x++){
    if(usch[x].length > 0){
        for(h of usch[x]){
            if(!hours.includes(h)){
                hours.push(h);
                result.push({"hour": h, "days": []});
            }
            for(r of result){
                if(r["hour"] === h){
                    //cuando primero y ult horario vacio
                    // r["days"].push(x);
                    r["days"].push(x+1);
                }
            }
        }
    }
}

console.log(result);