# Instrucciones

Las **clases** son una sintaxis alternativa para definir una **plantilla** para construir objetos. Al igual que las funciones constructoras, pueden utilizarse para construir objetos con su propio conjunto de propiedades y métodos. Al igual que los prototipos, también permiten que los objetos los **hereden**. Los **métodos constructores** de una clase se utilizan para crear una instancia de una clase. Los **métodos compartidos** son heredados por cada instancia.

**¡Hoy vas a definir clases, inicializar objetos con propiedades y trabajar con esas propiedades mediante métodos!**

En cada una de estas tareas, irás construyendo y mejorando tu solución a partir de la tarea anterior.

## Tareas

### 1.

Estás trabajando en código que se utilizará en un videojuego. Te han pedido crear una clase para objetos. Estos objetos se utilizarán para definir a los jugadores del juego. Cada jugador puede elegir su propio nombre, y estos objetos se utilizarán para almacenarlo.

* Modifica la clase `Player` para que acepte un **nombre** del jugador como argumento.

  * La clave de esta propiedad en el objeto resultante **debe ser** `name`. ¡Recuerda que **las computadoras son muy literales**!

### 2.

Ahora te han pedido mejorar tu código para que los objetos de los jugadores puedan definir tanto un nombre como un número de nivel.

* Modifica la clase `Player` para que acepte un nombre de jugador y un número de **nivel** en dos argumentos separados.

  * La clave de esta propiedad en el objeto resultante **debe ser** `level`. ¡Recuerda que **las computadoras son muy literales**!

### 3.

Ahora te han pedido incluir un método que muestre en la consola un mensaje anunciando que el jugador subió de nivel.

* Modifica la clase `Player` para que acepte un nombre de jugador y un número de nivel en dos argumentos separados.

* Después, define un método compartido llamado `info()` que imprima la siguiente cadena, reemplazando los dos valores:

  * `<name> has reached Level <level>!`

  * Un jugador llamado **Tara** que está en el nivel **6** debería producir:

    `Tara has reached Level 6!`

### 4.

Ahora te han pedido incluir un método para subir de nivel al jugador, aumentando su número de nivel en uno.

* Modifica la clase `Player` para que acepte un nombre de jugador y un número de nivel en dos argumentos separados.

* Después, define un método compartido `info()` que muestre la siguiente cadena:

  * `<name> has reached Level <level>!`

* Finalmente, define un segundo método compartido llamado `levelUp()` que **incremente** el nivel del jugador.

## Tareas adicionales

Si has completado las tareas anteriores, ¡intenta realizar estas tareas adicionales para **experimentar** un poco más!

### 5.

Experimenta permitiendo que el jugador suba de nivel dependiendo de los puntos de experiencia obtenidos.

* Un punto de experiencia es un **número**. El jugador debería subir de nivel cuando obtenga suficientes puntos de experiencia.

* Intenta agregar un método que permita al jugador obtener una determinada cantidad de puntos de experiencia.

* ¿Cuántos puntos de experiencia deberían provocar una subida de nivel? ¿Cómo puedes llevar el control de este número?

### 6.

Experimenta permitiendo que los objetos de jugadores creados se agreguen a un **array** de miembros del grupo.

* ¿Cómo debería identificarse un array de miembros del grupo en tu código?

* Intenta agregar métodos para añadir o eliminar objetos de jugadores de un grupo determinado.

### 7.

Experimenta permitiendo que el jugador tenga un inventario de objetos.

* Intenta agregar métodos para añadir o eliminar objetos del inventario.

* ¿Cómo puedes llevar el control de la cantidad de cada objeto? ¿Qué **estructura de datos** necesitarías para esto?
