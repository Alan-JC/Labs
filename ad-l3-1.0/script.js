function colorAzar (){
    const tresColores = ["#004cff", "#00c8ff", "#02d3c9" ];

    const posicionAleatoria = Math.floor(Math.random () * tresColores.length);
    const colorElegido = tresColores[posicionAleatoria];
    const titulo = document.firstElementById ("titulo-burger")
    titulo.style.color = colorElegido;



}