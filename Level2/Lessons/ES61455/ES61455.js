console.log("connected")

// Why is ageRange not defined? out of scope
// How can we fix this function with var? replace let with var
// How can we fix this function avoiding the use of var? declare let=ageRange in a higher scope
// Why would you use const vs let?  When you dont want the variable to ever change



let ageRange = ""

function getAgeRange({ age }) {

    if (age < 18) {
        ageRange = "Child"
    } else if (age >= 18 && person.age < 80) {
        ageRange = "Adult";

    } else {
        ageRange = "Elderly Person"
    }
    console.log(ageRange)
    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?

const person = { name: "Andrea", age: 27 }
    // Why can we add .ageRange to person when we used const to define person?
    //object are mutable

person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors

//or lines that clutter the console
// console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.");
console.log(`The ${ person.ageRange }, ${ person.name }, is "${ person.age} years old.`)
    // change the above concatented string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
    // replace this line with one that uses a spread oporator to do the same thing as concat
    // const fringeMonths = springMonths.concat(fallMonths)
const fringeMonths = [...springMonths, ...fallMonths]

console.log(springMonths, fallMonths, fringeMonths)