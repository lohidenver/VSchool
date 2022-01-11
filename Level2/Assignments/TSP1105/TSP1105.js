console.log("connected");

////////////////////////////////
function doubleNumbers(arr) {
    let result = arr.map(function(n) {
        return n * 2;
    });
    return result;
}

console.log(doubleNumbers([2, 5, 100]));
////////////////////////////////
function stringItUp(arr) {
    let result = arr.map(function(n) {
        return n.toString();
    });
    return result;
}

console.log(stringItUp([2, 5, 100]));
////////////////////////////////

function capitalizeNames(arr) {
    let result = arr.map(function(n) {
        return n[0].toUpperCase() + n.slice(1).toLowerCase();
    });
    return result;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
////////////////////////////////
function namesOnly(arr) {
    let result = arr.map(function(n) {
        return n.name;
    });
    return result;
}

console.log(
    namesOnly([{
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
////////////////////////////////
function makeStrings(arr) {
    let result = arr.map(function(n) {
        if (n.age > 18) {
            return n.name + " can go to the Matrix";
        } else {
            return n.name + " is under age!!";
        }
    });
    return result;
}

console.log(
    makeStrings([{
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
////////////////////////////////

function readyToPutInTheDOM(arr) {

    let result = arr.map(function(n) {
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        h1.textContent = n.name;
        h2.textContent = n.age;
        document.body.appendChild(h1);
        document.body.appendChild(h2);


        return "<h1>" + n.name + "</h1>" + "<h2>" + n.age + "</h2>";
    })
    return result;
}




console.log(readyToPutInTheDOM([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]