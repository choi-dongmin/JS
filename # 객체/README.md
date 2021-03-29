# 객체 (Object)

- 우리는 비슷한 일을 하는 코드의 집합으로 함수를 만들었다 객체는 비슷한 일을하는 함수와 변수의 집합이라고 할 수 있다.

## 객체의 기본 사용과 문법

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h1>Object</h1>
    <h2>Create</h2>
    <script>
      var coworkers ={
        "programmer" : "lee",          // 객체 내에서 정보를 입력
        "designer" : "choi"
      };
      document.write("programmer : "+ coworkers.programmer + "<br>"); // 객체내에서 입력한 값 불러오기
      document.write("designer : "+ coworkers.designer + "<br>");

      coworkers.scientist = "kim";                                    // 객체 밖에서 정보값을 입력
      coworkers["first enginer"] = 'park';                            // 객체 밖에서 정보값을 입력(띄어쓰기)
      document.write("scientist : "+ coworkers.scientist + "<br>");
      document.write("first enginer : "+   coworkers["first enginer"] + "<br>");  // 객체 밖에서 입력한 값 불러오기
    </script>
  </body>
</html>
```

기본적으로 객체는 var 객체이름 = {}; 로 이루어지며 객체 내에서 정보를 입력을 할 수있다.

```
<script>
   var coworkers ={
   "programmer" : "lee",          // 객체 내에서 정보를 입력
   "designer" : "choi"
   };
   document.write("programmer : "+ coworkers.programmer + "<br>"); // 객체내에서 입력한 값 불러오기
   document.write("designer : "+ coworkers.designer + "<br>");
</script>
```

그리고 객체 밖에서 입력을 할수도 있다.
```
<script>
   var coworkers ={}; 
      coworkers.scientist = "kim";                                    // 객체 밖에서 정보값을 입력
      coworkers["first enginer"] = 'park';                            // 객체 밖에서 정보값을 입력(띄어쓰기)
      document.write("scientist : "+ coworkers.scientist + "<br>");
      document.write("first enginer : "+   coworkers["first enginer"] + "<br>");  // 객체 밖에서 입력한 값 불러오기
    </script>
```

## 객체의 반복문

상황에 따라서 객체내의 모든 값을 불러와야 할 때가 있다. 그럴때 반복문을 통해서 우리는 객체를 가져올 수 있다.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h1>Object</h1>
    <h2>Create</h2>
    <script>
      var coworkers ={
        "programmer" : "lee",          // 객체 내에서 정보를 입력
        "designer" : "choi"
      };
      document.write("programmer : "+ coworkers.programmer + "<br>"); // 객체내에서 입력한 값 불러오기
      document.write("designer : "+ coworkers.designer + "<br>");

      coworkers.scientist = "kim";                                    // 객체 밖에서 정보값을 입력
      coworkers["first enginer"] = 'park';                            // 객체 밖에서 정보값을 입력(띄어쓰기)
      document.write("scientist : "+ coworkers.scientist + "<br>");
      document.write("first enginer : "+   coworkers["first enginer"] + "<br>");  // 객체 밖에서 입력한 값 불러오기
    </script>
    <h2>Iterate</h2>
    <script>
    for(var key in coworkers){  // coworkers 안에 있는 key(우리가 주어준 programmer, designer 의 값.
      document.write(key+ ' : '+ coworkers[key] + ' <br>');
    }
    </script>
  </body>
</html>

```

for in 문으로 객체안에 있는 값을 모두 불러오고 있다.

```
    <script>
    for(var i in coworkers){  // coworkers 안에 값을 i 에 변수에 순서대로 담아준다.
      document.write(key+ ' : '+ coworkers[key] + ' <br>');
    }
    </script>
```

for 반복한다 var i 에 coworkers 안에 있는 값을 하나씩 모두 담는다 해석할 수 있다.

## 객체와 함수

- 객체는 많은것들을 담을수 있자만 그중 함수가 가장 많은 부분을 차지한다. 그럼 함수는 어떻게 객체에 넣을수 있을까?

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h1>Object</h1>
    <h2>Create</h2>
    <script>
      var coworkers ={
        "programmer" : "lee",          // 객체 내에서 정보를 입력
        "designer" : "choi"
      };
      document.write("programmer : "+ coworkers.programmer + "<br>"); // 객체내에서 입력한 값 불러오기
      document.write("designer : "+ coworkers.designer + "<br>");

      coworkers.scientist = "kim";                                    // 객체 밖에서 정보값을 입력
      coworkers["first enginer"] = 'park';                            // 객체 밖에서 정보값을 입력(띄어쓰기)
      document.write("scientist : "+ coworkers.scientist + "<br>");
      document.write("first enginer : "+   coworkers["first enginer"] + "<br>");  // 객체 밖에서 입력한 값 불러오기
    </script>
    <h2>Iterate</h2>
    <script>
    for(var i in coworkers){  // coworkers 안에 있는 key(우리가 주어준 programmer, designer 의 값.
      document.write(i+ ' : '+ coworkers[i] + ' <br>');
    }
    </script>
    <h2>Property & Method</h2>
    <script>
      coworkers.showAll = function(){
        for(var i in this)  // 만약 함수안에서 객체의 이름(coworkers)를 지정하면 나중에 만약 객체의 이름이 바뀌게 된다면 오류가 발생할 수 있음으로 this 로 지정한다.
          document.write(i+ ' : '+ this[i] + ' <br>');
      }
      coworkers.showAll(); //함수 = Method / 변수 = Property
    </script>
  </body>
</html>

```

함수(메소드)를 객체에 만드는 방법
```
객체이름.함수이름 = function() ={} ;
```

```
<script>
      coworkers.showAll = function(){
        for(var i in this)  // 만약 함수안에서 객체의 이름(coworkers)를 지정하면 나중에 만약 객체의 이름이 바뀌게 된다면 오류가 발생할 수 있음으로 this 로 지정한다.
          document.write(i+ ' : '+ this[i] + ' <br>');
      }
      coworkers.showAll(); //함수 = Method / 변수 = Property
    </script>
```

### 파일로 쪼개 정리정돈

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
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

위의 파일은 지금까지 만들었던 페이지이다. drak/light 버튼을 통해 CSS가 변화하는 JS를 구현했다 하지만 모든 JS만 따로 모아서 모듈화 한다면 더 효율적일 것이다.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="./Ex4JS.js"></script>
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

JS 를 다른 파일에 저장해 더 효율적으로 바꾸었다. 이렇게 JS 파일을 따로 저장해 연결시킨다면 유지보수와 효율성이 더 좋아진다.

```
<head>
    <meta charset="utf-8">
    <title></title>
    <script src="./Ex4JS.js"></script>
  </head>

```
헤드에서 스크립트 파일을 불러오고 

```
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
```

function 화를 시켜서 function 을 호출하고 있다.

## 참고
[생활코딩](https://opentutorials.org/course/3085/18886)