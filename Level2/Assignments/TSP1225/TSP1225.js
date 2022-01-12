console.log("connected")

////////////////////////////////variables////////////////////////////////

var peopleArray = [{
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

////////////////////////////////Functions////////////////////////////////


function sortedOfAge(arr) {
    const ageResult = arr.filter(function(ageArr) {
        if (ageArr.age > 18) {

            return ageArr;
        }
    })

    const lastNameSorted = ageResult.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else if (a.lastName === b.lastName) {
            return 0;
        } else {
            return 1;
        }
    })

    const newArr = [];

    lastNameSorted.forEach(function(str) {
        str = `<li>${str.firstName} ${str.lastName} is ${str.age}</li>`;
        newArr.push(str);

    })

    return newArr


}

console.log(sortedOfAge(peopleArray));