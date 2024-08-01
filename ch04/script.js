//Exercício 1

var range = function(start, end){
    lista = []
    for (i = start; i <= end; i++){
        lista.push(i);
    }
    return lista
}

//console.log(range(1,10));

var sum = function(array){
    total = 0;
    for (i = 0; i <= array.length - 1; i++){
        total += array[i]
    }
    return total
}

//console.log("A soma total é: ", sum(range(1,10)));

var rangeWithIncrement = function(start, end, inc){
    lista = []

    if (inc == undefined) {
        inc = 1;
    }

    value = start + inc;

    for (i = start; i <= end; i++) {
        lista.push(value);
        value = value + inc;
    }
    return lista
}

//console.log(rangeWithIncrement(1,10,-2))

function reverseArray(array) {
    newArray = [];
    j = 0;
    for(i = array.length - 1; i >= 0; i--) {
            newArray[j] = array[i];
            j += 1;
    }
    return newArray;
}

//console.log(reverseArray([1,2,3]))

/* function reverseArrayInPlace(array) {
    temp = array.length - 2
    for(i = 0; i <= array.length - 1; i++) {
        if(temp >= 0){
            array[length - 1] =  array[length - 2]
            array[array.length - 2] = array[temp]
            temp -= 1
        }
    }
}

console.log(reverseArrayInPlace([1,2,3])) */

var list = {
    value : 1,
    rest : {
        value : 2,
        rest : {
            value : 3,
            rest: null
        }
    }
}


var element1 = {
    value : 1,
    rest : null
}

var element2 = {
    value : 2,
    rest : null
}

list = []

list.push(element1)

console.log(element1)

