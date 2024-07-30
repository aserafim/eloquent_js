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