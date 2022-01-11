// fat arrow functions
function sum(){
    
}

const sum2 = function(){
    
}

const sum2ES6 = word => {
    console.log(`ES6 is ${word}!`)
    return word
}

addEventListener('click', ()=>{

})
// object literals

//old way
const blue = "blue";
const red = "red";
const green = "green";
//new way
const colors = {blue, red, green};
console.log(colors);


// object destructuring

const user = {
    username: 'joe blow',
    age: 20,
    _id: '82934tufijdk'
}

//syntax
const {username, age} = user;
console.log(username);

const names = ["john", "betty", "nick"];

const [item1, item2, item3] = names;

console.log(item3)

// default parameters

function sum(a = 0,b = 0) {
    return a + b
}

console.log(sum())