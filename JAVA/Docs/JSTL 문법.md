# **JSTL 주요 문법 정리**
## **#JSTL이란?**
JSTL(Jsp Standard Tag Library)은 JSP(Java Server Page)파일에 Java 문법을 html 태그(<>) 형태로 변환 및 사용 가능하게 해주어 비개발자여도 직관적으로 이해 할 수 있게 해주는 라이브러리이다.
- 간편/편리
- 비개발자 이해 향상

<br>

>   **사용법**
>
> 1. JSTL jar파일과 JSTL 구현체를 설치시켜줘야 사용 가능(라이브러리이기 때문)
> 2. taglib 지시자로 JSTL 라이브러리를 선언해 주어야 사용 가능(JAVA import와 같은 원리)(아래 코드 참조)
```html
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```
---
<br>

## **# Core 주요 문법 종류**
1. <c:set>
2. <c:out>
3. <c:remove>
4. <c:if>
5. <c:choose>
6. <c:foreach>
7. <c:catch>
8. <c:redirect>
9.  <c:import>
10. <c:url>

<br>

> jstl 코드와 java코드 대조                                                                                                     
### **1. <c:set>**
변수 선언 및 값 설정
```jsp
<!-- jsp -->
<c:set let="a" value="10">
```
```java
// java
int a = 100;
```
<br>

### **2. <c:out>**
값 출력
```jsp
<!-- jsp -->
<c:out value="Hello World">
```
```java
// java
system.out.println("Hello World");
```
<br>

### **3. <c:if>**
JAVA의 if-else문과 동일하지만 else문은 JSTL에 없음(사용 불가)
```jsp
<!-- jsp -->
<c:if test="조건식" let="조건을 검사하고 return되는 bool값을 저장할 변수" scope="bool 변수가 사용될 범위" />
```
```java
// java
if() {

};
```

<br>

### **4. <c:foreach>**
JAVA의 for문으로 두가지 사용법이 있다.
- for문 사용시

- Array 또는 Collection의 값들 순차 처리시
```jsp
<!-- for문 사용시 -->
<c:foreach begin="시작값" end="끝값" step="증가값" let="count값이 저장될 변수"/>

<!-- 배열 처리시 -->
<c:foreach let="변수" items="배열 or 컬렉션" />
```
```java
// java
for() {

};
```

<br>

### **5. <c:choose>**

```jsp
<!-- jsp -->
<c:choose value="Hello World">
```
```java
// java
system.out.println("Hello World");
```

<br>

### **2. <c:remove>**
- 특정 scope 변수 삭제

- 만약 scope 생략시 모든 영역 변수 삭제
```jsp
<!-- jsp -->
<c:remove var="변수명" scope="영역"/>
```