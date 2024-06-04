//% modulo pour diviser par un chiffre
for (let j = 1; j <= 100 ; j++){
    fizzBuzz(j);
}

function fizzBuzz (i){
    //COmparer si la valeur de 'i' est divisible par 3 ou (||) par 5
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    //Savoir si la valeur 'i' est divisible par 3 OU si sur ce nombre le string comporte un 3
    } else if (i % 3 === 0 || i.toString().includes('3')){
        console.log(i + " Fizz");
    //Savoir si la vlaleur 'i' est divisible par 3 OU si sur ce nombre le string 
    //(grace a toString qui change un objet en chaine de caractère) comporte un 5
    } else if (i % 5 === 0 || i.toString().includes('5')){
        console.log(i + " Buzz");
    } else {
        console.log(i + " ok");
    }
}