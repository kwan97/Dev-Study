# <strong> jQuery 주요 함수(method) 정리 </strong>
</br>

> ## .add()
* 요소 추가 선택
```javascript
    // $('선택 요소').add('추가 선택 요소');
    $('div').add('sample').css('color','red'); 
```
</br>

> ## addClass()
* 선택한 요소에 클래스 값 추가
```javascript
    // $('선택 요소').addClass('선택 클래스' or '다중 클래스 선택');
    $('div').addClass('sample');
    $('div').addClass('sample1 sample2 sample3'); //띄어쓰기로 클래스 구분
```
</br>

> ## removeClass()
* 파라미터로 받은 클래스 요소 전부 제거
```javascript
     // $('선택 요소').removeClass('선택 클래스' or '다중 클래스 선택');
    $('div').removeClass('sample');
    $('div').removeClass('sample1 sample2 sample3'); //띄어쓰기로 클래스 구분
```
</br>

> ## .attr()
* 선택 요소의 속성값 가져오기
* 선택 요소의 속성값 추가해주기   
* HTML 요소, 속성 값, 속성을 추가할 때 사용함.
* 속성 값이나 정보를 조회하는 곳에 주로 사용(style, src 등등) --> html attribute 값이 모두 String으로 넘어옴
```javascript
    /**가져오기**/
    // $('선택 요소').attr('속성 값');
    $('div').attr('div_AttributeValue'); 

    /**넣어주기**/
    //$('선택 요소').attr('넣어줄 속성','속성 값');
    $('div').attr('title','Hello');
```
</br>

> ## .removeAttr()
* 선택 요소의 특정 속성 제거
```javascript
 // $('선택 요소').removeAttr('특정 속성');
    $('div').addClass('title');
```
</br>

> ## .prop()
* JavaSrcipt 입장에서 지정한 선택자를 가진 첫번째 요소의 속성값 가져오거나 추가해 준다.
* 활성화, 체트 여부, 선택 여부 등등 제어하는 업무에 주로 사용 ---> date, function, boolean 형식으로도 가져올 수 있다.
```javascript
    /**가져오기**/
    <!-- $('지정 요소').prop('속성 값'); -->
    $('a').prop('href');

    /**추가해주기**/
    // $('지정 요소').prop('추가 속성','속성 값');
    $('div').prop('propertyName'.'value');
```
</br>

> ## .val()
* Form 값 설정/가져오기
```javascript
    var sample = $('input#jbInput').val();
```
</br>

> ## .has()
* 특정 요소를 지닌 요소 선택 및 전체 선택
* HTML의 시점
```javascript
    // #( '지정 요소:  has(지정 요소가 갖고있는 특정 요소)');
    $('p:has(span)'); //span 요소를 가지고 있는 p 요소 선택
```
</br>

>## .last()
* 가장 마지막 지정 요소 선택
```javascript
    $( 'div' ).last().css( "background-color", "red" );
    //가장 마지막에 있는 div에 css 설정 적용 시키기
```
</br>

> ## .append() (=!prepend)
* 선택한 요소 내용의 끝에 콘텐츠 추가
* 기존 작성되어 있는 코드를 유지한 상태로 뒤에 내용을 추가 할 때 사용되는 메소드
```javascript
    $('p').append('가나다라마바사'); //<p>텍스트</p> 텍스트 끝에 +가나다라마바사 추가
    $('p').append( $('strong') ); //<strong 태그 추가>
```
</br>

> ## .toggleClass()
* 지정 요소에 클래스 값 넣었다/뺐다 기능
* toggle의 시각적 기능을 문법으로 변환했다 생각하면 쉬움
```javascript
    $('div').toggleClass('kwan');
    // div 요소에 kwan 클래스가 없으면 추가하고, 있으면 제거
```
</br>

> ## .html() 과 .text() 비교
* 선택한 요소 안의 내용을 가져오거나, 내용을 바꿔주는 기능
* 서로 비슷하지만 반대됨 (헷갈리기 쉬우니 제대로 숙지할 것!)

| .text() | | .html() |
|:---:|:---:|:---:|
| 해당 요소의 텍스트 콘텐츠 반환 및 설정 용도 | | 해당 요소의 HTML 콘텐츠 반환 및 설정 용도 |
| 선택 요소 안의 내용 가져올 시 HTML 태그 가져오지 않음 | | 선택 요소 안의 내용 가져올 시 HTML 태그까지 함께 가져옴 |
| 요소가 여러 개 있으면 모든 요소에 적용 | | 요소가 여러 개 있으면 모든 요소에 적용 |
| 삽입하는 내용에 있는 HTML 태그는 태그가 아니라 텍스트로 인식 | | 삽입하는 내용에 있는 HTML 태그는 텍스트가 아니라 태그로 인식 |
