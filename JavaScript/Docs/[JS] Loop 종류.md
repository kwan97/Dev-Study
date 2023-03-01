# <strong>[JavaScript] Loop의 종류와 예제문</strong>

## # for문
```javascript
let test = "";
const boo = ["BMW", "Volvo", "Saab", "Ford"];

for (let i = 0, len = boo.length; i < len; i++) {
        test += cars[i] + "<br>";
    };
```
<br>

## # for...of문
```javascript
/*for...of문*/
let arr = ['a', 'b', 'c'];
let kyu = "Hi";

for (let x of arr) {
    console.log(x); 
    //'a'
    //'b'
    //'c'
}

for (let la of kyu) {
    console.log(la);
    //'H'
    //'i'
}
```
<br>

## # for...in문

> 인덱스의 순서가 중요할 경우에는 사용하지 않는게 좋다.<br>
( for / for...of / Array.forEach() 사용을 추천!)

```javascript
// 객체(Object) 적용 예제
const person = { fname: "John", lname: "Doe", age: 25 };
let test2 = "";

for (let x in person) {
    test2 += person[x] + " ";
};

// 배열(Array) 적용 예제
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let test3 = "";

for (let x in cars) {
    test3 += cars[x] + " ";
};


// Array.forEach() 예제
// 각 배열 요소에 대해 한 번씩 함수(콜백 함수)를 호출 해줌.
const numbers = [45, 4, 9, 16, 25];
let txt = "";

numbers.forEach(myFunction);

function myFunction(value) {
    txt += value;
}
```
<br>

## # while문
```javascript
let i = 0;
while(i < 5) {
    console.log(`${i} Hello~!`);
    i++;
}
```
<br>

## # do...while문
    do 블록을 한 번 실행 후 while의 조건이 true면 마저 실행

```javascript
let text = '';
let i = 0;
do { 
    text += i+'<br>';
    i++;
}
while (i<5); //코드 블록을 한 번 실행한 다음 조건(i < 5)이 참이면 마저 진행
```
<br>

## # continue/break문 예제
    *continue는 조건에 해당하는 부분만 점프(무시)한 후 마저 반복한다.
    *break는 조건에 해당하는 부분에서 루프 중단한다.

```javascript
//continue 적용 예제
 let text3 = "";
        for (let i = 0; i < 5; i++) {
            if (i === 3) continue;
            text3 += i + "<br>";
        };
        
//break 적용 예제
let text4 = "";
        for (let i = 0; i < 5; i++) {
            if (i === 3) break;
            text4 += i + "<br>";
        };
