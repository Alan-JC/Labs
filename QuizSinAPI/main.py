
pilotos = {
    1: "Lando Norris, se convirtió en campeón del mundo de F1 en 2025 después de una intensa pelea por el título y en 2026 lleva el número 1 como vigente campeón",
    3: "Max Verstappen, es cuatro veces campeón del mundo y consiguió sus cuatro títulos consecutivos entre 2021 y 2024",
    5: "Gabriel Bortoleto, ganó los campeonatos de Fórmula 3 y Fórmula 2 antes de llegar a la Fórmula 1, algo que demuestra lo rápido que avanzó por las categorías",
    6: "Isack Hadjar, consiguió su primer podio en Fórmula 1 en 2025 y se convirtió en uno de los pilotos jóvenes más destacados de la parrilla",
    10: "Pierre Gasly, consiguió una de las victorias más sorprendentes de los últimos años cuando ganó el Gran Premio de Italia de 2020 con AlphaTauri",
    11: "Sergio Pérez, hizo historia al convertirse en el primer piloto mexicano en ganar el Gran Premio de Mónaco, una de las carreras más importantes de la Fórmula 1",
    12: "Kimi Antonelli, llegó a la Fórmula 1 siendo todavía muy joven y consiguió convertirse en uno de los pilotos más jóvenes de la historia en ganar un Gran Premio",
    14: "Fernando Alonso, es bicampeón del mundo y además es uno de los pilotos con más Grandes Premios disputados en toda la historia de la Fórmula 1",
    16: "Charles Leclerc, eligió el número 16 porque nació el 16 de octubre y, además, la suma de 1 + 6 da 7, su número de la suerte",
    18: "Lance Stroll, consiguió subir al podio durante su temporada de debut en 2017, convirtiéndose en uno de los pilotos más jóvenes en lograrlo",
    23: "Alex Albon, nació en Londres, pero compite representando a Tailandia por la nacionalidad de su madre, convirtiéndose en uno de los pocos pilotos que representan a ese país",
    27: "Nico Hülkenberg, tuvo que esperar muchos años y más de 200 Grandes Premios para conseguir finalmente su primer podio en Fórmula 1",
    30: "Liam Lawson, debutó en Fórmula 1 como sustituto de Daniel Ricciardo en 2023 y logró sumar puntos durante sus primeras carreras en la categoría",
    31: "Esteban Ocon, consiguió su primera victoria en Fórmula 1 en el Gran Premio de Hungría de 2021 después de una carrera llena de incidentes",
    41: "Arvid Lindblad, llegó a la Fórmula 1 en 2026 como uno de los pilotos más jóvenes de la parrilla y representa a una nueva generación de talentos",
    43: "Franco Colapinto, se convirtió en el primer piloto argentino en volver a puntuar en Fórmula 1 desde Carlos Reutemann, devolviendo a Argentina a los puntos de la categoría",
    44: "Lewis Hamilton, es siete veces campeón del mundo y ha utilizado el número 44 durante prácticamente toda su carrera en Fórmula 1",
    55: "Carlos Sainz, consiguió su primera victoria en Fórmula 1 en el Gran Premio de Gran Bretaña de 2022, después de haber conseguido varios podios previamente",
    63: "George Russell, consiguió su primera victoria en Fórmula 1 en el Gran Premio de Brasil de 2022, después de ganar también la carrera sprint de ese mismo fin de semana",
    77: "Valtteri Bottas, eligió el número 77 porque le gustaba la idea de jugar con su apellido, creando el concepto 'BO77AS', y durante su carrera ha conseguido 10 victorias en F1",
    81: "Oscar Piastri, ganó los campeonatos de Fórmula 3 y Fórmula 2 antes de llegar a la F1, y consiguió hacerlo en temporadas consecutivas",
    87: "Oliver Bearman, debutó oficialmente en F1 con Ferrari en 2024 y consiguió puntos en su primera carrera, a pesar de haber sido llamado al equipo con muy poca anticipación", 
       
}



def trivia_fetch(num):
    dato = pilotos.get(num)
    if dato is None:
        dato = "No existe este piloto en la parrilla"
        
    trivia = {
        "number": num,
        "text": dato
    }

    return trivia


def main():
  nombre = input (" Cual es tu nombre? ")
  edad = input ("Cual es tu edad? ")
  escuderia = input("Cual es tu escuderia preferida? ")
  razon = input("Por que es tu escuderia preferida? ")
  
  print("Hola FIAS", nombre, " veo que tu edad es ", edad, "y tu escuderia favorita es ", escuderia, "y la razón es ", razon )
  numero_fav = int(input("¿Cual es tu numero favorito? "))
  print (numero_fav)
  resultado =trivia_fetch(numero_fav)
  
  print(resultado["text"])
  



if __name__ == "__main__":
    main()
    
