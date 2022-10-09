class ChiCuadrada{
     Ho= "Muestra proviene de la distribución"
     Hi = "Muestra NO proviene de la distribución"

    modelo_teorico = {
        uniforme:0,
        binomial:1,
        geometrica:2,
        poisson:3,
        exponencial_negativa:4,
        normal:5

     }
     //** Función para redondear decimales a 5 Utilizada en pruebaChiCuadrada*/
    round5(x){
        var decimal = x - Math.floor(x)
        decimal = Math.round(decimal*10)

        if(decimal > 5){
            x = Math.round(x)
            return x
        }  
        else {
            x = Math.floor(x) + 0.5
            return x
        } 
     }
    
    //** Función para calcular el factorial de un número */
    factorialRecursivo (n) { 
        if (n == 0){ 
            return 1; 
        }
        return n * this.factorialRecursivo (n-1); 
    }

    pruebaChiCuadrada(muestra, modelo_teorico,alpha){
        var sum = 0
        var tabla_init = [] 
        var tabla_red = []
        var sumF0 = 0
        var sumRes = []

        //Ordenar frecuencias observables
        muestra.sort()
        //Obtener rango restando el valor máximo menos el mínimo 
        var rango = Math.max(...muestra)-Math.min(...muestra)
        //Regla empírica de Sturges para seleccionar el número de clases
        var k = 1 + 3.322 * Math.log10(muestra.length)
        //Redondear k hacia abajo
        k = Math.floor(k)

        var claseGen = this.round5(rango/k)
        var clase0 = 0.0
        var clase = 0.0
        var rango_clase = [0,0]
        var j = 0
        var clase0_helper = []
        var clase_helper = []
        var probabilidad = 0
        var fei = 0

        for (j; j < k ; j++){
            var f0abs = 0
            //Generar cada rango de clases 
            if(j == 0){
                clase = claseGen + clase0 
            }
            else {
                clase0 = clase 
                clase += claseGen          
            }
            rango_clase = [clase0,clase]

            //Contar cada numero que pertenece a una clase = F0 absoluta
            for (var n = 0; n < muestra.length ; n++) {
                if(muestra[n] >= clase0 && muestra[n] <= clase){
                    f0abs++
                }
            }
            
            tabla_init.push([rango_clase,f0abs])

            //Buscar valores con f0abs menor a la k para juntarlos
            if(f0abs < k){
                sumF0 += f0abs

                clase0_helper.push(clase0)
                clase_helper.push(clase)

                //reducir la tabla
                var rangoC2 = [Math.min(...clase0_helper),Math.max(...clase_helper)]
               

             }else{
                tabla_red.push([rango_clase,f0abs,0,0,0])
             }   
        }
        tabla_red.push([rangoC2,sumF0,0,0,0])

        const tabla_red_length = tabla_red.length

        //definir modelo teorico para sacar la probabilidad
        switch(modelo_teorico){
            //uniforme
            case 0:
                probabilidad = n / k

                for(var nm = 0; nm < tabla_red_length; nm++){
                    tabla_red[nm][2] = probabilidad
                }
                break;
            //binomial
            case 1:
                for(var nm = 0; nm < tabla_red_length; nm++){
                    var helper = n - tabla_red[nm][1] 
                    var nCx = this.factorialRecursivo(n) / (this.factorialRecursivo(tabla_red[nm][1][0]))*(this.factorialRecursivo(helper))

                    //FALTA CUAL SERIA LA PROBABILIDAD DE EXITOS
                    //probabilidad = nCx 
                    tabla_red[nm][2][0] = probabilidad
                }
                break; 

            //geometrica
            case 2:
                console.log("")   
                break;

            //poisson    
            case 3:
                console.log("")   
                break;
            
            //exponencial negativa
            case 4:
                var tot_helper = 0
                var avg = 0.0
                var lambda = 0

                for(var i = 0; i < muestra.length; i++){ 
                        tot_helper += muestra[i] 
                }

                avg = tot_helper / muestra.length
                //lambda = 1/avg
                lambda = 0.5

                var proba_anterior = []

                for(var nm = 0; nm < tabla_red_length; nm++){
                    probabilidad = 1- (Math.E ** (-lambda*tabla_red[nm][0][1]))
                    probabilidad = Math.round(probabilidad * 1000) / 1000
                    let i = 0

                    while(i < proba_anterior.length){
                        probabilidad =  probabilidad -proba_anterior[i]
                        i++

                    }
                    proba_anterior.push(probabilidad)

                    tabla_red[nm][2] = probabilidad

                }

                for (let i = 0; i < proba_anterior.length-1; i += 1) {
                    sum += proba_anterior[i] 
                }

                sum = 1 - sum
                sum = Math.round(sum * 1000) / 1000

                tabla_red[tabla_red_length-1][2] = sum

                //FEI = PROBABILIDAD*MUESTRA.LENGTH
                var resta = 0.0
                var xi2 = 0.0
                for(var nm = 0; nm < tabla_red_length; nm++){
                    fei = tabla_red[nm][2] * muestra.length
                    tabla_red[nm][3] = Math.round(fei * 1000) / 1000

                    // cada frecuencia observado FO[i]-FE[i]
                    resta = tabla_red[nm][1]-tabla_red[nm][3]

                    //Elevar al cuadrado la resta (FO[i]-FE[i]))^2
                    xi2 = (resta **2)/tabla_red[nm][3]
                    tabla_red[nm][4] = Math.round(xi2 * 1000) / 1000

                }

                for(var i=0;i<tabla_red_length;i++){
                    for(var j=0;j<tabla_red[i].length;j++){
                     sumRes[j] = (sumRes[j] || 0) + tabla_red[i][j];                    
                     sumRes[j] = Math.round(sumRes[j] * 1000) / 1000

                    }
                }
                tabla_red.push(sumRes);


            }     

        //Dividir entre el valor esperado de la tabla 
        //con v grados de libertad: v=(k-1) y significancia alpha
        var grados = k -1
    


        //Cambiar nombre de columnas
        console.table(tabla_init)
        console.table(tabla_red)
    }
}

const obj = new ChiCuadrada()
muestra = [8.223,2.230,2.920,0.761,1.064,0.836,3.810,0.968,4.490,0.186,
    2.634,1.624,0.333,1.514,2.782,4.778,1.507,4.025,1.064,3.246,0.406,
    2.343,0.538,5.088,5.587,0.517,1.458,0.234,1.401,0.685,2.330,0.774,
    3.323,0.294,1.725,2.563,0.023,3.334,3.491,1.267,0.511,0.225,2.325,
    2.921, 1.702,6.426,3.214,7.514,0.334,1.849]
alpha = 0.05
obj.pruebaChiCuadrada(muestra, obj.modelo_teorico.exponencial_negativa,alpha)