# refactoring 

- refactoring 은 간단히 말해 조금 더 효율적인 코드를 만드는것을 뜻한다. 그렇다면 더 효율적인 코드를 어떻게 만들수 있을까?

가장 기본적인 방법은 아무래도 중복을 제거하는것이다.
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
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    This is refactoring example. This is refactoring example.
    <br><br><br>
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
  </body>
</html>
```
위의 코드를 보면 페이지의 CSS를 변경하는 버튼과 내용 그리고 그 내용 아래에 다시 CSS를 변경하는 똑같은 버튼가 존재한다.

하지만 이상하게 아래쪽 버튼을 누르면 value 는 바뀌지 않는것을 볼수 있는데 이것은 id 값을 다르게 주어야 한다.

그러나 더 쉬운 방법은 this 를 사용하는것이다. if(document.querySelector('#light_dark') 는 바로 자기 자신을 찾아서 선택하는 코드이다 이렇게 자신이 속한 Tag를 우리는 this로 대체할수 있다.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="dark"onclick="
    if(this.value === 'dark'){
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      this.value = 'light';
    } else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      this.value = 'dark';
    }
    ">
    <h1>Hello World</h1>
    This is refactoring example.  This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.
    This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.
    <br><br><br>
    <input type="button" value="dark"onclick="
    if(this.value === 'dark'){
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      this.value = 'light';
    } else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      this.value = 'dark';
    }
    ">
  </body>
</html>
```

우리는 이 this 통해 아래에 똑같은 코드를 또 만들어도 아까와 같이 id 값을 따로 지정하지 않아도 될 뿐더러 코드의 내용 또한 훨씬 간결해졌다.

그렇다면 또 중복되는 부분이 발견할 수 있다. 바로 document.querySelector('body') 이부분에서는 모두 body 를 찾아서 선택하고 있다.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script>
      var target_body = document.querySelector('body');
    </script>

    <input type="button" value="dark"onclick="
    if(this.value === 'dark'){
      target_body.style.backgroundColor = 'black';
      target_body.style.color = 'white';
      this.value = 'light';
    } else {
      target_body.style.backgroundColor = 'white';
      target_body.style.color = 'black';
      this.value = 'dark';
    }
    ">
    <h1>Hello World</h1>
    This is refactoring example.  This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.
    This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.This is refactoring example.
    <br><br><br>

    <input type="button" value="dark"onclick="
    if(this.value === 'dark'){
      target_body.style.backgroundColor = 'black';
      target_body.style.color = 'white';
      this.value = 'light';
    } else {
      target_body.style.backgroundColor = 'white';
      target_body.style.color = 'black';
      this.value = 'dark';
    }
    ">
  </body>
</html>
```

위와같이 변수 target_body 에 document.querySelector('body') 를 넣어주고 그것을 document.querySelector('body') 의 자리에 대체해도 같은 결과가 나온다.

## 참고
[생활코딩](https://opentutorials.org/course/3085/18881)