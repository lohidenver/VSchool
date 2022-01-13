console.log("connected");

const name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

////////////////////////////////Task 1////////////////////////////////

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    let result = arr.map((carrot) => { return { type: "carrot", name: carrot } });
    console.log(result)
    return result;
};


mapVegetables(carrots);

////////////////////////////////Task 2////////////////////////////////

const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => {
        console.log(person.friendly)
        return person.friendly
    })
}

filterForFriendly(people);

////////////////////////////////Task 3////////////////////////////////

doMathSum = ((a, b) => { return a + b });


produceProduct = ((a, b) => {
    return a * b
})

console.log(doMathSum(2, 3))
console.log(produceProduct(2, 3))


////////////////////////////////Task 4////////////////////////////////

//Hi Kat Stark, how does it feel to be 40?

printString = ((firstName, lastName, age) => {

    let result = `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
    return result;
})

console.log(printString("Dave", "Roberts", 43))

////////////////////////////////Task 5////////////////////////////////

const animals = [{
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
console.log(filterForDogs(animals))


function filterForDogs2(arr) { arr.filter(animal => (animal.type === "dog") ? true : false) };

console.log(filterForDogs2(animals))