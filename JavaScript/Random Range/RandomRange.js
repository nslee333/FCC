function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
  }
  
  function myRandomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) ;
  
  }




  console.log(randomRange(1, 10), "Correct Function");
  
  console.log(myRandomRange(1, 10), "My Function");


// 