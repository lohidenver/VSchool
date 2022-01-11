console.log("connected");

// Fetch
// url: "https://rickandmortyapi.com/api/character"

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(response => {
        for (let i = 0; i < response.results.length; i++) {
            let h1 = document.createElement("h1");
            h1.textContent = response.results[i].name + " - " + response.results[i].status;
            document.body.appendChild(h1);
        }
    })
    .catch(err => console.log(err));






// fetch("https://rickandmortyapi.com/api/character", { method: "GET" })
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.log(err));

// fetch("https://rickandmortyapi.com/api/character", { method: "POST", body: JSON.stringify({}) })
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.log(err));

// fetch("https://rickandmortyapi.com/api/character", { method: "PUT", body: JSON.stringify({}) })
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.log(err));

// fetch("https://rickandmortyapi.com/api/character", { method: "DELETE", body: JSON.stringify({}})
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.log(err));