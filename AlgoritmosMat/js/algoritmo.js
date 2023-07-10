    do{
        var opcion=parseInt(prompt("Digite 1 si desea visualizar digitos del 0 al 9; 2 si desea operar dos números; 3 si desea conocer el perimetro de un cuadrado; 4 si desea conocer el valor absoluto de un número"))
    if(opcion!=1 && opcion!=2 && opcion!=3 && opcion!=4){
        alert("Digite 1,2,3 o 4")
    }
    }while(opcion!=1 && opcion!=2 && opcion!=3 && opcion!=4)

    switch(opcion){
        case 1:
            let vector=[]
            var acum=""
            for(i=0;i<=9;i++){
                acum=acum + " | " + i
            }
            alert(acum + " | ")
        break
        case 2:
            var numuno=parseInt(prompt("Digite el primer número"))
            var numdos=parseInt(prompt("Digite el segundo número"))
            do{
                var opcionoperar=parseInt(prompt("Digite 1 si desea sumar los números; 2 si desea restarlos; 3 para multiplicarlos; 4 para dividirlos"))
            if(opcionoperar!=1 && opcionoperar!=2 && opcionoperar!=3 && opcionoperar!=4){
                alert("Digite 1,2,3 o 4")
            }
            }while(opcionoperar!=1 && opcionoperar!=2 && opcionoperar!=3 && opcionoperar!=4)
            switch(opcionoperar){
                case 1:
                    var suma=numuno+numdos
                    alert ("La suma es "+suma)
                    break
                case 2:
                    var resta=numuno-numdos
                    alert("La resta es "+resta)
                    break
                case 3:
                    var mult=numuno*numdos
                    alert("La multiplicación es "+mult)
                    break
                case 4:
                    if(numdos!=0){
                        var division=Math.round((numuno/numdos)*100)/100
                        alert("La división es "+division)
                    }
                    else{
                        alert("No es posible dividir por cero")
                    }
                    break
            }
            break
        case 3:
            do{
                var lado=parseInt(prompt("Digite la longitud del lado del cuadrado"))
            if(lado<=0){
                alert("Digite un número positivo para la longitud del lado del cuadrado")
            }
            }while(lado<=0)
            var perim=lado*4
            alert("El perimetro del cuadrado es "+perim)
            break
        case 4:
            var numero=parseInt(prompt("Digite un número"))
            if(numero>=0){
                var vlrabs=numero
            }
            else{
                var vlrabs=numero*(-1)
            }
            alert("El valor absoluto de " + numero + " es " + vlrabs)
            break
    }