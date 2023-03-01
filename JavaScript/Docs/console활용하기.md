# console.log 활용법

## <strong># 콘솔(console)</strong>

  JavaScript를 사용하여 개발할 때 자주 사용하는 기능으로 console.log()를 뺄 수 없다.<br>
  코드 문제를 해결하거나 데이터의 흐름을 추적 및 출력 결과 실시간 조회 기능을 가지고 있다.

<br>

### <strong>* 기본 출력문 종류</strong>

```javascript
console.log('기본');

console.info('정보');

console.debug('디버그');

console.warn('경고');

console.error('에러');
```

<br>

### <strong>* console.log() 사용법</strong>

```javascript
const name = "kwan";
const message = "Hello!";

const messageObj = {
  owner: name,
  text: message,
};

// 단일 데이터 출력
console.log(name);  // kwan

// 다중 데이터 출력
console.log(name, message); // kwan Hello!

// 문자 포맷 출력
console.log('%s %s', message, name); // Hellod! kwan

// 객체 출력
console.log(messageObj);  // {owner: "kwan", text: "Hello!"} 문자가 아니라 객체이다.

// messageObj owner 출력
console.log(messageObj.owner);  // ㅏkwan

// messageObj이 포함하지 않은 값을 출력
console.log(messageObj.test);  // undefined
```
<br>

### <strong>* console.log() 출력시 주의 사항 및 Tip</strong>
    개발을 하다보면 console.log()를 여러번 사용하게 된다.

    그럼 콘솔창에 출력되는 데이터가 어느 위치에서 출력 되는 것인지 또는 중복 및 중첩 발생으로 사용자가 햇갈리는 경우가 발생하게 된다. 
    
    그러므로 console.log() 괄호 안에 들어갈 함수명 또는 변수명은 풀네임으로 세심하게 적어줄 필요가 있다.

```javascript
// 예제1)
$("a").click(function (e) {
    e.preventDefault(); //고유 속성을 중지(중단)시킨다.
    alert("e.preventDefault()");
    console.log("click 이벤트_'a'원소 고유속성 중지!");
});

// 예제2)
const arr = [1,2,3,4,5,6]
const ran = arr[Math.floor(Math.random() * arr.length)]
console.log("변수 ran 랜덤값 출력: ", ran);
// 변수 ran 랜덤값 출력: 4

