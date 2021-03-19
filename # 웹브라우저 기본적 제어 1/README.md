# 웹브라우저 기본적 제어 1

- 실질적으로 JS를 통해 사용자와 상호작용을 하는 페이지를 만들어 보자.

밤과 낮에 따라 사용자가 버튼을 클릭하면 CSS 가 바뀌도록 해볼것이다. 

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="Day" onclick="
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    ">
    <input type="button" value="Night" onclick="
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    ">

    <h1>Hello World</h1>
  </body>
</html>

```

먼저 내가 만들고 싶은 코드는 버튼을 통해 body 의 CSS 가 각각 밤, 낮에 맞게 변화하는 것이다.

밤에는 검은 배경에 하얀 글씨 낮에는 그 반대가 되게 하고 싶다.

즉 버튼을 누르면 상호작용으로 화면상의 CSS를 변화시키고 싶다는 것이다.

이것이 JS의 가장 중요한 포인트이다.

```
    <input type="button" value="Day" onclick="
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    ">
    <input type="button" value="Night" onclick="
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    ">
```

input 을 통해 버튼을 만들고 onclick 을 통해 이벤트가 발생시 JS 코드를 실행시키고 있다.

document. : 속한 문서내에서

querySelector('body'). : 찾아서 선택해라 body라는 Tag를

.style : 그곳에 style Tag를 추가시킬것이다.

.backgroundColor .color : 각각 내용의 색과 배경의 색을 주는 CSS 

## 참고

[생활코딩](https://opentutorials.org/course/3085/18876)