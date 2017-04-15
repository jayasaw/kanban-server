var family = [
    { name: 'Anup', age: 30 },
    { name: 'Mummy', age: 54 },
    { name: 'Anvi', age: 5 },
    { name: 'Ishan', age: 4 },
    { name: 'Bandana', age: 24 },
    { name: 'Priyanka', age: 28 },
    { name: 'Papa', age: 58 },
    { name: 'Jaya', age: 26 }
]


family.filter(function (item, index, self) {

    if (item.age > 25) {
        return item;
    }

})


function filter(arr){

var temp = [];
for(var i =0; i < arr.length; i++){

    if(arr[i].age  > 25){
        temp.push(arr[i]);
    }
}

return temp;


}


// Map

family.map(function(item, index, slef){

    item.city = "pune";
    return item;
})
debugger;
function addCity(arr){

for(var i =0; i < arr.length; i++){

    arr[i].city = "Pune";
}

return arr;

}


var name = [{name:'anup'},{name:'jsr'}];

name.map(function(item,index,self){
    item.age = 20;
    return item;
})