

function DogNames(string,list){

     matchedList = [];
     for(let i = 0; i < list.length; i++){

        if(string.includes(list[i])){
            matchedList.push(list);
        }
     }
     else{
        console.log("No Matches")
        console.log("Thats a damn cat")
     }

}

DogNames(string, list);


function indice_operation(array){

    for (let i = 1; i < array.length; i += 2){

        array.splice(i, 1, "even index");
    }
    return array;
}
console.log(indice_operation(array));