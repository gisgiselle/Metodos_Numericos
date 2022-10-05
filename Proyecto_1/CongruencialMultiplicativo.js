/** Clase para generar números aleatorios entre 0 y 1.
 * 
 * @class
 * Utiliza el método congruencial multiplicativo*/
const { Module } = require("module")

  

class CongruencialMultiplicativo {
    /** Realiza el cálculo de números aleatorios 
     * utilizando la fórmula xi+1 = (a * xi)mod m
     * @param {int} x - Valor inicial o semilla
     * @param {int} a - Multiplicador
     * @param {int} mod - Módulo
     */
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
}

module.exports={
    CongruencialMultiplicativo,
}
/*const obj = new CongruencialMultiplicativo()
obj.congruencialMultiplicativo(4,5,8)*/