console.log("connected");

////////////////////////////////
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(number => number > 5);
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
////////////////////////////////


////////////////////////////////
function evensOnly(arr) {
    const result = arr.filter(number => number % 2 === 0);
    return result;
}

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
//////////////////////////////// 


////////////////////////////////
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(name => name.length <= 5);
    return result;
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
////////////////////////////////


////////////////////////////////
function peopleWhoBelongToTheIlluminati(arr) {
    const result = arr.filter(illumanati => illumanati.member === true);
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
////////////////////////////////

////////////////////////////////
function ofAge(arr) {
    const result = arr.filter(oldEnough => oldEnough.age >= 18);
    return result;
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
////////////////////////////////