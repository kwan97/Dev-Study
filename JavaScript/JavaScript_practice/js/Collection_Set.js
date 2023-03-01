/*Set*/

/*중복 원소 검사*/
let arr = new Set();

arr.add(3);
arr.add('hi');
arr.add('hi'); 
arr.add('bye');
arr.add(true);
arr.add(false);

console.log(arr);
// Set(5) {3, 'hi', 'bye', true, false}

console.log(arr.size); // Collection에서는 length X, size O
// 5

let ran = [3,4,7,3,2,3,6,7]
let arr1 = new Set(ran)

console.log(arr1);
// Set(5) {3, 4, 7, 2, 6}

/*Set 루프돌기 (Iteration)*/
let arr2 = new Set(ran)

arr2.forEach(() => {
    console.log("hi");
    // hi 다섯번 출력
});

