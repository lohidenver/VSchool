console.log("connected");

function collectAnimals(...animals) {
    console.log(animals);
    return animals;
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

function combineFruit(fruit, sweets, vegetables) {

    let result = {
        fruit,
        sweets,
        vegetables
    }
    console.log(result);
    return result;
}

combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"])


function parseSentence({ location, duration }) {
    let sentence = `We're going to have a good time in ${location} for ${duration}`
    console.log(sentence)
    return sentence;
}

parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});


function returnFirst(items) {
    const [firstItem] = items;
    return firstItem;
}

console.log(returnFirst(["dog", "wolf", "by", "family"]));


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    let [firstFav, secondFav, thirdFav] = arr


    let result = `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav} `;
    console.log(result);
    return result;
}

returnFavorites(favoriteActivities)

function combineAnimals(animals, ...additionalAnimals) {
    let result = [animals.concat(...additionalAnimals)];
    console.log(result);
    return result;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);


////////////////////////////////////////////////
function product(a, b, c, d, e) {
    let numbers = [a, b, c, d, e];

    let result = numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
    console.log(result);
    return result;
}

product(1, 2, 3, 4, 5)

function unshift(array, ...numbers) {
    return [numbers.concat(array)];
}

console.log(unshift([1, 2, 3], 10, 20, 30, 40, 50))


////////////////////////////////////////////////
/*
Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

*/

function populatePeople(names) {
    return names.map((name) => {
        name = name.split(" ");
        firstName = name[0];
        lastName = name[1];
        let result = {
            firstName: firstName,
            lastName: lastName
        }
        console.log(result)
        return result;
    })
};


populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])[{ firstName: "Frank", lastName: "Peterson" }, { firstName: "Suzy", lastName: "Degual" }, { firstName: "Liza", lastName: "Jones" }]