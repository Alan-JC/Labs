const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantas lineas quieres generar? ", (lineas) => {

  

    for (let i = 1; i <= Number(lineas) ; i++) {
    if (i % 3 ==0 && i % 5 == 0) {
      console.log ("FizzBuzz")
    }
      else if (i % 5 == 0){
        console.log ("Buzz")
      }
      else if (i % 3 == 0){
        console.log ("Fizz")
      }
      else if (i % 7 ==0){
        console.log("Woof")
      }
      else {
        console.log(i);
      }

  }

  
    rl.close();
});

