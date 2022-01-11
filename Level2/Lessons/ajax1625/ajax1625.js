console.log("connected");

// XMLHttpRequest


// how do we create a request (xhr)
// what parts of this object are important for our request


// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

//xhr.open();
//xhr.send();

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.dev/api/people", true);
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        // console.log(typeof xhr.responseText);
        console.log(json);
        showData(json.results);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
        console.log("xhr.responseText")
    }
}


xhr.readyState
    // 0 request is unsent
    // 1 request has been sent
    // 2 headers received
    // 3 loading
    // 4 request is complete

xhr.status
    // 200 status code - is good 
    // 404 status code - not found
    // 201
    // 500

function showData(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
        const h1 = document.createElement('h1');
        h1.textContent = jsonData[i].name;
        document.body.appendChild(h1);
    }


}