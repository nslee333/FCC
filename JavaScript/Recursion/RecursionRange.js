function rangeOfNumbers(startNum, endNum) {
    if (startNum < endNum) {
      return [];
    } else {
      const array = rangeOfNumbers(startNum, endNum - 1);
      array.push(endNum);
      return array;
    }
  };

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));


// This ends in a call stack overflow lol :)
