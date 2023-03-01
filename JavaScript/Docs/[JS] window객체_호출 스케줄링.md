# <strong># 호출 스케줄링 관련 중요 함수</strong>

    일정 시간 간격이나 시간이 지난 후 원하는 함수를 예약 실행(호출) 하는 것을 '호출 스케줄링(=scheduling a call)'이라 한다. 

## * setInterval()
    - 일정 시간 간격으로 작업 실행
    - clearInterval 함수를 사용 하여 실행 중지 가능하다.
    - 지정한 시간 간격 보다 작업 시간이 더 걸린 경우 문제 발생함.
  
```javascript
const timerId = null;

//1초마다 sampleMethod()함수 호출
function StartClock() {
    sampleMethod();
    sample = setInterval(sampleMethod, 1000);
}

// 시계 중지
function StopClock() {
    if(timerId != null) {
        clearInterval(timerId);
    }
}

```
<br>

## * setTimeout()
    - 일정한 시간이 지난 후에 작업을 한번 실행
    - 작업 사이의 간격을 일정하게 하는 메소드
    - setInterval과 차이점으로는 지정시간에 작업진행 시간이 포함되지 않는다는 점
```javascript
// 시계 시작 - 재귀호출로 반복실행
function StartClock() {
 PrintTime();
 setTimeout = (PrintTime, 2000);
}

// 시계 중지
function StopClock() {
 if(timerId != null) {
 clearTimeout(timerId);
 }
}
```
<br>

## *clearInterval(), *clearTimeout()
    실해중인 작업을 중지시키는 것이 아닌 모두 실행된 후에 다음에 작업 스케줄이 중지 되게 해준다.