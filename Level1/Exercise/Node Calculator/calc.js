const readlineSync = require("readline-sync");

var userName = readlineSync.question("May I have your name? ");
if (
  readlineSync.keyInYN(userName + ", are you ready to do some calculations?")
) {
  console.log("Great!  Let's get started!");
} else {
  console.log("Come back another time!");
  process.exit();
}

var calcContinue = true;

while (calcContinue) {
  const num1 = readlineSync.question("What is your first number? ");
  const num2 = readlineSync.question("What is your second number? ");

  var operation = readlineSync.question(
    "Please enter the operation to perform (add, sub, mul, div): "
  );

  if (operation === "add") {
    const sum = Number(num1) + Number(num2);
    //const sum = +num1 + +num2;
    console.log(sum);
  } else if (operation === "sub") {
    const diff = Number(num1) - Number(num2);
    console.log(diff);
  } else if (operation === "mul") {
    const product = Number(num1) * Number(num2);
    console.log(product);
  } else if (operation === "div") {
    const quotient = Number(num1) / Number(num2);
    console.log(quotient);
  } else {
    console.log("You need to enter an operation");
  }

  if (readlineSync.keyInYN("Continue? ")) {
    console.log(userName + ", I knew you loved math!");
  } else {
    console.log("I hope to see you soon!");
    calcContinue = false;
    process.exit();
  }
}
