function congruencialMultiplicativo(x, a, mod){
    period = 0
    flag = 0
    ri = 0
    sum = 0
    arr = []


    while (flag != x){
        if(flag == 0){
            flag = x
        }
        x = (a *x ) % mod
        console.log('x: '+x) 
        arr.push(x)
        //console.log('array '+arr)
        period += period

        ri = x/mod
        console.log('Ri: '+ri) 

    }
    return arr

}

function conguencialCombinadoMalo(x,y,ax,ay,modx, mody,k){
    sum = 0
    //A===B (mod C)
    //A mod C = B mod C
    for(var j = 1; j < k; j++){
        var xn = congruencialMultiplicativo(x,ax,modx)
        var yn = congruencialMultiplicativo(y,ay,mody)
        console.log('xn: '+xn[j-1])
        console.log('yn: '+yn[j-1])

        console.log('----- ajkwr '+wn)
        sum += ((-1)**(j-1))(xn)
    }
}

function congruencialCombinado(x,a,mod,k){
    var yi = 0
    var sum = 0
    var zi = 0
    
    for(var j = 0; j < k; j++) {
        console.log('X EN COMBINADO ES '+x)
        yi = congruencialMultiplicativo(x,a,mod)
        yi[j] = yi[j]*(-1)**(j)

        console.log('sumanding '+sum + ' '+yi[j])

        sum += yi[j]
    }
    mod--
    zi = sum %(mod)
    console.log('zi: '+zi)

}

congruencialCombinado(15,35,64,2)

