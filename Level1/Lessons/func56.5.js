const h1 = document.getElementById("clickable")
h1.addEventListener("click", function(e){
    h1.textContent = "clicked"    
})

const h2 = document.getElementById("clickable")
h2.addEventListener("click", (e) => {
    h2.textContent = "clicked"    
})

const h3 = document.getElementById("clickable")
h3.addEventListener("click", e => {
    h3.textContent = "clicked"    
})

const h4 = document.getElementById("clickable")
h4.addEventListener("click", () => {
    h4.textContent = "clicked"    
})

///////////////////////////////////////////////////////////////////

const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(function(bird){
    return "big " + bird
})

const bigBirds = birds.map(bird=>"big " + bird)

function addTwo(first, second){
    return first + second
}

const addTwo = (first, second) => first + second;

