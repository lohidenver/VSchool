console.log("connected");

// DELETE request with axios

// axios.delete("https://api.vschool.io/daveroberts/todo/61da771b145e7804c26a1f95")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))









axios.get("https://api.vschool.io/daveroberts/todo/")
    .then(res => console.log(res))
    .catch(err => console.log(err))