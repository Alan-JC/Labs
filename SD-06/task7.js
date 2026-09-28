const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Car(marca, modelo, año, color, puertas, kilometraje, motor) {

    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.puertas = puertas;
    this.kilometraje = kilometraje;
    this.motor = motor;

}

rl.question("Marca: ", (marca) => {

    rl.question("Modelo: ", (modelo) => {

        rl.question("Año: ", (año) => {

            rl.question("Color: ", (color) => {

                rl.question("Número de puertas: ", (puertas) => {

                    rl.question("Kilometraje: ", (kilometraje) => {

                        rl.question("Tipo de motor (combustión/eléctrico): ", (motor) => {

                            const car = new Car(
                                marca,
                                modelo,
                                Number(año),
                                color,
                                Number(puertas),
                                Number(kilometraje),
                                motor
                            );

                            console.log(car);

                            rl.close();

                        });

                    });

                });

            });

        });

    });

});