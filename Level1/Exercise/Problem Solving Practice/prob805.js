console.log("Problem solving started");
console.log("")

console.log("Largest number portion of the assignment")


let largest = [3, 5, 2, 8, 1];
var largestNum = 0;

function largestNumber (largest) {
    console.log(largest);
    

    for (var i = 0; i <largest.length; i++) {
        if (largest[i] > largestNum) {
            largestNum = largest[i];
        }
    }
    console.log("The largest number in the array is " + largestNum);
    return largestNum;
}

largestNumber(largest);
largestNumber([12, 34, 66, 3, 45, 7, 100, .9])
//////////////////////////////////////////////////////////////
console.log("")
console.log("Character present in array portion of the assignment")

let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
let containsChar = "!";


function lettersWS (lettersWithStrings, containsChar) {
     let results = [];

    for (var i = 0; i < lettersWithStrings.length; i++) {

        if (lettersWithStrings[i].includes(containsChar)) {
            results.push(lettersWithStrings[i])
        }

    }
    console.log(results);
    return results;

}

lettersWS(lettersWithStrings, containsChar)
lettersWS(["Dave", "is", "learning", "JavaScript", "at", "Vschool"], "a")





//////////////////////////////////////////////////////////////
console.log("")
console.log("Is divisible portion of the assignment");

let num1 = 9;
let num2 = 3;

function isDivisible (num1, num2) {
    console.log(num1, num2);
    if (num1%num2 === 0) {
        console.log(num1 + " is divisible by " + num2)
        return true;

    } else {
        console.log(num1 + " is NOT divisible by " + num2)
        return false;
    }
}

isDivisible(num1, num2);

console.log(isDivisible(10,3));

console.log("Problem solving finished");