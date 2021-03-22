# 배열과 반복문

- 간단하게 배열과 반복문에 대해 알아보자.

- 배열은 말 그대로 어떠한 인자값의 나열이고, 반복문은 속해있는 코드를 반복 시키는것을 뜻한다.

위의 배열과 반복문으로 내가 읽었던 책의 리스트를 만들어 보자.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="books">
      <script>
        var books_list = ['어린왕자','1984','위대한 개츠비','지하생활자의 수기'];
      </script>
      <h2>Books</h2>
      <ul>
        <script>
        var i = 0;
        while (i != books_list.length) {
        document.write('<li>'+books_list[i]+'</li>');
        i+=1;
        }
        </script>
      </ul>
    </div>
  </body>
</html>
```

위의 코드를 보면 books 라는 class 안에 books_list 라는 배열이 존재하고 그 배열은 4개의 원소를 가지고 있다.

그리고 ul tag 안에 변수 i 를 0으로 선언하고 while 반복문을 통해서 반복하는데 i 가 books_list 의 원소의 길이 즉 4 와 같지 않을 때 반복시킨다.

 document.write('<li>'+books_list[i]+'</li>'); 이 코드는 이 문서 안에 li Tag를 작성할 것이다, 그때 나는 books_list[i] 번째 의 원소를 가져와 li 안에 작성 할 것이다.


## 반복문 배열의 활용

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
    <h1> Countrys </h1>

    <input type="button" value="dark" onclick="
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

이건 dark / light 버튼을 눌렀을때 a Tag의 색상을 바꾸도록 하는 JS 이다.

```
      var alist =  document.querySelectorAll('a'); // NOTE: a Tag 모두를 선택해 배열로 만든다 그리고 alist 라는 값을 주어준다.
      var i = 0;
      while (i != alist.length) {
        alist[i].style.color = 'powderblue';      // alist 의 스타일 컬러를 파우더 블루로 바꾼다.
        i++;
```

이 부분이 바로 그 부분이다 var alist = document.querySelectorAll('a') 을 사용해 a Tag 를 모두 선택해 alist 라는 배열에 넣어주고/

while 반복문을 통해 각각의 배열에 하나씩 색상이 powederblue 로 변하게 한다(if 조건문 dark 안에 값을 주어 dark 모드시 변한다. 그 반대는 blue.)

## 참고
[생활코딩](https://opentutorials.org/course/3085/18850)

