class ChiCuadrada{


    modelo_teorico = {
        uniforme:0,
        binomial:1,
        geometrica:2,
        poisson:3,
        exponencial_negativa:4,
        normal:5

     }

     tabla_alpha = {
        0.995:0,
        0.99:1,
        0.975:2,
        0.95:3,
        0.9:4,
        0.75:5,
        0.5:6,
        0.25:7,
        0.1:8,
        0.05:9,
        0.025:10,
        0.01:11,
        0.005:12
     }

     tablaChiTeorica = [
        [0.000, 0.000, 0.001, 0.004, 0.016, 0.102, 0.455, 1.323, 2.71, 3.84, 5.02, 6.63, 7.88],
        [0.01, 0.020, 0.050, 0.103, 0.211, 0.575, 1.386, 2.77, 4.61, 5.99, 7.38, 9.21, 10.60],
        [0.71, 0.115, 0.216, 0.352, 0.584, 1.213, 2.37, 4.11, 6.25, 7.81, 9.35, 11.34, 12.84],
        [0.207, 0.297, 0.484, 0.711, 1.064, 1.923, 3.36, 5.39, 7.78, 9.49, 11.14, 13.28, 14.86],
        [0.412, 0.554, 0.831, 1.145, 1.610, 2.67, 4.35, 6.63, 9.24, 11.07, 12.83, 15.09, 16.75],
    
        [0.676, 0.872, 1.237, 1.635, 2.20, 3.45, 5.35, 7.84, 10.64, 12.59, 14.45, 16.81, 18.55],
        [0.989, 1.239, 1.690, 2.17, 2.83, 4.25, 6.35, 9.04, 12.02, 14.07, 16.01, 18.48, 20.3],
        [1.344, 1.647, 2.18, 2.73, 3.49, 5.07, 7.34, 10.22, 13.36, 15.51, 17.53, 20.1, 22.0],
        [1.735, 2.09, 2.70, 3.33, 4.17, 5.90, 8.34, 11.39, 14.68, 16.92, 19.02, 21.7, 23.6],
        [2.16, 2.56, 3.25, 3.94, 4.87, 6.74, 9.34, 12.55, 15.99, 18.31, 20.5, 23.2, 25.2],
    
        [2.60, 3.05, 3.82, 4.57, 5.58, 7.58, 10.34, 13.70, 17.28, 19.68, 21.9, 24.7, 26.8],
        [3.07, 3.57, 4.40, 5.23, 6.30, 8.44, 11.34, 14.85, 18.55, 21.0, 23.3, 26.2, 28.3],
        [3.57, 4.11, 5.01, 5.89, 7.04, 9.30, 12.34, 15.98, 19.81, 22.4, 24.7, 27.7, 29.8],
        [4.07, 4.66, 5.63, 6.57, 7.79, 10.17, 13.34, 17.12, 21.1, 23.7, 26.1, 29.1, 31.3],
        [4.60, 5.23, 6.26, 7.26, 8.55, 11.04, 14.34, 18.25, 22.3, 25.0, 27.5, 30.6, 32.8],
    
        [5.14, 5.81, 6.91, 7.96, 9.31, 11.91, 15.34, 19.37, 23.5, 26.3, 28.8, 32.0, 34.3],
        [5.70, 6.41, 7.56, 8.67, 10.09, 12.79, 16.34, 20.5, 24.8, 27.6, 30.2, 33.4, 35.7],
        [6.26, 7.01, 8.23, 9.39, 10.86, 13.68, 17.34, 21.6, 26.0, 28.9, 31.5, 34.8, 37.2],
        [6.84, 7.63, 8.91, 10.12, 11.65, 14.56, 18.34, 22.7, 27.2, 30.1, 32.9, 36.2, 38.6],
        [7.43, 8.26, 9.59, 10.85, 12.44, 15.45, 19.34, 23.8, 28.4, 31.4, 34.2, 37.6, 40.0],
        
        [8.03, 8.90, 10.28, 11.59, 13.24, 16.34, 20.3, 24.9, 29.6, 32.7, 35.5, 38.9, 41.4],
        [8.64, 9.54, 10.98, 12.34, 14.04, 17.24, 21.3, 26.0, 30.8, 33.9, 36.8, 40.3, 42.8],
        [9.26, 10.20, 11.69, 13.09, 14.85, 18.14, 22.3, 27.1, 32.0, 35.2, 38.1, 41.6, 44.2],
        [9.89, 10.86, 12.40, 13.85, 15.66, 19.04, 23.3, 28.2, 33.2, 36.4, 39.4, 43.0, 45.6],
        [10.52, 11.52, 13.12, 14.61, 16.47, 19.94, 24.3, 29.3, 34.4, 37.7, 40.6, 44.3, 46.9],
    
        [11.16, 12.20, 13.84, 15.38, 17.29, 20.8, 25.3, 30.4, 35.6, 38.9, 41.9, 45.6, 48.3],
        [11.81, 12.88, 14.57, 16.15, 18.11, 21.7, 26.3, 31.5, 36.7, 40.1, 43.2, 47.0, 49.6],
        [12.46, 13.56, 15.31, 16.93, 18.94, 22.7, 27.3, 32.6, 37.9, 41.3, 44.5, 48.3, 51.0],
        [13.12, 14.26, 16.05, 17.71, 19.77, 23.6, 28.3, 33.7, 39.1, 42.6, 45.7, 49.6, 52.3],
        [13.79, 14.95, 16.79, 18.49, 20.6, 24.5, 29.3, 34.8, 40.3, 43.8, 47.0, 50.9, 53.7],
    
        [20.7, 22.2, 24.4, 26.5, 29.1, 33.7, 39.3, 45.6, 51.8, 55.8, 59.3, 63.7, 66.8],
        [28.0, 29.7, 32.4, 34.8, 37.7, 42.9, 49.3, 56.3, 63.2, 67.5, 71.4, 76.2, 79.5],
        [35.5, 37.5, 40.5, 43.2, 46.5, 52.3, 59.3, 67.0, 74.4, 79.1, 83.3, 88.4, 92.0],
        [43.3, 45.4, 48.8, 51.7, 55.1, 61.7, 69.3, 77.6, 85.5, 90.5, 95.0, 100.4, 104.2],
    
        [51.2, 53.5, 57.2, 60.4, 64.3, 71.1, 79.3, 88.1, 96.6, 101.9, 106.6, 112.3, 116.3],
        [59.2, 61.8, 65.6, 69.1, 73.3, 80.6, 89.3, 98.6, 107.6, 113.1, 118.1, 124.1, 128.3],
        [67.3, 70.1, 74.2, 77.9, 82.4, 90.1, 99.3, 109.1, 118.5, 124.3, 129.6, 135.8, 140.2],
    
        [-2.58, -2.33, -1.96, -1.64, -1.28, -0.674, 0.000, 0.674, 1.282, 1.645, 1.96, 2.33, 2.58],
    ]

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

    resultadoHipotesis(res_teorico, tabla_red){
        var res_observado = tabla_red[tabla_red.length-1][4]

        if(res_observado < res_teorico){
            console.log("HO: la muestra proviene de la distribución")
            return true
        }else{
            console.log("Ha la muestra no proviene de la distribución")
            return false
        }
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
        //renglones = v y columnas = alpha
        var grados = tabla_red.length -3
        //encontrar el indice de alpha
        var valor_chi_teorico = this.tablaChiTeorica[grados-1][alpha]

        //Cambiar nombre de columnas
        //console.table(this.tablaChiTeorica)
        console.table(tabla_init)
        console.table(tabla_red)

        this.resultadoHipotesis(valor_chi_teorico,tabla_red)

    }
}

const obj = new ChiCuadrada()
muestra = [8.223,2.230,2.920,0.761,1.064,0.836,3.810,0.968,4.490,0.186,
    2.634,1.624,0.333,1.514,2.782,4.778,1.507,4.025,1.064,3.246,0.406,
    2.343,0.538,5.088,5.587,0.517,1.458,0.234,1.401,0.685,2.330,0.774,
    3.323,0.294,1.725,2.563,0.023,3.334,3.491,1.267,0.511,0.225,2.325,
    2.921, 1.702,6.426,3.214,7.514,0.334,1.849]
alpha = 0.05



obj.pruebaChiCuadrada(muestra, obj.modelo_teorico.exponencial_negativa,obj.tabla_alpha[String(alpha)])
