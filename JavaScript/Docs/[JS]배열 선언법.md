# <strong>[JavaScript] 배열 선언</strong>

## <strong># 배열을 만드는 2가지 방식</strong>
- 대괄호(=[ ])를 사용한 선언
  
- new Array()를 사용한 선언

### <strong>* 대괄호(=[ ]) 선언법</strong>
```javascript
const arr1 = []; //빈 배열 선언법

const arr2 = ['apple','orange','banana']; //초기값 할당 배열 선언

const arr3 = ['apple', 1, true, [400,'banana']] //여러 종류의 타입값을 담아 선언 가능

const arr4 = [,,,]; // length= 3, 쉽표 개수만큼 배열 크기 지정, 배열 원소값= undefined
```
<br>

### <strong>* new Array()(=생성자 함수) 선언법</strong>
```javascript
const arr1 = new Array(); //length= 0, 파라미터(=매개변수)로 전달되지 않으면 비어있는 배열이다. 

const arr2 = new Array(3); //length= 3, 원소가 한개이고 숫자인 경우 배열 크기로 인식, 배열 원소값= undefined

const arr3 = new Array('apple','banana'); //length= 3, ['apple','banana'] 배열 생성
```

> <strong>Tip!</strong><br>[ ]선언법과 new Array()선언법의 기능은 차이가 없기 때문에 더 간소화된 <strong>[]선언법</strong>이 널리 쓰이고 있다.
<br>
--- 
<br>

## <strong># 배열 원소 추가하기</strong>

### <strong>*배열값 입력</strong>
```javascript
let arr = [];

arr[0] = 123;
arr[1] = '가나다';
arr[2] = true;

console.log(arr); //[123, '가나다', true]
```
<br>

### <strong>*배열 끝에 원소 추가: push()</strong>
```javascript
let arr = ['a', 'b', 'c'];

arr.push('d') //['a' , 'b', 'c', 'd']
```
<br>

### <strong>*배열 맨 앞에 원소 추가: unshift()</strong>
```javascript
let arr = ['a', 'b', 'c'];

arr.unshift('d');// arr = ['d', 'a', 'b', 'c']
```
<br>

### <strong>*지정 위치에 배열 원소 추가: splice([추가할 위치] , 0 , [추가할 원소])</strong>
```javascript
let arr = ['a', 'b', 'c']

/* 배열이름[n] */
arr[5] = 'd'; //arr = ['a', 'b', 'c', undefined, undefined 'd']

/* .splice([추가할 위치] , 0 , [추가할 원소]) */
arr.splice(1 , 0 , 'd'); //arr = ['a' , 'd' , 'b' , 'c']
arr.splice(2, 0, 'd', 'e', 'f'); //arr = ['a', 'b', 'd', 'e', 'f', 'c']
```
---
<br>

## <strong># 배열 원소 제거하기</strong>

### <strong>*배열의 마지막 원소 제거: pop()</strong>
```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.pop(); //arr = ['a', 'b', 'c', 'd']
```
<br>

### <strong>*배열 첫번째 원소 제거: shift()</strong>
```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.shift(); //arr = ['b', 'c', 'd', 'e']
```
<br>

### <strong>*지정 위치 원소 제거: splice([제거 위치], [제거할 원소 갯수])</strong>
```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(1, 2); // index[1] 부터 2개의 요소('b','c')를 제거.

// arr = ['a', 'd', 'e']
```
<br>

### <strong>*지정한 위치에 있는 원소 제거 후 원소 추가하기 : splice([지정 위치] , [제거할 원소 갯수] , [추가할 원소])</strong>
```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(1, 2, 'f', 'g', 'h'); 
//index[1] 부터 2개의 요소('b','c')를 제거 후 그 위치에 ['f','g','h'] 원소 추가

// arr = ['a', 'f', 'g', 'h', 'd', 'e']
```
<br>

### <strong>*배열의 크기는 보존하면서 원소만 제거</strong>
```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

delete arr[1]; //arr = ['a', undefined, 'c', 'd', 'e']
```