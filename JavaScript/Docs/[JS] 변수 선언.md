# [JavaScript] 변수 선언 및 초기화( var, let, const )

> 기존 JavaScript는 <strong>var</strong> 변수로만 변수 선언이 가능하였다. <br>
그러다 <strong>let, const</strong> 변수가 등장하였는데 두 변수의 등장 이유에 대해 잘 파악해보자.

## # var 변수 문제점

### 1. var 변수 중복 선언 가능
```javascript
var name = 'kwan';

var name = 'lee';
console.log(name); //lee
```

### 2. 변수 선언하기도 전에 참조 가능(변수 호이스팅)

> 호이스팅에 대해서 문서 작성 해놓았으니 '호이스팅' 문서 참조 바람.

```javascript
console.log(name); //undefined

var name = 'kwan';

console.log(name); //kwan
```

### 3. var 변수 function-level-scope(=함수 유효범위)

> 함수 유효범위에 대해서 문서 작성 해놓았으니 '호이스팅' 문서 참조 바람.

```javascript
var a = 1

if (true) {
  var a = 5
}

console.log(a) // 5
```

---
<br>

## # let/const 가 var 의 대체자인 이유

### 1. block-level-scope(=블럭 유효범위)

    무분별한 전역 변수 사용 제지

```javascript
let a = 1

if (true) {
  let a = 5
}

console.log(a) // 1
```

### 2. 변수 중복 선언 불가

```javascript
let name = 'kwan'

let name = 'howdy' // Error
```

### 3. 호이스팅 불가능

    *let: 변수 생성시 선언과 초기화가 분리되어 진행되기 때문에 런타임 이전에 호이스팅 불가능

    *const: 변수 생성시 선언과 초기화가 동시 진행되지만 런타임 이전에는 호이스팅 불가능

```javascript
/*let*/
console.log(name) // output: Uncaught ReferenceError: name is not defined
let name = 'kwan'

/*const*/
console.log(name) // output: Uncaught ReferenceError: Cannot access 'name' before initialization
const name = 'kwan'
```
<br>

## # let 특징

### 1.변수 초기화(=재할당) 가능
```javascript
let name = 'kwan'

name = 'Lee'

console.log(name) // Lee
```
<br>

## # const 특징

### 1. const는 상수이다.
### 2. const변수 생성시 반드시 선언과 초기화를 동시 진행해야 한다.
```javascript
const name; // Error

const name = 'kwan' //올바른 const 변수 선언
```
### 3. 변수 초기화(=재할당)가 불가하지만 원시값만 불가능하고 const변수의 객체 값은 초기화(=재할당) 가능하다.
```javascript
// 원시값 재할당 불가능
const name = 'kwan'
name = 'howdy' // Error

// 객체 초기화 가능
const name = {
  nickname: 'kwan'
}
name.nickname = 'Lee'

console.log(name) // 결과값: { nickname: "Lee" }
```



