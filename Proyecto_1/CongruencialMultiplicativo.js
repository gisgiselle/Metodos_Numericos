function congruencialMultiplicativo(x, a, mod){
    period = 0
    flag = 0
    ri = 0

    while (flag != x){
        if(flag == 0){
            flag = x
        }
        x = (a *x ) % mod
        console.log('x: '+x) 
        period += period

        ri = x/mod
        console.log('Ri: '+ri) 

    }

}