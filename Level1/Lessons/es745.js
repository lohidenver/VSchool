// ES6 Part 1


// const and let
var name = "Dave";
const nameF = "Dave";
let age = "43";

//global scope  and local scope


// spread and rest(gather)

    ///Syntax: ...

    //spread example
    const colors1 = ["red", "green"];
    const colors2 = ["blue", "yellow"];

    const allColors = [...colors1, ...colors2];
    console.log(allColors);

    const person = {
        name: "Dave",
        age: "43",
    }

    const personCopy = {...person}
        console.log(personCopy)


    //rest example ... in parameter
function maxNumber(...nums){
    console.log(nums)
}

maxNumber(0,3,58,20)

// template literals

const name2 = "Dale";

//backtics
const greeting = `Hi ${name2}`;
console.log(greeting)
 
// import & export

//import
//export
require()
module.exports

