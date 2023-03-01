function solution(n, k) {

    let answer = 0;
    let ggo = 12000;
    let soda = 2000;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= k; k++) {
            soda = soda * j;
        }
        ggo = ggo * i;
    }
    return answer = ggo+soda;
}

console.log(solution(3, 5));