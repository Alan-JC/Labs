def addmultiplenumbers(lista):
    return sum(lista)


def multiplymultiplenumbers(lista):
    resultado = 1

    for numero in lista:
        resultado = resultado * numero

    return resultado


def isiteven(num):
    if num == int(num) and num % 2 == 0:
        return True
    else:
        return False


def isitaninteger(num):
    if num == int(num):
        return True
    else:
        return False


def main():

    continuar = True

    while continuar == True:

        a = float(input("Ingresa primer numero: "))
        b = float(input("Ingresa segundo numero: "))

        c = input("Elige una operación: + - / x: ")

        if c == "+":
            resultado = addmultiplenumbers([a, b])
            print(resultado)

        elif c == "-":
            resultado = a - b
            print(resultado)

        elif c == "/":
            resultado = a / b
            print(resultado)

        elif c == "x":
            resultado = multiplymultiplenumbers([a, b])
            print(resultado)

        else:
            print("Operación no válida")

        respuesta = input("Otra operación? si / no     ")

        if respuesta == "no":
            continuar = False
        else:
            continuar = True


if __name__ == "__main__":
    main()