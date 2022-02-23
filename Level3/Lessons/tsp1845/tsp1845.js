const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here

const challenge1 = nums.map((num) => num * num);
console.log(challenge1);

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const namesCap = names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
);

console.log(namesCap);

const pokemonElements = pokemon.map((mon) => `<p>${mon}</p>`);

console.log(pokemonElements);