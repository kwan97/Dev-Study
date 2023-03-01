# [JavaScript] Event에 대하여

## #Event Handler(=Event Listener)란?

    이벤트가 발생했을 때 처리를 담당하는 함수 처리기이며 'Event listener'라고도 부른다.
 ---
<br>

## #HTML 코드에 inline 방식으로 이벤트 사용하기

- 이 방식은 별로 추천하지 않는 방식으로 가독성과 유지보수가 매우 떨어진다.

```javascript
function gop(value){
    alert("Hello World");
};


<button id="clickButton" onclick="gop()">클릭</button>  
```
<br>

## # JS에 작성하여 이벤트 사용하기

- 이 방식은 괜찮지만 단점을 뽑자면 하나의 이벤트만 적용 가능한 것이다.
- 두 개 이상 적용시 가장 아래에 있는 이벤트핸들러만 작동한다.
- 밑에 코드를 예로 들자면 kwanButton에 클릭시 콘솔창에 텍스트가 나오는 .onclick() 이벤트를 적용하여 kwanButton에는 더 이상 이벤트를 추가 적용 할 수 없게 된다.

```javascript   
const kwanButton = document.getElementById("kwanButton");

kwanButton.onclick = function(){
    console.log("테스트중~!");
};


<button id="kwanButton">click</button>
```
<br>

## #addEventListner() 메소드 사용하기

- 가장 바람직한 모던 방식으로 여러 이벤트를 한 요소에 적용 시켜줄 수 있다.

```javascript
    
const kwanButton = document.getElementById("kwanButton");

kwanButton.addEventListener("click", () => {
    alert("Hello World");
});

kwanButton.addEventListener('click', () => {
    console.log("콘손로그 Hello!");
});


<button id="kwanButton">click</button>
```