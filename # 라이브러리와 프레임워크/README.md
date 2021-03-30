# 라이브러리와 프레임워크

- 라이브러리 : 내가 사용하고자 하는 소프트웨어가 재사용하기 쉽도록 되어있는 소프트웨어.
- 프레임워크 : 우리가 만들고자 하는것이 있을때 그것을 조금 수정해서 사용할 수 있게 해주는 반제품과 같은 형태.

하지만 다른사람들이 만든 것을 협력해서 만든다는것에는 공통점이 있다.

## 라이브러리

JQuery 

JQuery 는 가장 유명한 라이브러리이다. JQuery 에서 라이브러리를 다운받아 사용할 수도 있짐나 비용과 시간적 측면에서 JQuery CDN 을 이용해 조금 효율적인 코드를 만들수 있다.

```

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./Ex1JS.js"></script>
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
          countrys();
        </script>
      </ul>
      <script>
        texts();
      </script>
    </div>
  </body>
</html>

```
```
function set_a_tag_color(color){
   var alist =  document.querySelectorAll('a');
   var i = 0;
   while (i != alist.length) {
     alist[i].style.color = color;
     i++;
   }
}
function body_set_text_color(color){
  document.querySelector('body').style.color = color;
}

function body_set_backgound_color(color){
  document.querySelector('body').style.backgroundColor = color;
}

function dark_light(self){
  var target_body = document.querySelector('body');
  if(self.value === 'dark'){
    body_set_backgound_color('black');
    body_set_text_color('white');
    self.value = 'light';
    set_a_tag_color('powderblue');
  } else {
    body_set_backgound_color('white');
    body_set_text_color('black');
    self.value = 'dark';
    set_a_tag_color('blue');
  }
}


function countrys(){
  var countrys_list = ['Korea','France','Japan'];
  var i = 0;
  while(i != countrys_list.length){
    document.write('<li><a href="#">'+countrys_list[i]+'</a></li>');
    i++;
  }
}

function texts(){
  var i = 0;
  while(i !=20){
  document.write('This is array & roop example. ');
  i++;
  }
}

```

위쪽의 파일은 html, 하위 파일을 JS 이다. HTML파일에 Google JQurey 를 넣었다.
```
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

```
function set_a_tag_color(color){
   var alist =  document.querySelectorAll('a');
   var i = 0;
   while (i != alist.length) {
     alist[i].style.color = color;
     i++;
   }
}
```
JS 파일안에 이 함수안의 코드를 JQuery 를 이용해서 더 간결하게 바꿀수 있다.

```
  $('a').css('color',color);  // jquery에서 $('a')는 이 웹페이지의 a tag는 jquery 로 관리하겠다 라는 뜻이다.
``` 
$('a') : 이 페이지의 모든 a tag를 JQuery 로 관리한다.
.CSS() : CSS를 추가하는 JQuery 문법. (이곳에서는 색상을 바꾸고 싶기 때문에, 즉 'color' 값을 파라미터 color로 한다. )

위와 같은 방식으로 JS파일을 정리하면 

```
function set_a_tag_color(color){
  // var alist =  document.querySelectorAll('a');
  // var i = 0;
  // while (i != alist.length) {
  //   alist[i].style.color = color;
  //   i++;
  // }
  $('a').css('color',color);  // jquery에서 $('a')는 이 웹페이지의 a tag는 jquery 로 관리하겠다 라는 뜻이다.
}
function body_set_text_color(color){
  // document.querySelector('body').style.color = color;
  $('body').css('color',color);
}

function body_set_backgound_color(color){
  // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor',color);
}

function dark_light(self){
  var target_body = document.querySelector('body');
  if(self.value === 'dark'){
    body_set_backgound_color('black');
    body_set_text_color('white');
    self.value = 'light';
    set_a_tag_color('powderblue');
  } else {
    body_set_backgound_color('white');
    body_set_text_color('black');
    self.value = 'dark';
    set_a_tag_color('blue');
  }
}


function countrys(){
  var countrys_list = ['Korea','France','Japan'];
  var i = 0;
  while(i != countrys_list.length){
    document.write('<li><a href="#">'+countrys_list[i]+'</a></li>');
    i++;
  }
}

function texts(){
  var i = 0;
  while(i !=20){
  document.write('This is array & roop example. ');
  i++;
  }
}

```

위와같이 Tag 의 CSS 를 바꾸는 JS를 모두 JQuery 로 바꾸어 줬다.

## 참고
[생활코딩](https://opentutorials.org/course/3085/18886) 