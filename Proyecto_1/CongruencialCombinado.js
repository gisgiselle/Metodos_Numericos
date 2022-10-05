/** Clase que genera números aleatorios utilizando 
 * el método congruencial combinado.
  */
class CongruencialCombinado {
//Se requiere añadir funcionalidad para exportar el metodo de la clase congruencial multiplicativo
    congruencialMultiplicativo(x, a, mod){
        var period = 0
        var flag = 0
        var ri = 0
        var sum = 0
        var arr = []
    
        while (flag != x){
            if(flag == 0){
                flag = x
            }
            x = (a *x ) % mod
            arr.push(x)
            period += period
    
            ri = x/mod
    
        }
        return arr
    }

    /**
     * 
     * @param {*} x 
     * @param {*} a 
     * @param {*} mod 
     * @param {*} k 
     * @returns 
     */
    congruencialCombinado(x,a,mod,k){
        var yi = 0
        var sum = 0
        var zi = 0
        
        for(var j = 0; j < k; j++) {
            yi = this.congruencialMultiplicativo(x,a,mod)
            yi[j] = yi[j]*(-1)**(j)

            sum += yi[j]
        }
        mod--
        zi = sum %(mod)
        return sum, zi

        }
}
const obj = new CongruencialCombinado()
obj.congruencialCombinado(15,35,64,2)



