class Kolmogrov_Smirnov {
    kolmogrov_smirnov(muestra){
        var tabla = []
        var sn = []
        var fx = []
        var fx2 = []
        var d = 0
        //Ordenar frecuencias observables
        //muestra.push(0)
        muestra.sort()
        console.log(muestra.length)
        for (var i=0; i < muestra.length ; i++){
            

            if(i == 0){
                var tot = (1/muestra.length)
                tot = Math.round(tot * 10000) / 10000
                sn.push(tot)
            }else{
                var tot = (1/muestra.length) +sn[i-1]
                tot = Math.round(tot * 10000) / 10000
                sn.push(tot) 
            }

            var div = (Math.abs(muestra[i]-sn[i]))
            div = Math.round(div * 10000) / 10000
            fx.push(div)
            
          
            var div2 = 0
            if(i == 0){
                div2 = (Math.abs(muestra[i]))
                
            } else {
                var resta = Math.abs(sn[i-1]-muestra[i])
                div2 = resta
            }
           
            div2 = Math.round(div2 * 10000) / 10000
            fx2.push(div2)


            
            
            
            tabla.push([muestra[i], sn[i],fx[i],fx2[i]])
            

        }
        

        var d_max = Math.max(...fx)

        var d_min = Math.max(...fx2)

        d = Math.max(d_max, d_min)

        var len = muestra.length
        tabla[0][4] = d_max
        tabla[1][4] = d_min
        tabla[2][4]= d

        console.table(tabla)
    }
}

const obj = new Kolmogrov_Smirnov()
muestra = [0.018,0.037,0.156,0.191,0.213,0.233,0.281,0.383,0.392,0.408,0.411,
            0.434, 0.469, 0.541, 0.553, 0.575, 0.598,0.668,0.671,0.711,0.719,
            0.73,0.77,0.791,0.819,0.826,0.894,0.914,0.984,0.995]
obj.kolmogrov_smirnov(muestra)