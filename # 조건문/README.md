# 조건문

- 조건문이란 조건을 부여해서 참/거짓을 판단해 코드를 실행시키는 구조를 말한다.

if 조건문 : 참/거짓으로 코드의 진행여부를 결정하는 문법

연산자 : 좌항과 우항의 값을 연산하는 연산자 (Ex === : 좌항과 우항의 값이 같은지 판별한다. java의 ==.)
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input id="light_dark" type="button" value="dark"onclick="
    if(document.querySelector('#light_dark').value === 'dark'){
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      document.querySelector('#light_dark').value = 'light';
    } else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('#light_dark').value = 'dark';
    }
    ">
    <h1>Hello World</h1>
  </body>
</html>

```

밤/낮이 따로 버튼을 통해 바꾸는것이  아닌 낮의 상태의 페이지에서 버튼을 클릭하면 밤이되고 밤의 상태에서 버튼을 클릭하면 낮의 상태가 되는 코드를 조건문을 통해서 구현한것이다.

```
 <input id="light_dark" type="button" value="night"onclick="
    if(document.querySelector('#light_dark').value === 'night'){
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      document.querySelector('#light_dark').value = 'day';
    } 
	else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('#light_dark').value = 'night';
    }
    ">
```

위의 Tag의 id 값을  light_dark 로 주고 처음 표시될 값으로 dark를 주었다(처음에는 day 의 상태이기 때문에.) 

그리고 조건문 if 에 비교연산자를 활용해 document.querySelector('#light_dark').value === 'night'(이 문서안에서 id 값 light_dark 를 찾아서 value 가 'night'라면 참의 코드를 아니라면 else 의 코드를 실행).

그리고 참이 night 임으로 night 페이지 CSS를 그리고 value 값을 day 로 변경시키고.

거짓일시 day 의 CSS를 그리고 value 의 값을 night 로 변경한다.

이것이 조건문을 활용해 조금 간편하게 하나의 버튼으로 밤/낮의 페이지를 조절할 수 있게하는 코드이다.

## 참고
[생활코딩](https://opentutorials.org/course/3085/18878)