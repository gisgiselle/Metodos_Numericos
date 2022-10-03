function congruencialLineal(x, a, c, mod){
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

}

congruencialLineal(4,5,7,8)