/*const contact = {
*    "forename": "Ash",
*    "surname": "Springs",
*    "fullName": function () {
*        return "Ash Springs"
*    }
*}

*let ashSpringsFullName = contact.fullName;

*console.log (ashSpringsFullName());
*console.log (ashSpringsFullName);
*/

/* Funcionamiento Math
* es herramienta de mates
*/

function funcionamientoMath(){
    const numeroRandom = Math.random();
    console.info (numeroRandom);
    console.info(Math.PI);

}


function functionStrings(){
    let nombre = "anita";
    console.info(nombre.toUpperCase());
    console.info(nombre.charAt(1));
    for (let i=0; i <=nombre.length;i++){
        console.log(nombre.charAt(i)); 

    }
    console.info(nombre.substring(2,nombre.length));

    let numero2 = 2343;
    console.info (typeof numero2);
    console.info (typeof numero2.toString());
    numero2=numero2.toString();
    console.info

}

let contact = {
    "forename": "Ash",
    "surname": "Dprings",
    "fullName": function () {
        return this.forename + " " + this.surname
    }

};

console.log(contact.fullName());

function Producto(nombre, precio ) {
    this.nombre = nombre;
    this.precio = precio;

    this.mostrarInfo = function() {
        return this.nombre + "va en la posición " + this.precio;
    };
}

//crear 3 productos:

const producto1 = new Producto ("Mercedez ", 1);
const producto2 = new Producto ("Ferrari ", 2);
const producto3 = new Producto ("McLaren ", 3);

//Después:

console.log(producto1.mostrarInfo())
console.log(producto2.mostrarInfo())
console.log(producto3.mostrarInfo())