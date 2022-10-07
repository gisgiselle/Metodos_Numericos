class ChiCuadrada{
     Ho= "Muestra proviene de la distribución"
     Hi = "Muestra NO proviene de la distribución"

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



    pruebaChiCuadrada(muestra){
        var sum = 0
        var tabla_init = [] 
        var tabla_red = []
        var sumF0 = 0

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
                tabla_red.push([rango_clase,f0abs])
             }
            
        }
        tabla_red.push([rangoC2,sumF0])

        for(var i = 0; i <= muestra.length; i++) {

            //Restar cada frecuencia esperada menos
            // cada frecuencia observado FO[i]-FE[i]

            //Elevar al cuadrado la resta (FO[i]-FE[i]))^2

            //Dividir entre el valor esperado de la tabla 
            //con v grados de libertad: v=(k-1) y significancia alpha


        }
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
obj.pruebaChiCuadrada(muestra)