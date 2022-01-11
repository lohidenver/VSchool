

//className - old way

// var className = document.querySelector("#header").className += " new-class"
// console.log(className);



//classList - best way 
console.log(document.querySelector("#header").className);
document.querySelector("#header").classList.add("new-class");
console.log(document.querySelector("#header").className);
document.querySelector("#header").classList.remove("another");
console.log(document.querySelector("#header").className);
document.querySelector("#header").classList.toggle("another");
console.log(document.querySelector("#header").className);

