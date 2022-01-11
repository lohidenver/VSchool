console.log("connected");


//resolve - then
//reject - catch

//thenable - when a function returns a promise
function flipCoins() {
    return new Promise((resolve, reject) => {

        const randomNumber = Math.floor(Math.random() * 2);

        if (randomNumber === 0) {
            resolve("HEADS")
        } else if (randomNumber === 1) {
            reject("TAILS")
        }
    })
}

flipCoins().then(response => console.log("RESOLVED: " + response)).catch(error => console.log("REJECTED: " + error));

// flipCoins()
//     .then(response => console.log("RESOLVED: " + response))
//     .catch(error => console.log("REJECTED: " + error))

// Promise.resolve("Something").then(response => console.log(response))

function getData() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}

getData().then(response => console.log("RESOLVED ")).catch(error => console.log("REJECTED "))