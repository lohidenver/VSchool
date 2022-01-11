console.log("connected")



const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

arr.sort(function(a, b) {
    if (a < b) return -1;
})


//ES6
arr.sort((a, b) => a < b ? -1 : 1)

console.log(arr);