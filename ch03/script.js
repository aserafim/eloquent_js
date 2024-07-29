/*
var imprimeNome = function(nome) {
    console.log(nome)
}

imprimeNome("Alefe")

for (i = 0; i < 10; i++) {
    var teste = "Nada"
    console.log(teste)
}
console.log(teste)

teste = "Novo"

console.log(teste)
*/

//Exercício 1
var getMin = function(x, y) {
    if (x > y) {
        return y
    } else return x
}

console.log(getMin(3,2))

//Exercício 2
var isEven = function(x) {
    if (x == 0) {
        console.log("É par.")
    } else if (x == 1) {
        console.log("É ímpar.")
    } else {
        return isEven(x - 2)
    }
}


isEven(4)

//Exercício 3