let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); 

"Hello, world!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);


let testStr2 = "Repeat, Repeat, Repeat";
let ourRegex2 = /Repeat/;
testStr.match(ourRegex);


let repeatRegex = /Repeat/g;
testStr.match.match(repeatRegex);


let soccerWord = "goooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

let firstString = "Ricky is the first and can be found";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);