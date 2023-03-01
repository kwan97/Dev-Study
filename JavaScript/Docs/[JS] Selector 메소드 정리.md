# [JavaScript] HTML 요소 Selector 메소드 정리

<br>


> ## getElementById()

     () 안에 해당되는 단일 id의 요소에 접근하는 메서드이다.

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>getElementById() 사용 예제</title>
    <script>

      function printName() {

        const name = document.getElementById("printBox").value;
        document.getElementById("printBoxResult").innerText = name;
      }

    </script>
  </head>

  <body>
    <input id='printBox' onkeyup='printName()' /> 
    <div id="printBoxResult"></div>
  </body>
</html>
```
<br>


> ## getElementByClass()

    () 안에 해당되는 class의 요소에 모두 접근하는 메서드이다.

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByClass() 사용 예제</title>
    <script>

      function printName() {

        const name = document.getElementsByClass("printBox").value;
        document.getElementsByClass("printBoxResult").innerText = name;
      }

    </script>
  </head>

  <body>
    <input class="printBox" onkeyup='printName()' /> 
    <div class="printBoxResult"></div>
  </body>
</html>
```
<br>


> ## getElementByName()

    () 안에 해당되는 name의 요소에 모두 접근하는 메서드이다.

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByName() 사용 예제</title>
    <script>

      function printName() {

        const name = document.getElementsByName("printBox").value;
        document.getElementsByName("printBoxResult").innerText = name;
      }

    </script>
  </head>

  <body>
    <input name="printBox" onkeyup='printName()' /> 
    <div name="printBoxResult"></div>
  </body>
</html>
```
<br>


> ## querySelector()
    
    Css 선택자로 단수개의 값만을 가져오고 여러개가 있다면 처음 하나만 가져온다.
    한번에 여러개를 선택하고 싶다면 .querySelectorAll() 을 사용한다.

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script>

      window.onload = function(){

        document.querySelector('.hello').style.color = "blue";
        document.querySelector('p').style.color = "red";
        document.querySelector('#hello').style.color = "yellow";
      };

    </script>
  </head>

  <body>
    <p>Hello World</p>
    <p class="hello">Hello World</p>
    <p class="hello">Hello World</p>
    <p id="hello">Hello World</p>
    <p>Hello World</p>
    <p>Hello World</p>
    <p>Hello World</p>
    <p>Hello World</p>
  </body>
</html>
```