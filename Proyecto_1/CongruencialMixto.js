//funciones maximoComunDivisor y esPrimo obtenidas de https://parzibyte.me/blog/2019/10/04/javascript-numero-primo/
//import { congruencialLineal } from "./CongruencialLineal";

/** Clase para generar números aleatorios entre 0 y 1 utilizando
 * el método Congruencial Mixto
 * 
 * @class
 */
class CongruencialMixto {

    /** Obtiene el máximo comun divisor entre dos números
     * 
     * @param {int} a - Primer número
     * @param {int} b - Segundo número
     * @returns - Regresa el maximo comun divisor
     */
    maximoComunDivisor(a, b) {
        if (b === 0) return a;
        return this.maximoComunDivisor(b, a % b);
    };

    /** Verifica si un número es primo o no
     * 
     * @param {int} numero - Número a verificar
     */
    esPrimo(numero) {
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
        return true;
    }

    /** Validación del periodo completo del método congurencial mixto,
     * utilizando el Teorema de HULL-DOBELL
     * 
     * 
     * @param {*} c - Incremento primo relativo de m
     * @param {*} m - Módulo y primo relativo de c
     * @param {*} a - Multiplicador
     */

     hullDobellValidation(c,m,a){
        //Se obtiene q basándose en el módulo

        var q = this.getQ(m)


        /*Comprueba que A sea congruente con B de acuerdo con 
        la siguiente formula
        A===B (mod C)
        A mod C = B mod C */
        const congruenceCheck = (a % (q*q)) === (1%(q*q))

        /*El periodo es completo si y solo si 
            - c y m son primos relativos
            - Si a === 1modq
            - a === 1modn
        */
        if(this.maximoComunDivisor(c,m) ==1 && this.esPrimo(q) == true && (a % q)== (1%q) && congruenceCheck == true){
            console.log('Periodo es completo ') 
        }else{
            console.log('Periodo es incompleto ')
            console.log(a%q+ ' no es equivalente a: ' + 1%q)

        }

    }

    /** Se obtiene un número que divida al módulo sin residuos
     * 
     * @param {*} mod - Módulo
     * @returns número divisor
     */
    getQ(mod){
        var i = 2
        var num = 0

        while (mod % i != 0){
            i++
        }
        return i 
    }

    /** Genera números aleatorios
     * Tiene un periodo completo basado en el Teorema de Hull-Dobell
     * Se verifica el periodo en el método HullDobellValidation
     * 
     * @param {*} x - Valor inicial o semilla
     * @param {*} a - Multiplicador
     * @param {*} c - Incremento
     * @param {*} mod - Módulo
     */
    mixedMethod(x, a, c, mod){
        var period = 0
        var flag = 0
        var ri = 0
        
        /* Mientras la bandera no sea igual a x, entonces se va a seguir 
        realizando la fórmula con la x anterior
        */
        while (flag != x){
            if(flag == 0){
                flag = x
            }
            x = (a *x + c ) % mod
            console.log('x: '+x) 
            period += period

            ri = x/mod
            console.log('Ri: '+ri) 

        }
            //valida si se cumple con el Teorema de HULL-DOBELL
        this.hullDobellValidation(c,mod,a)
    }

    
}

const obj = new CongruencialMixto()
obj.mixedMethod(4,5,7,8)
