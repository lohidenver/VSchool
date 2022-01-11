console.log("connected");

// PUT request with axios
const updates = {
    title: "Axios Put Method",
    description: "updating using axios"
}

axios.put("https://api.vschool.io/daveroberts/todo/61da771c145e7804c26a1f96", updates)
    .then(response => console.log(response.data))
    .catch(err => console.error(err))




const person = {
    name: "steve",
    age: 20
}

const changeName = {
    name: "dan"
}


const result = Object.assign(person, changeName)
console.log(result)



//GET 


// axios.get("https://api.vschool.io/daveroberts/todo/61da771c145e7804c26a1f96")
//     .then(res => console.log(res))
//     .catch(err => console.log(err)) //