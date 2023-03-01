# [HTML] DOCTYPE선언과 meta 태그에 대하여

## # DOCTYPE 선언이란?
    HTML 태그는 아니지만, <!DOCTYPE>이 선언된 페이지의 HTML 버전 정보를 웹 브라우저에 알려주는 역할을 하는 선언문이다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <p>이 문서는 HTML 문서입니다.</p>

</body>
</html>
```
<br>

---

## # meta태그란?

    해당 문서에 대한 정보인 메타데이터(metadate)를 정의할 때 사용된다.
    <meta> 요소는 <base>, <link>, <script>, <style>, <title> 요소와 같은 다른 메타데이터 관련 요소들이 나타낼 수 없는 다양한 종류의 메타데이터를 제공할 때 사용되며, 이렇게 제공된 정보는 브라우저나 검색 엔진, 다른 웹 서비스에서 사용하게 된다.
<br>

> 검색 엔진을 위한 키워드(keyword)를 정의하는 예제
```html
<meta name="keyword" content="HTML, meta, tag, element, reference">
```
<br>

> 웹 페이지에 대한 설명(description)을 정의하는 예제
```html
<meta name="description" content="HTML meta tag page">
```
<br>

> 문서의 저자(author)를 정의하는 예제
```html
<meta name="author" content="TCPSchool">
````
<br>

> 해당 문서의 문자 인코딩 방식 명시 예제(문자셋)
```html
<meta charset="UTF-8">
```
<br>

> 모든 장치에서 웹 사이트가 잘 보이도록 뷰포트(viewport)를 설정하는 예제
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
<br>

```html
<!-- meta태그 실제 활용 예제 -->
<head>
    <meta charset="UTF-8">
    <meta name="keyword" content="HTML, meta, tag, element, reference">
    <meta name="description" content="HTML meta tag page">
    <meta name="author" content="TCPSchool">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML meta tag</title>
</head>
```