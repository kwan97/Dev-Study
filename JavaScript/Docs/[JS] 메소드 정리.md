# **[JavaScript] 주요 메소드 정리**

## **# 메소드 종류**
<br>

## ***sort()**
- 배열 요소들을 정렬시키는 메소드

- 기존 배열을 변경시킨다.
```javascript
let arr = [1,5,3,6,2];

arr.sort((a, b) => {
    
    return a - b; 
    //오름차순 정렬

    return b - a; 
    //내림차순 정렬
})
```
> js파일 참고할것

<br>

## ***concat() == 배열 합치기**
- 인자로 주어진 배열이나 문자열을 하나의 배열 or 문자열로 합쳐준다.

- 기존 배열을 변경하지 않고, 새 배열로 반환한다.

```javascript
let arr1 = [1, 2];
let arr2 = [5, 6];
let arr3 = [7, 8];

console.log(arr1.concat(arr2)); //새 배열로 반환, 기존 배열과는 다른것임.
// [1, 2, 5, 6];

console.log(arr1.concat(arr2, arr3)); 
// [1, 2, 5, 6, 7, 8];

console.log(arr1); // [1, 2]
console.log(arr2); // [5, 6]
console.log(arr3); // [7, 8]
```
<br>

## ***push(), unshift() == 배열 요소 추가하기**
-  push(): 배열 끝에 요소 추가

- unshift(): 배열 앞에 요소 추가

(두 메소드의 반환값은 배열의 length(=크기)이며, 기존 배열을 변경시킨다.)

```javascript
let arr = ['가', '나', '다'];

console.log(arr.push('라')); // 4
console.log(arr); // ['가', '나', '다', '라']

console.log(arr.unshift('마')); // 5
console.log(arr); // ['마', '가', '나', '다', '라']
```
<br>

## ***pop(), shift() == 배열에서 요소 제거하기**
- pop(): 배열 끝에 요소 제거

- shift(): 배열 앞에 요소 제거

(두 메소드의 반환값은 제거 요소이며, 기존 배열을 변경시킨다.)

```javascript
let arr = ['가', '나', '다'];

console.log(arr.pop()); // 다
console.log(arr); // ['가', '나']

console.log(arr.shift()); // 가
console.log(arr); // ['가']
```
<br>

## ***splice() == 배열 요소 추가 or 교체 or 삭제**
- 기존 배열을 변경시키고, 변경된 배열을 반환한다.

```javascript
// 예시)
// test.splice(배열 변경 시작 인덱스 지정 , 지정한 인덱스부터 삭제할 요소 수, 추가할 요소 값)
// 추가할 요소값에 아무것도 적지 않으면 삭제까지만 진행한다.(아무 지장 없음), (단순 삭제용으로만 사용 가능)
let arr = ['가', '나', '다', '라'];

/*삭제 후 추가*/
console.log(arr.splice(2, 1, '마')); // ['다']
console.log(arr); 
// ['가', '나', '마', '라']

/*추가만*/
console.log(arr.splice(1, 0, '바')); // 숫자 0으로 적으면 삭제 기능 off
console.log(arr); 
// ['가', '바', '나', '마', '라']

/*삭제만*/
console.log(arr.splice(0, 2)); // ['가', '바']
console.log(arr); 
// ['나', '마', '라']
```
<br>

## ***slice()**
- 배열의 일부분으로 새로운 배열 만들 때 사용

- 기존 배열을 변경시키지 않고, 새 배열을 반환

```javascript
let arr = [1,2,3,4,5];

// slice(시작할 인덱스 지정, 인덱스 위치 -1을 한 자리에서 끝)
console.log(arr.slice(2 , 5)) // (2 , 5 - 1 = 4)
// [3, 4, 5]
```
<br>

## ***filter()**
- 조건을 만족하는 요소들로 새로운 배열을 만들 때 사용

- 배열 내에서 원하는 요소들만 필터링할 수 있는 유용한 메소드
- 기존 배열을 변경시키지 않고 새 배열로 반환

```javascript
let test = [1 , 2 , 3 , 4 , 5 , 6 , 7];
let testResult = [];

testResult = test.filter(n) => {
    return n > 4;
}

console.log(testResult); //[5 , 6 , 7]
console.log(test); //[1 , 2 , 3 , 4 , 5 , 6 , 7]
```
<br>

## ***map()**
- 배열에 있는 모든 요소들의 값을 변경해서 새로운 배열을 사용해야 할 때 사용(반복문의 기능 대체 가능)

- 함수를 실행한 결과로 새로운 배열 만들 때도 사용
- filter()와 유사하지만 차이점으로는 필터링이 목적이 아닌 새로운 값을 만들어서 return하는 용도
- 기존 배열을 변경시키지 않고, 새 배열을 반환

> **map()메소드는 콜백 함수를 이용해 각각의 요소에 호출해서 그 값을 변환해주는데<br>
> 즉, 콜백함수는 배열의 각 요소에 실행된다.**

```javascript
let arr = [1 , 2  ,3 , 4 , 5];
let arrResult = [];

/*반복문으로 배열 요소들 하나씩 값 변경하기*/
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3;
}
console.log(arr);
// [3, 6, 9, 12, 15]


/* map()메소드로 배열 요소들 값 변경하기*/
arrResult = arr.map((n) => { 
    return n ** 2; // ** = 제곱, n == arr[]
});
console.log(arrResult);
// [1, 4, 9, 16, 25]
```
<br>

## ***join()**
- 배열을 문자열로 바꿔 결합시키기

- 기존 배열을 변경시키지않고, 새 배열로 반환

```javascript
let arr = [1 , 2 , 3 , 4 , 5];

console.log(arr.jonin()); //1,2,3,4,5
console.log(arr.join('-')); //1-2-3-4-5
console.log(arr.join('')); //12345
```
