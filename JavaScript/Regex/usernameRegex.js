const string1 = "JACK"; // /[A-Z+]/gi
const string2 = "J"; // /[A-Z+]/gi
const string3 = "Jo"; // False 
const string4 = "Oceans11";
const string5 = "RegexGuru";
const string6 = "007";
const string7 = "9";
const string8 = "A1";
const string9 = "BadUs3rnam3";
const string10 = "Z97";
const string11 = "c57bT3";
const string12 = "AB1";
const string13 = "J%4";








let username = "JackOfAllTrades";

let userCheck = /[A-Z+a-z+0-9+]/gi; // Change this line
let result0 = userCheck.test(username);
let result1 = userCheck.test(string1);
let result2 = userCheck.test(string2);
let result3 = userCheck.test(string3);
let result4 = userCheck.test(string4);
let result5 = userCheck.test(string5);
let result6 = userCheck.test(string6);
let result7 = userCheck.test(string7);
let result8 = userCheck.test(string8);
let result9 = userCheck.test(string9);
let result10 = userCheck.test(string10);
let result11 = userCheck.test(string11);
let result12 = userCheck.test(string12);
let result13 = userCheck.test(string13);





console.log(result0, "username"); 
console.log(result1, "string1" );
console.log(result2, "string2" );
console.log(result3, "string3" );
console.log(result4, "string4" );
console.log(result5, "string5" );
console.log(result6, "string6" );
console.log(result7, "string7" );
console.log(result8, "string8" );
console.log(result9, "string9" );
console.log(result10, "string10" );
console.log(result11, "string11" );
console.log(result12, "string12" );
console.log(result13, "string13" );




