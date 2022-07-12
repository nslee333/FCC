

function traditionalFunction() {
    console.log("Hello World!");
}

traditionalFunction();


function traditionalFun2(param1, param2) {
    console.log(param1, param2);
}

traditionalFun2();

function tradFun1(num) {
    return num + 3;
}

tradFun1();

const arrowFunction = function() {
    console.log("Hello World!");
}


const arrowFunctionV2 = () => {
    console.log("Hello World!");
}



const arrowFunctionV3 = () => "value";

const doubler = (item) => item * 2;

const doubler2 = item => item * 2;

const multiplier = (item, multi) => item * multi;

multiplier(4,2);

const greeting = (name = "Anonymous") => "Hello" + name;

console.log(greeting("John"));
console.log(greeting());



function howMany(...args) {
    return "You have passed" + args.length +  " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));