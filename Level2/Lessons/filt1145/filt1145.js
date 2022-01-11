console.log("connected");



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = arr.filter(function(num) {
    if (num % 2 === 0) {
        return true;
        //or return num;
    }
})

//ternary example
const example = arr.filter(num => num % 2 === 0)

console.log(result)
console.log(example)

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const actionMovies = movies.filter(function(movie) {
    if (movie.genre === "action") {
        return true;
    }
})

console.log(actionMovies)

const movieResults = movies.filter(m => m.genre === "action")

console.log(movieResults)