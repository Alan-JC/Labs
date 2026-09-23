const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantas lineas quieres generar? ", (lineas) => {

  let resultados =[];
  let buzzWords = [
      "Kimi Antonelli",

  ]

  
    for (let i = 1; i <= Number(lineas) ; i++) {
    if (i % 3 ==0 && i % 5 == 0) {
      resultados.push("FizzBuzz");
    }
      else if (i % 5 == 0){
        resultados.push("Buzz");
      }
      else if (i % 3 == 0){
        resultados.push("Fizz");
      }
      else if (i % 7 ==0){
        resultados.push("Woof");
      }
      
      else {
        let esPrimo = true;

        if (i < 2) {
          esPrimo = false;
        }

        for (let divisor =2; divisor < i; divisor++){
          if (i % divisor == 0) {
            esPrimo = false;
            break;
          }
        }
        if (esPrimo && i % 2 != 0){
          resultados.push(buzzWords[0]);

        }
        else{
          resultados.push(i);
        }
        
      }
  
  }
    console.log(resultados);
  
    rl.close();
});

