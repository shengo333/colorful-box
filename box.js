
  var count=0;
  
  function changeall(change){
      count++;
    change.forEach(function (u) {
      changecolor(u)
    })
  }

  function changecolor(element){
      if (count%2==1){
        element.style.backgroundColor = "red";

      }
      if (count%2==0){
        element.style.backgroundColor = "green";

      }
  }