let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
let arr3 = [7, 8];

//concat(= 배열합치기)
//주어진 배열이나 값을 기존 배열에 합쳐서 새 배열을 반환해주는 메소드
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

//push, unshift (= 배열에 항목 추가하기)

console.log(arr2.push("ffk")); //배열 끝에 항목 추가
// 3
console.log(arr2);
//[5, 6, 'ffk']

console.log(arr2.unshift("하이")); //배열의 앞에 항목 추가
console.log(arr2);
//['하이', 5, 6, 'ffk']
