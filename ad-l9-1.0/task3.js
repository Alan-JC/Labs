
const boton = document.createElement('button');
boton.textContent = 'Mostrar información de enlaces';
boton.style.margin = '20px 0';
document.body.appendChild(boton);


function mostrarInfoEnlaces() {
  
  const enlaces = document.querySelectorAll('a');
  
  if (enlaces.length === 0) {
    alert("No se encontraron enlaces en la página.");
    return;
  }

  
  const totalEnlaces = enlaces.length;
  const primerEnlace = enlaces[0].href;
  const ultimoEnlace = enlaces[enlaces.length - 1].href;

  
  alert(
    `Número total de enlaces: ${totalEnlaces}\n` +
    `Primer enlace (URL): ${primerEnlace}\n` +
    `Último enlace (URL): ${ultimoEnlace}`
  );
}


boton.addEventListener('click', mostrarInfoEnlaces);
