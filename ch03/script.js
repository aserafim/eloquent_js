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
    if (x < 0) {
        console.log("Insira um valor maior ou igual a 0.")
    } else if (x == 0) {
        console.log("É par.")
    } else if (x == 1) {
        console.log("É ímpar.")
    } else {
        return isEven(x - 2)
    }
}


isEven(-1)

//Exercício 3.1
var countBs = function(text) {
    var counter = 0;
    for (i = 0; i <= text.length - 1; i++) {
        if (text.charAt(i) == "B") {
            counter += 1;
        }
    }

    return counter;
}

text = "Babaloo"
console.log(countBs(text))


//Exercício 3.2
var countChar = function(text, char) {
    var counter = 0;
    //console.log(text.length)
    //console.log(4 < text.length)
    for (i = 0; i < text.length; i++){
        if (text.charAt(i) == char){
            //console.log(i, text.charAt(i))
            counter += 1;
        }
    }
    return counter;
}

console.log(countChar("oooo", "o"))