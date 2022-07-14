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
  
  


  
  */