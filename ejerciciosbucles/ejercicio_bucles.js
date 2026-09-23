// Contador 1-10

let n = 1;
for (let n = 1; n <= 10; n++) {
    console.log (n);
}

//contador 10-1

let n = 1;
for (let n = 10; n >= 1; n--) {
    console.log (n);
}

//impresión de numero pares
let n = 1;
for (let n = 1; n <= 20; n++) {
    if ( n % 2 ==0 ) {
        console.log (n)
    }
        else {
            console.log (" ");
        }
    }


//imoresion solo de numeros impares

let n = 1;
for (let n = 1; n <= 20; n++) {
    if ( n % 2 ==1 ) {
        console.log (n)
    }
        else {
            console.log (" ");
        }
    }


// fizz en multiplos de 3
let n = 1;
for (let n = 1; n <= 20; n++) {
    if ( n % 3 ==0 ) {
        console.log ("Fizz")
    }
        else {
            console.log (n);
        }
    }


// tablas
let numero = Number(prompt("¿que tabla quieres?"));

for (let i = 1; i <=10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i));
}