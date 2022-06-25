function sum(arr, n) {

    if(n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1]
    }
  
  }

sum([1], 0); // Should equal 0.
sum([2, 3, 4], 1); // Should equal 2.
sum([2, 3, 4, 5], 3); // Should equal 9