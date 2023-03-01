const kwan = new Map([[5, 2]]);
console.log(kwan);
//Map(1) {5 => 2}

kwan.set('kwan', (1 == 1));
console.log(kwan);
// Map(2) {5 => 2, kwan => true}


/*한번에 여러개 Map 생성*/
let dong = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log(dong)
//Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}


/*Object.fromEntries()는 객체 생성*/
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

console.log(prices['meat']);
//4
