//funciones maximoComunDivisor y esPrimo obtenidas de https://parzibyte.me/blog/2019/10/04/javascript-numero-primo/
//import { congruencialLineal } from "./CongruencialLineal";

function maximoComunDivisor(a, b) {
    if (b === 0) return a;
    return maximoComunDivisor(b, a % b);
};

function esPrimo(numero) {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

function mixedMethod(x, a, c, mod){
   //congruencialLineal(x, a, c, mod)
   period = 0
   flag = 0
   ri = 0
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
    //validacion hull-dobell
   HullDobellValidation(c,mod,a)
}

function HullDobellValidation(c,m,a){
    q = getQ(m)
    //A===B (mod C)
    //A mod C = B mod C
    const congruenceCheck = (a % (q*q)) === (1%(q*q))
    if(maximoComunDivisor(c,m) ==1 && esPrimo(q) == true && (a % q)== (1%q) && congruenceCheck == true){
        console.log('Periodo es completo '+period) 
    }else{
        console.log('Periodo es incompleto '+period)
        console.log(a%q+ ' no es equivalente a: ' + 1%q)

    }

}

function getQ(mod){
    i = 2
    num = 0

    while (mod % i != 0){
        i++
    }
    return i 
}

mixedMethod(4,5,7,8)


