function congruencialMultiplicativo(x, a, mod){
    period = 0
    flag = 0
    ri = 0
    sum = 0
    arr = []

    console.log('old x '+x);
    while (flag != x){
        if(flag == 0){
            flag = x
        }
       

        x = (a *x ) % mod
        console.log('x: '+x) 
        arr.push(x)
        period += period

        ri = x/mod
        console.log('Ri: '+ri) 

    }

}

