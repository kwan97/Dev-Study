# **JSTL 주요 문법 정리**
## **#JSTL이란?**
JSTL(Java server pages Standard Tag Library)은 JSP파일에 Java 문법을 html 태그(<>) 형태로 변환 및 사용 가능하게 해주어 비개발자여도 직관적으로 이해 할 수 있게 해주는 라이브러리이다.
- 간편/편리
- 비개발자 이해 향상
>   **사용법**
>
> 1. JSTL jar파일과 JSTL 구현체를 설치시켜줘야 사용 가능(라이브러리이기 때문)
> 2. taglib 지시자로 JSTL 라이브러리를 선언해 주어야 사용 가능(JAVA import와 같은 원리)(아래 코드 참조)
```html
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```
---
<br>

## **# 문법 종류**
1. <c:set>
2. <c:out>
3. <c:remove>
4. <c:if>
5. <c:choose>
6. <c:foreach>
7. <c:catch>
8. <c:redirect>
9. <c:import>
10. <c:url>
