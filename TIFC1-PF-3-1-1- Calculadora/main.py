continuar = True

while continuar == True:
    
    a = float(input ("Ingresa primer numero: "))
    b = float(input ("Ingresa segundo numero: "))
    c = input ("Elige una operación: + - / x: ")
    d = a+b
    e = a-b
    f = a/b
    g = a*b


    if c == "+" :
        print (d)
    elif c == "-" :
        print (e)
    elif c == "/" :
        print (f)
    else:
        print (g)
    
    respuesta = input ("Otra operación? si / no")
    
    if respuesta == "no":
        continuar = False
    else:
        continuar = True
        
        