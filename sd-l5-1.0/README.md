Instrucciones

Los módulos son archivos separados que sirven para contener código y datos. Puedes elegir importar todo el contenido o especificar qué quieres importar.

¡Hoy vas a escribir código que utiliza módulos!

Las clases, objetos y funciones de cada una de estas tareas serán importados en index.js. ¡Deben tener nombres específicos!

Tareas
1. Maria está calculando el costo de los pagos mensuales.

Por cada transacción hay una comisión de $3 y una comisión de interés del 1% (0.01).

Dado un monto de transacción como entrada, exporta una función que devuelva cuánto debería pagar.
Esta función debe poder:
Recibir un número como entrada.
Devolver un número como resultado.
3. Ed quiere una forma de introducir los nombres de tres de sus amigos.
Exporta una clase que reciba 3 argumentos para construir un objeto con 3 propiedades.
Las 3 propiedades del constructor deben llamarse:
name1
name2
name3
4. Ed quiere una forma de calcular una edad a partir de una fecha de nacimiento.
Exporta una función que reciba 3 argumentos:
año
mes
día
Después debe devolver la edad correcta.

Por ejemplo:

ageCalculator(2000, 12, 25)

debería devolver la edad de una persona nacida el día de Navidad de 2000, es decir, el 25 de diciembre de 2000.

5. Ed quiere una forma de calcular las edades de sus amigos.
Exporta una clase que devuelva un string que contenga el nombre y la edad de un amigo.

Debe:

Recibir 4 argumentos:
name (nombre)
year (año)
month (mes)
day (día)
Construir un objeto con esas 4 propiedades.
Tener un método público llamado returnAge() que devuelva el siguiente string:

<name> is <age> today!

Por ejemplo:

Alan is 18 today!

Tareas extra

Si ya completaste las tareas anteriores, ¡intenta hacer las siguientes tareas adicionales!

5. Un profesor quiere crear una rúbrica para calificar estudiantes basándose en una puntuación del 0 al 11.
Un estudiante aprueba si obtiene una puntuación mayor o igual a 5.
Exporta una función que devuelva "Pass" o "Fail".
6. El profesor también quiere marcar a los estudiantes que obtengan una puntuación alta de 9 o más.
Modifica la función para que devuelva "Excellent" cuando la puntuación sea mayor que 8.
7. El profesor también quiere marcar a los estudiantes que obtengan una puntuación perfecta de 11.
Modifica la función para que devuelva "Perfect" cuando la puntuación sea 11.