const numeros = Array.from({length: 100}, (_, index)=>index +1);
var qtdBuzz = 0;
var qtdFizzBuzz = 0;
var qtdFizz = 0;

// console.log(numeros);

//       deu errado esse codigo de baixo, queria fazer uma contagem mas ele ta somando tudo
const incrementador=(palavra) => {
    if (palavra = "Fizz") {
        qtdFizz++;
    } else if (palavra = "Buzz"){
        qtdBuzz++;
    }else{
        qtdFizzBuzz++;
    }
    }

numeros.map(numeros => {
    if(numeros % 3 == 0 && numeros % 5 == 0) {
        console.log("FizzBuzz");
        incrementador("FizzBuzz")        
    } else if (numeros % 3 == 0) {
        console.log("Fizz");
        incrementador("Fizz");
        }else if (numeros % 5 == 0) {
        console.log("Buzz");
        incrementador("Buzz");
    }else{
        console.log(numeros);
    }


});

console.log(qtdBuzz);