//Exercício 1
/*
char = "#"
for (i = 0; i<8; i++) {
    console.log(char);
    char += "#"
}
*/

//Exercício 2
/*
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz")
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz")
    } else if (i % 5 != 0 && i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
*/
//Exercício 3
space = " "
char2 = "#"
line1 = ""
line2 = ""
charLimit = 8
lineLimit = 4

for (i = 0; i < charLimit; i++) {
    if (i % 2 == 0){
        line1 += char2;
        line2 += space;
    } else {
        line1 += space;
        line2 += char2;
    }
}

for (i = 0; i < lineLimit; i++) {
    console.log(line1)
    console.log(line2)
}