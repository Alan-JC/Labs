function getFormvalue () {

    event.preventDefault();

    const formulario = document.getElementById("form1");



    const nombre = formulario.elements["fname"].value ;
    const apellido = formulario.elements["lname"].value ;


    console.log ("Tus datos son:");
    console.log ("Nombre:", nombre);
    console.log ("Apellido:", apellido);



}