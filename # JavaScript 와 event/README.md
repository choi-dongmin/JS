# JavaScript 와 event

- Html은 한번 웹 브라우저를 실행 시킨다면 자기 자신의 모습을 혼자서는 변경할 수 없다. 그래서 우리는 JavaScript 를 이용해 사용자와 상호작용을 시킬수 있다. 

## JavaScript 기본 사용법

JavaScript 와 Html 의 가장 큰 차이점은 바로 동적이라는 것이다. 만약 Html 에서 1+1 이라고 작성한다면 그대로 웹페이지 상에서 "1+1" 이라는 문자로 나올것이다.

그러나 JavaScript 에서는 1+1 이라는 값을 주었을때 계산기처럼 2 라는 값을 출력할 수 있다.

이것이 JavaScript 와 Html 과 가장 큰 차이점이라고 볼 수 있다. 

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>JavaScript</h1>
    <script>
      document.write(1+1);
    </script>
    <h1>Html</h1>
    <h2>hello world</h2>
    1+1
  </body>
</html>
```

위와 같이 작석된 html 파일이 있다고 했을때 JavaScript 는 1+1 값으로 2 를 출력 하고 있지만 html 로 작성된 1+1 은 "1+1" 로 표현이 된다.

## event

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="Nothing" onclick="alert('I told you')">
  </body>
</html>
```

위의 코드는 input으로 버튼을 하나 만들고 그 버튼을 Nothing 으로 만든다 그러나 여기서 중요한것은 버튼이 아닌 바로 onclick 이라는 Tag 이다.

이 onclick 이라는 Tag 는 속성값으로 JavaScript 만이 올수있으며 그 뜻은 click 이라는 event가 발생 하였을시 그 안쪽에 있는 코드를 실행킨다.

위의 코드에서는 alert(경고문) 으로 "i told you"를 경고창으로 나타내고 있다.

바로 이것이 JS 가 존재하는 이유이다. 웹 브라우저 내에서 어떠한 event 가 발생했을시 그 사용자와 상호작용을 할 수 있도록 해주는 것이다.

### event 의 종류

- onclick : 이 Tag 가 포함된 코드가 클릭을 했을시 반응.
- onchange : 안쪽의 text의 변화가 일어났을시 반응. 
- onkeydown : 키보드의 키가 눌렸을시 반응. (모든 키)

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="Nothing" onclick="alert('I told you')">
    <input type="text" onchange="alert('Text Changed')">
    <input type="text" onkeydown="alert('Key down')">
  </body>
</html>
```

## 참고
[생활코딩](https://opentutorials.org/course/3085/18869)