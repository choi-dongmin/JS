# 함수

- 코드가 길어지고 커질수록 리펙토링의 효율을 더 요구된다. 함수는 비슷한 일은 하는 코드들의 모음이다.


## 함수의 기본사용
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Function</h1>
    <h2>Basic</h2>
    <ul>
      <script>
        document.write('<li>1</li>');
        document.write('<li>2-1</li>'); 
        document.write('<li>2-2</li>'); 
        document.write('<li>3</li>');
        document.write('<li>2-1</li>'); // 반복 
        document.write('<li>2-2</li>'); // 반복
      </script>
    </ul>
    <h2>Parameter & Argument </h2>
    <h2>Return</h2>
  </body>
</html>
```

반복되는 코드를 리펙토링 하는 방법은 가장쉬운 방법은 반복문을 작성하는것이다. 그러나 위와 같은 코드는 중간에 
document.write('<li>3</li>'); 이 있어 반복문을 사용하기 어렵다.

이럴경우 함수를 이용해 조금더 효율적인 코드를 만들수 있다.
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Function</h1>
    <h2>Basic</h2>
    <ul>
      <script>
        function two(){
          document.write('<li>2-1</li>');
          document.write('<li>2-2</li>');
        }
        document.write('<li>1</li>');
        two();
        document.write('<li>3</li>');
      	two();
      </script>
    </ul>
    <h2>Parameter & Argument </h2>
    <h2>Return</h2>
  </body>
</html>

```

위의 코드는 function two를 통해 반복되던 코드를 함수화 시켜주고 그 함수를 호출하고 있다.

## 함수의 활용

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1> Countrys </h1>

    <input type="button" value="dark" onclick="
    var target_body = document.querySelector('body');
    if(this.value === 'dark'){
      target_body.style.backgroundColor = 'black';
      target_body.style.color = 'white';
      this.value = 'light';

      var alist =  document.querySelectorAll('a'); // NOTE: a Tag 모두를 선택해 배열로 만든다 그리고 alist 라는 값을 주어준다.
      var i = 0;
      while (i != alist.length) {
        alist[i].style.color = 'powderblue';      // alist 의 스타일 컬러를 파우더 블루로 바꾼다.
        i++;
      }
    } else {
      target_body.style.backgroundColor = 'white';
      target_body.style.color = 'black';
      this.value = 'dark';

      var alist =  document.querySelectorAll('a');
      var i = 0;
      while (i != alist.length) {
        alist[i].style.color = 'blue';
        i++;
      }
    }
    ">
    <h2>Hello World</h2>
    <div class="countrys">
      <ul>
        <script>
          var countrys_list = ['Korea','France','Japan'];
          var i = 0;
          while(i != countrys_list.length){
            document.write('<li><a href="#">'+countrys_list[i]+'</a></li>');
            i++;
          }
        </script>
      </ul>
      <script>
        var i = 0;
        while(i !=20){
        document.write('This is array & roop example. ');
        i++;
        }
      </script>
    </div>
  </body>
</html>
```

위와 같은 코드에서 만약 우리가 아래의 부분을 하나가 아니라 몇천개 써야한다고 생각해보자.
```
var target_body = document.querySelector('body');
if(this.value === 'dark'){
      target_body.style.backgroundColor = 'black';
      target_body.style.color = 'white';
      this.value = 'light';

      var alist =  document.querySelectorAll('a'); // NOTE: a Tag 모두를 선택해 배열로 만든다 그리고 alist 라는 값을 주어준다.
      var i = 0;
      while (i != alist.length) {
        alist[i].style.color = 'powderblue';      // alist 의 스타일 컬러를 파우더 블루로 바꾼다.
        i++;
      }
    } else {
      target_body.style.backgroundColor = 'white';
      target_body.style.color = 'black';
      this.value = 'dark';

      var alist =  document.querySelectorAll('a');
      var i = 0;
      while (i != alist.length) {
        alist[i].style.color = 'blue';
        i++;
      }
    }
```

위코드는 단순히 배경화면을 바꾸는 코드이지만 이것과 같은 코드의 버튼이 100개 있다고 했을시 굉장히 비효율적이다.

그래서 우리는 코드를 함수에 옮겨 그 함수를 통해 호출하는것을 해보자.
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
      function dark_light(self){
        var target_body = document.querySelector('body');
        if(self.value === 'dark'){
          target_body.style.backgroundColor = 'black';
          target_body.style.color = 'white';
          self.value = 'light';

          var alist =  document.querySelectorAll('a'); // NOTE: a Tag 모두를 선택해 배열로 만든다 그리고 alist 라는 값을 주어준다.
          var i = 0;
          while (i != alist.length) {
            alist[i].style.color = 'powderblue';      // alist 의 스타일 컬러를 파우더 블루로 바꾼다.
            i++;
          }
        } else {
          target_body.style.backgroundColor = 'white';
          target_body.style.color = 'black';
          self.value = 'dark';

          var alist =  document.querySelectorAll('a');
          var i = 0;
          while (i != alist.length) {
            alist[i].style.color = 'blue';
            i++;
          }
        }
      }
    </script>

  </head>
  <body>
    <h1> Countrys </h1>

    <input type="button" value="dark" onclick="
      dark_light(this);
    ">
    <h2>Hello World</h2>
    <div class="countrys">
      <ul>
        <script>
          var countrys_list = ['Korea','France','Japan'];
          var i = 0;
          while(i != countrys_list.length){
            document.write('<li><a href="#">'+countrys_list[i]+'</a></li>');
            i++;
          }
        </script>
      </ul>
      <script>
        var i = 0;
        while(i !=20){
        document.write('This is array & roop example. ');
        i++;
        }
      </script>
    </div>
  </body>
</html>
```

위의 방식으로 코드를 줄일수 있다.(위경우에는 늘어났지만 100개라 가정하면 굉장히 크게 줄어들었다.)

```
 <script>
      function dark_light(self){
        var target_body = document.querySelector('body');
        if(self.value === 'dark'){
          target_body.style.backgroundColor = 'black';
          target_body.style.color = 'white';
          self.value = 'light';

          var alist =  document.querySelectorAll('a'); // NOTE: a Tag 모두를 선택해 배열로 만든다 그리고 alist 라는 값을 주어준다.
          var i = 0;
          while (i != alist.length) {
            alist[i].style.color = 'powderblue';      // alist 의 스타일 컬러를 파우더 블루로 바꾼다.
            i++;
          }
        } else {
          target_body.style.backgroundColor = 'white';
          target_body.style.color = 'black';
          self.value = 'dark';

          var alist =  document.querySelectorAll('a');
          var i = 0;
          while (i != alist.length) {
            alist[i].style.color = 'blue';
            i++;
          }
        }
      }
    </script>

    <input type="button" value="dark" onclick="
      dark_light(this);
    ">
```

먼저 head 부분에서 dark_light 함수를 input 안에 있던 코드들을 복사하고 그것을 함수 faction drak_light(self) 로 묶어주고 있다.

그리고 input 의 onclick 아래있던 길었던 코드를 단순하게 함수의 이름을 통해 호출하고 있다.

그런데 조금 코드가 바뀐것을 볼 수 있다.

바로 코드 안쪽에 존재하던 this 들이 self 로 바뀌고 그리고 호출하는곳에서 this 값으로 호출하고 있다는것이다. 

tag 안에서의 this 는 이 코드가 속한 tag 를 가르키는데 독립된 함수에서 this 는 전혀 다른 목표를 향한다.

그렇기 때문에 function()의 매개변수 self로 지정하고 안쪽에 코드의 this 였던 코드를 self 로 바꾸고 

인자값으로 this 를 주게되면 호출하고 있는 곳의 this를 받을수 있게 된다.

## 참고
[생활코딩](https://opentutorials.org/course/3085/18883) 
