console.log("connected");

// Get requests with axios
// url: https://api.vschool.io/daveroberts/todo

// Get All

//axios.get("https://api.vschool.io/daveroberts/todo").then(response => console.log(response)).catch(err => console.error(err))
axios.get("https://api.vschool.io/daveroberts/todo").then(response => console.log(response.data)).catch(err => console.error(err))

axios.get("https://api.vschool.io/daveroberts/todo")
    .then(response => {

        for (let i = 0; i < response.data.length; i++) {
            let h1 = document.createElement("h1");
            h1.textContent = response.data[i].title;
            document.body.appendChild(h1)

        }



    })
    .catch(err => console.error(err))

// Get One

axios.get("https://api.vschool.io/daveroberts/todo/61d94ca3145e7804c26a1f87")
    .then(response => {


        let h1 = document.createElement("h1");
        h1.textContent = response.data.title;
        document.body.appendChild(h1)
        console.log("test")




    })
    .catch(err => console.error(err))