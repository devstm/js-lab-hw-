console.log('===========|     welcome!    |============');
console.log('---------- | Saleh T. Marouf | ----------');
console.log('---------- |    120161143    | ----------');

const saleh = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.78,
        "batters":
            {
                "batter":
                    [
                        {"id": "1001", "type": "Regular"},
                        {"id": "1002", "type": "Chocolate"},
                        {"id": "1003", "type": "Blueberry"},
                        {"id": "1004", "type": "Devil's Food"}
                    ]
            },
        "topping":
            [
                {"id": "5001", "type": "None"},
                {"id": "5002", "type": "Glazed"},
                {"id": "5005", "type": "Sugar"},
                {"id": "5007", "type": "Powdered Sugar"},
                {"id": "5006", "type": "Chocolate with Sprinkles"},
                {"id": "5003", "type": "Chocolate"},
                {"id": "5004", "type": "Maple"}
            ]
    },
    {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.55,
        "batters":
            {
                "batter":
                    [
                        {"id": "1001", "type": "Regular"}
                    ]
            },
        "topping":
            [
                {"id": "5001", "type": "None"},
                {"id": "5002", "type": "Glazed"},
                {"id": "5005", "type": "Sugar"},
                {"id": "5003", "type": "Chocolate"},
                {"id": "5004", "type": "Maple"}
            ]
    },
    {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.26,
        "batters":
            {
                "batter":
                    [
                        {"id": "1001", "type": "Regular"},
                        {"id": "1002", "type": "Chocolate"}
                    ]
            },
        "topping":
            [
                {"id": "5001", "type": "None"},
                {"id": "5002", "type": "Glazed"},
                {"id": "5003", "type": "Chocolate"},
                {"id": "5004", "type": "Maple"}
            ]
    }
];

var topping_tybe;
var i , j , l ;
var array = [];
var array1 = [];
var array2 = [];
var ids = [];
for (l = 0; l < saleh.length; l++) {
    array.push(saleh[l].topping.length)
}
for (let l = 0; l < saleh.length; l++) {
    array1.push(saleh[l].batters.batter.length)
}
for (let l = 0; l < saleh.length; l++) {
    array2.push(saleh[l].ppu);
}
// for (let l = 0; l < array2.length; l++) {
//     console.log(array1[l]);
// }


//-----------------List of topping tybe ----------------//
console.log('||-------List of topping tybe-------||');
for (i = 0; i < saleh.length; i++) {
    for (j = 0; j < array[i] ; j++ ) {
        topping_tybe = saleh[i].topping[j].type;
        console.log(topping_tybe);
    }
    console.log('||---------------------------------||');
}
//-----------------List of batter tybe ----------------//
console.log('||-------List of batter tybe-------||');
for (let i = 0; i < saleh.length; i++) {
    for (let j = 0; j < array1[i]; j++) {
        console.log(saleh[i].batters.batter[j].type);
    }
    console.log('||---------------------------------||');
}
//------------------Ppu average and sum ----------//
var sum= array2.reduce((a, b) => a + b, 0);
console.log('The sum of ppu is = ' + sum);
console.log('The average of ppu is = ' + sum/array2.length);

//-------------list of all ID's --------------//
console.log('---------|list of all IDs|-------------');
//primary IDs :
console.log('||-------List of primary IDs-------||');

for (let s = 0 ; s < saleh.length ; s++){
    console.log(saleh[s].id);
    ids.push(saleh[s].id);

}
//topping IDs :
let topping_id;
console.log('||-------List of topping IDs-------||');
for (i = 0; i < saleh.length; i++) {
    for (j = 0; j < array[i] ; j++ ) {
        topping_id = saleh[i].topping[j].id;
        console.log(topping_id);
        ids.push(saleh[i].topping[j].id);

    }
    console.log('||---------------------------------||');
}
//batter IDs :
console.log('||-------List of batter ID-------||');
for (let i = 0; i < saleh.length; i++) {
    for (let j = 0; j < array1[i]; j++) {
        console.log(saleh[i].batters.batter[j].id);
        ids.push(saleh[i].batters.batter[j].id);

    }
    console.log('||---------------------------------||');
}
//-----------||to console all id with duplicate||------------//

// for (let m = 0 ; m < ids.length ; m++){
//     console.log(ids[m]);
// }

// To remove duplicated elements
function list_ids(array){
    var IDS = [];
    for(let i=0; i < array.length; i++){
        if(IDS.indexOf(array[i]) === -1) {
            IDS.push(array[i]);
        }
    }
    return IDS;
}
var list_of_ids = list_ids(ids);
console.log(list_of_ids);