console.log("connected\n ");


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = array.map(function(num) { //like a for loop where num = arr[i]

    return num * 10;

})
console.log("Original " + array)
console.log("Changed " + result)

//ES6
const resultES6 = array.map(num => num * 100)

console.log("ES6 " + resultES6)


const users = [
    { name: 'Dave' },
    { name: 'John' },
    { name: 'Eva' }
]

const resultObject = users.map(function(user) {
    return user.name;
})

const resultObjectES6 = users.map(user => user.name);

console.log("Object " + resultObject)
console.log("ObjectES6 " + resultObjectES6)