const titulo = document.getElementById ("Text");
const boton = document.getElementById ("jsstyle");

    boton.addEventListener ("click",() => {
            titulo.textContent="JavaScript #1";
            titulo.style.color = "blue";
            titulo.style.fontSize = '50px';
            
        }) ;
        