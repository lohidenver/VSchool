console.log("connected");

////////////////////////////////forEach
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

const newArr = [];

arr.forEach(function(num) {
    if (num % 2 === 0) {
        newArr.push(num);
    }
})

const newArrES6 = [];

arr.forEach(number => number % 2 === 0 && newArrES6.push(number))


console.log(newArr);
console.log(newArrES6);

////////////////////////////////find

const resultES6 = users.find(user => user.name[0] === "j");

console.log(resultES6);

const result = users.find(function(user) {
    if (user.name === "julie") {
        return user
    }
})

console.log(result)


////////////////////////////////findIndex

const findIndexES6 = users.findIndex(user => user.name === "rick");
console.log(findIndexES6);

const userIndex = users.findIndex(function(user) {
    if (user.name === "rick") {
        return true
    }
})

console.log(userIndex)