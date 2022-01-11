console.log("connected")


function sum(num1, num2) {
    return num1 + num2;
}

//expected, actual

const actual = sum(5, 10);
const expected = 15;

if (actual !== expected) {
    throw new Error(`TEST FAILED: Expected ${expected} but got ${actual}`);
} else {
    console.log(`TEST PASSED: Expected ${expected} and got ${actual}`);
}