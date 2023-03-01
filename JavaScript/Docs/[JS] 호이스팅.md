# [JavaScript] 호이스팅에 대하여 + 함수유효범위

> <strong>호이스팅</strong>에 대해 이해하기 앞서 JavaScript의 <strong>'함수 유효범위'</strong>를 이해하고 넘어가면 좋을 것 같아 내용 추가 삽입했습니다.

<br>

## #함수 유효범위 vs 블록 유효범위

    >> 블록 유효범위 (=block-level-scope)
    다른 프로그래밍 언어에서 볼수 있는 것으로 블록 { } 안에 있는 코드는 유효범위를 가지며, 일반적으로 유효범위 내부의 변수는 외부에서 사용 불가능하다는 의미

    >> 함수 유효범위(=function-level-scope)
    JavaScript는 '블록 유효범위' 개념이 존재하지 않는다.
    대신에 함수 내부에서 선언된 변수는 함수 전체에 유효하는다는 뜻으로 '함수 유효범위'라는 개념을 갖는다.

### >함수 유효범위 예제 코드

    대표적인 예시로 JavaScript에서 var 변수는 함수 코드 블록 {}만 scope로 인정하기 때문에 함수 외부에서 선언된 모든 변수는 전역 변수로 인식한다.
```javascript
function funcTest() {
  
  var x = 0; //변수 x는 funcTest 함수 어디서든 사용 가능합니다.
  
  if(x === 0) {
    
    var y = 10; //변수 y는 if문 { } 으로 감싸져있지만, funcTest() 어디서든 사용 가능
    
    
    for (var z = 0; z < y; z++) {//변수 z는 for문 { } 안에 있지만, funcTest() 어디서든 사용 가능
      console.log(z);
    }
  }
  
  console.log('y : ' + y); 
  console.log('z : ' + z);
  //function() 안에 { } 으로 감싸져있는 변수 y와 z 값 출력
}

funcTest();
```

### >함수 유효범위는 변수가 선언 되기 전에도 유효하다.

```javascript
var a = 100; 

function funcTest() {
  console.log('a : ' + a); 
  // a : undefined
  
  var a = 50; 
  
  console.log('a : ' + a); 
  // a : 50
}

funcTest();
```
---
<br>


## #호이스팅이란?

    -코드를 실행하기 전, 선언된 변수와 함수를 맨위로 올려 실행 및 할당시키는 JavaScript의 특징이다.

    -자바스크립트 엔진은 소스코드를 한 줄씩 순차적으로 실행하기에 앞서, 변수 선언을 포함한 모든 선언문(ex. 변수 선언문, 함수 선언문 등)을 찾아내 먼저 실행한다.

    -변수 선언 뿐만 아니라, var, let, const, function, function*, class 키워드를 사용해 선언한 모든 식별자(변수, 함수, 클래스 등)는 호이스팅이 된다.
<br>

## #호이스팅 원리 및 특성

### <일반적인 코드 작성 순서>

```javascript
function welcome(word) {
  console.log("Hello " + word + "~!");
}

welcome("World");
// 결과: "Hello World~!"
```

### <호이스팅 원리 반영 순서>

```javascript
welcome("World");

function welcome(word) {
  console.log("Hello " + word + "~!");
}
// 결과: "Hello World~!"
```

<p>
함수 호출이 함수 자체보다 앞서 존재하지만, 코드가 정상 작동된다. <br>이것이 바로 JavaScript의 <strong>호이스팅</strong> 이다.
</p>
<br>


## #호이스팅의 단점
    함수의 코드가 500줄이라 쳤을 때, 462줄에 있는 코드를 분석한다고 가정해보자.
    호이스팅에 의해 에러는 안나겠지만 코드 예측이 어렵고 번거로울 것 이다.
    이처럼 가독성이 좋은 코드에 호이스팅은 유용하니 이 점을 유의하여 코드를 작성해야 한다.