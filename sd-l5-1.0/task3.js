export function ageCalculator(año , mes, dia) {
    const hoy = new Date ();
    const añoActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();


    let edad = añoActual - año;
        if (mesActual < mes || (mesActual == mes && diaActual < dia)) {
            edad = edad -1
        }
            return edad;
    }         