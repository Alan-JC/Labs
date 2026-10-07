document.getElementById("red").innerText = "Adiós";
document.getElementById("blue").style.color = "blue"; 
// 1. Buscamos y guardamos el encabezado en una variable
const tituloInteractivo = document.getElementById("encabezado-clic");

// 2. Le añadimos un "escuchador de eventos" para detectar el clic
tituloInteractivo.addEventListener("click", function() {
    // 3. Cambiamos el color de la fuente a marrón cuando se hace clic
    tituloInteractivo.style.color = "brown";
});
