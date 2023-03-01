# [JavaScript] 함수(=function) 선언 방법 세가지

## # 함수 선언문 & 함수 표현식

### [사용법]
```javascript
//함수 선언문
function a() {
 console.log("hello")
};

//함수 표현식
const b = function () {
 console.log("bye")
};

sayApeach() //hello
sayRyan() //error
```
<br>

### [호이스팅 범위]
> <h3> **함수 호이스팅 우선 순위** </h3><br>
> 함수 선언문 > 함수 > 함수 표현식 = 화살표 함수

```javascript
a() //Hello~!
b() // Error: ReferenceError: Cannot access 'sayRyan' before initialization

/*함수선언문*/
function a() {
    console.log("Hello~!")
}

/*함수 표현식*/
const b = function () {
    console.log("Bye~!")
}
```
- 함수 선언문 : 어디서든 호출이 가능
- 함수 표현식 : 함수를 생성(초기화) 한 코드 아래에서만 호출 가능
---
<br>

## # 화살표 함수(=arrow function expression)란?
    기존 함수 표현식의 간편한 대안으로 function 키워드를 제거하고 사용한다. 또한 중괄호를 제거하면 바로 데이터를 반환한다.

    화살표 함수는 함수 표현식과 호이스팅이 동일하여 함수 선언뒤 호출해야 Error가 발생 하지 않는다.

```javascript
// 예제1)
const a = () => {
 console.log("Hi")
}

// 예제2)
const c = () => "Bye"

// 예제3)
a();
console.log(c());
```