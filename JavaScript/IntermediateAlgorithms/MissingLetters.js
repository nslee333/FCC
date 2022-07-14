function fearNotLetter(str) {

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
        if(code !== str.charCodeAt(0) + i) {
          return String.fromCharCode(code - 1);
        }
        
    }
  
  return undefined;
  }
      
  console.log(fearNotLetter("abce"), "Return value"); // d
  console.log(fearNotLetter("abcdefghjklmno", "RV")); // i
  console.log(fearNotLetter("stvwx"), "RV"); // u
  console.log(fearNotLetter("bcdf"), "RV"); // e
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), "RV"); // undefined


  /*
  
  This function takes in a string, and returns the letter missing from that string in alphabetical order.

  For each element in the string:
    - Let code be the char code of the current iteration.
    - If code does not equal the char code of the first position plus iterations,
        return 


  
  */