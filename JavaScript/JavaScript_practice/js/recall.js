//재귀함수

let fun = (n) => {

    let fac = 1;

    for (let i = 1; i <= n; i++) {
        fac = fac * i;
        console.log(fac)
        //1
        //2
        //6
        //24

    }
    return fac;
}
console.log('최종값: ', fun(4)); // 24


let fun2 = (n) => {
    if (n > 1) {

        return n * fun2(n - 1);
    } else {
        return 1;
    }
    
};
console.log(fun2(6)); //
//6*5*4*3*2*1 = 720