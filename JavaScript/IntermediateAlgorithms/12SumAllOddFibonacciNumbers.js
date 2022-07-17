function sumFibs(num) {
    let previousNum = 0;
    let currentNum = 1;
    let resultNum = 0;
    
    while(currentNum <= num) {
    if (currentNum % 2 !== 0) {
      resultNum += currentNum;
    } 
    console.log(previousNum, currentNum, "1");
    currentNum += previousNum;
  
    previousNum = currentNum - previousNum;
    console.log(previousNum, currentNum)
  
  }
  
  return resultNum;
  
  
  
  }
  
  console.log(sumFibs(10));