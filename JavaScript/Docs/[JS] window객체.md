# [JavaScript] window 객체에 대하여

## # window 객체란?
    - 브라우저 안의 모든 요소들을 품은 최상위 객체로, '최상위 전역 객체'라고도 부른다.
    - 브라우저의 창을 의미하고, 이창을 제어하는 다양한 메서드는 제공한다.
<br>

## # window 객체의 종류

> window 객체의 모든 메소드나 프로퍼티 사용시, 'window' 접두사 생략 가능하다.

<br>

### * open()
    새 창을 열 때 사용  ex)팝업창...
```javascript
window.open("http://www.naver.com", "naver", "width=350, height=450, left=50, top=10, scrollbars=no");
```
<br>

### * close()
    창을 닫을 때 사용
```javascript
<button onclick="window.close()"></button>
```
<br>

### * alert()
    경고창을 띄우는용
```javascript
alert('경고입니다!');
```
<br>

### * prompt()
    질의 응답 창을 나타낼 때 사용
```javascript
prompt('당신의 이름은?');
```
<br>

### * confirm()
    확인/취소창을 나타낼때 사용.
    -확인버튼 return값: true
    -취소버튼 return값: false
```javascript
confirm("탈퇴하시겠습니까?");
```