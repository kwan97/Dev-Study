# **[JavaScript] Collection 종류 및 설명**

## **# Collection 종류**

> Set과 Map만 다룰 예정

- **Set**

- **Map**

- **List**

<br>

## **##Set**

- 입력 순서대로 인덱스 위치 지정

- 중복 객체 허용하지 않음

- Value(값)를 곧 Key(키)값으로 갖는 컬렉션이다. (Value = Key)

- 배열을 Set에 넣어 중복 원소 걸러낼 수 있다.

```javascript
let arr1 = new Set();

arr.add(3);
arr.add("hi");
arr.add("hi"); // add()로 중복 원소를 넣는 것에 대한 에러는 없지만 삽질하는 행동이다.
arr.add("bye");
arr.add(true);
arr.add(false);

console.log(arr1);
// Set(5) {3, 'hi', 'bye', true, false}

console.log(arr1.size); // Collection에서는 length X, size O
// 5

/*배열 중복 원소 제거*/
let ran = [3, 4, 7, 3, 2, 3, 6, 7];
let arr2 = new Set(ran);

console.log(ran.length); // 8
console.log(arr2.size); // 5 {3, 4, 7, 2, 6}

/*Loop*/
for (let kwan of arr2) console.log(kwan);
//3 4 7 2 6
```

### \*Set 관련 메소드

```javascript
.add(); //값 추가
.delete(); //값 삭제
.clear(); //set의 요소들만 삭제하고 set객체는 유지
.has(); //set안에 값이 들어있는지 true/false로 확인
```

---

<br>

## **## Map**

- Key와 Value 쌍으로 이루어진 컬렉션

- Set과 마찬가지로 중복 객체 허용하지 않음, 입력 순서대로 인덱스 위치 지정

- Key에 다양한 자료형을 사용 가능(Object와의 차이점)

- Map 컬렉션 안에 내장 메소드 생성시 Key이름과 겹치지 않게 조심할 것

- 객체를 Key로 사용할 수 있다.

    ![](images/%20[JS]%20Collection정리.md%202023-01-06-09-19-58.png)

<br>

> **Object(=객체)와 Map객체의 사용 용도** <br>
- 실행 시까지 key를 알 수 없고, 모든 key가 동일한 type이며 모든 값들이 동일한 type일 경에 Map을 사용하는 것이 좋다.<br> 
  
- 각 개별 요소에 대해 적용해야 하는 로직이 있을 경우에는 object를 사용한다.

<br>

```javascript
const kwan = new Map(); //선언

const map = new Map([
  ['1', 'value1'],
  ['2', 'value2'],
  ['3', 'value3']
]); // 선언과 동시에 할당

kwan.set(1, "hi");
kwan.set("1", "hi");

console.log(kwan);
// Map(2) {1 => 'hi', '1' => 'hi'}

/*Map 체이닝*/
let dong = new Map();

dong.set("1", "str1").set(1, "num1").set(true, "bool1");

console.log(dong);
//Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}

//객체를 Map의 key로 사용하기
let person = { name: "kwan" };

let firstName = new Map();

firstName.set(john, "kim");

console.log(firstName);
//kim
```

### *Map 관련 메소드

```javascript
map.set(key, value); // key와 value값을 저장
map.get(key); // key가 map에 없는 경우 undefined로 값을 리턴
map.has(key); // key가 있으면 true를 반환하고 그렇지 않으면 false를 리턴
map.delete(key); // key값을 삭제
map.clear(); // map을 돌며 모두 삭제
```
