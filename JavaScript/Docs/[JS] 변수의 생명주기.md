# [JavaScript] 변수의 생명주기(=life cycle)

## # 변수의 생명주기

> 변수는 자신이 선언된 위치에서 생성되고 소멸한다.<br> <strong>"전역 변수"</strong>의 생명 주기는 애플리케이션의 생명 주기와 같다. 반면에 함수 내부에서 선언된 <strong>"지역 변수"</strong>는 함수가 호출될 때 생성, 종료 될 때 소멸한다.

<br>

## # 지역 변수의 생명 주기
```javascript
function foo() {
  var x = 'local';
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
```
- 지역 변수 x는 foo가 호출되기 이전에는 생성되지 않는다.
- 함수가 종료 될 때 변수 x는 소멸 된다. (메모리에 저장 된 값도 정리된다는 의미)
- 즉, 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다

<br>

## # 전역 변수의  생명 주기
```javascript
var x = 'global'; // 전역 변수 x 선언 및 초기화 
                  // 전역 객체= global

function foo() {
  var x = 'local';
  console.log(x); // local
  return x;
}

foo();

console.log(x); // global
```
- 전역 객체는 코드 실행 이전에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다.
- 전역 변수의 생명 주기와 전역 객체의 생명 주기는 같다.
- 즉, 웹 페이지를 닫을 때 까지 유효하다.

<br>

## # 전역 변수의 문제점
- 암묵적 결합(=implicit coupling)
- 긴 생명 주기
- 스코프 체인 상에서 종점에 존재
- 네임스페이스 오염

<br>

> 결론적으론 전역 변수 사용을 줄이고 지역변수를 사용하는 것이 좋다.<br> 
또한 변수의 스코프는 좁으면 좁을수록 좋다.

