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
