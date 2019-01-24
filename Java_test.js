setTimeout(function(){
  var sum = 0;
    for (var i = 0; i < 101; ++i){
      if(i % 2 == 0){
          sum = sum + i
      }
    }
    console.log(document.getElementById('paragraph').innerHTML);
  document.getElementById('paragraph').innerHTML = sum
},1000)
