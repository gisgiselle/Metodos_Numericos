
    function squareCenterMethod(seed){
        alert("calculando centros")
        /*diccionario que recibe como llave el número aleatorio
        funciona para identificar en qué momento se repite un número aleatorio
        y así detener el loop v*/
        var randomNumbersDict = {}

        /*Recibe una semilla y la eleva al cuadrado, obteniendo un número
         de 8 dígitos. Se le quitan 2 números de la izquierda y 2 de la derecha.
         El número reducido es la nueva semilla. 
         Si el número aleatorio obtenido ya se encuentra en el diccionario, 
         se le asigna el valor de 2 y se termina el loop
         */
        while (randomNumbersDict[seed] == 1 || randomNumbersDict[seed] == null){   
            var generator = Math.pow(seed, 2)

            if (String(generator).length < 8){
            generator = String(generator).padStart(8,'0')
            }
            
            let changeToArray = num => Number(num)
            var seedArray = Array.from(String(generator),changeToArray)
            
            //Elimina primeros dos dígitos 
            generator = seedArray.slice(0,-2)
            //Elimina los dos últimos digitos
            generator = seedArray.splice(2,4)
            
            var randomNumber = Number(generator.join(''))

            var Ri = randomNumber/10000

            

            if(randomNumber in randomNumbersDict == false){
                randomNumbersDict[randomNumber]=1
                
            }else {
                randomNumbersDict[randomNumber]=2

                return randomNumber

                
            }    
            console.log(randomNumber)

            seed = randomNumber
           

        }
    }


//const obj = new CentrosCuadrados()
//obj.squareCenterMethod(3547)
