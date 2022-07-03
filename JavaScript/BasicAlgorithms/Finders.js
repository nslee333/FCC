function findElement(arr, func) {
    let num = 0;

    for(let i = 0; i < arr.length; i++) {

        if(func(arr[i])) {

        return num = arr[i];
        } else {

        num = undefined;

        }
    }

    return num;
    }

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));


    /* 

        This function takes in an array and a function, and returns the first element of the array that passes the function test.

        If there is no element that passes the function test, then return undefined.


    */