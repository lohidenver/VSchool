console.log("connected");

// Post request
// Request Body

// const newTodo = {
//     title: "This is my Axios Post Todo",
//     description: "This is my Axios Post Todo story point 1675",
//     imgUrl: "https://i2.wp.com/oilersnation.com/wp-content/uploads/2021/01/Edmonton-Oilers-Loss-Frank-Reynolds.png",

// }




const todoForm = document.todoform;

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value

    }

    axios.post("https://api.vschool.io/daveroberts/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
})