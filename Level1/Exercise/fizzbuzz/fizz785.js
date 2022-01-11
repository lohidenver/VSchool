let countNum = 0;
let countFB = 0;
let countFizz = 0;
let countBuzz = 0;

function tCount(){
    console.log("")
console.log("FizzBuzz: " + countFB);
console.log("Fizz: " + countFizz);
console.log("Buzz: " + countBuzz);
console.log("Number: " + countNum);
console.log("")

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        countFB++;
    } else if (i % 3 == 0) {
        console.log("Fizz");
        countFizz++;
    } else if (i % 5 == 0) {
        console.log("Buzz");
        countBuzz++;
    }
    else {console.log(i);
    countNum++;
    } }
console.log("")
console.log("FizzBuzz: " + countFB);
console.log("Fizz: " + countFizz);
console.log("Buzz: " + countBuzz);
console.log("Number: " + countNum);
console.log("")
}

tCount();
