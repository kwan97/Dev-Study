# # [JavaScript] type 확인법 알아보기

> ## #typeof

- 변수 타입을 문자로 반환하는 함수 typeof 연산자
- 주로 원시 타입을 체크하기 위한 용도로 사용된다.
- JS가 가진 7가지 변수 타입(undefined, null, boolean, number, string, symbol, object, function)을 구분하는 용도

<br>

### [타입종류]
```javascript
console.log(typeof('10')); 
// string

console.log(typeof(10)); 
console.log(typeof(Infinity)); 
console.log(typeof(NaN)); 
// number

console.log(typeof([])); 
console.log(typeof(Array(5))); 
// 배열 = object

console.log(typeof(true)); 
console.log(typeof(false)); 
// boolean

console.log(typeof(Symbol())); 
// symbol

/*undefined 타입*/
let a;
console.log(a); //undefined
console.log(typeof a); //undefined

/*null 타입*/
let nullTest = document.querySelextor('.test');
console.log(nullTest); //null
// HTML 문서에 지정한 요소가 없다면 null 반환

console.log(typeof null); // object
// JS에서 null은 빈 참조를 나타내는 객체이고 참조 자료형이라고 판단하여 object 반환
```
<br>

> <strong>* undefined란?</strong><br>
> - JS는 변수의 자룔형을 별도로 표기하지 않고, 변수에 담기게 되는 값에 따라 자료형이
결정된다. 즉, undefind는 해당 변수의 자료형이 없다는 것을 의미한다.

<br>

>  <strong>* NaN이란?</strong><br>
> - 잘못된 수학 계산 또는 잘못된 숫자를 의미한다.
```javascript
console.log(0 / 0); // NaN
console.log(100 / 'hi'); // NaN
```

