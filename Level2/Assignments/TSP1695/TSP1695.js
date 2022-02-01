console.log("connected");

const API = "https://api.vschool.io/daveroberts/todo/";
const todoElement = document.getElementById("todoList");

//get all
function getAll() {
    axios
        .get(API)
        .then((res) => listAll(res.data))
        .catch((err) => console.log(err));
}
//list all
function listAll(getAllData) {
    clearAll();
    for (let i = 0; i < getAllData.length; i++) {
        const taskElem = document.createElement("div");
        taskElem.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        taskElem.appendChild(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = getAllData[i].title;
        taskInput.setAttribute("readonly", "readonly");
        taskInput.setAttribute("size", "50");
        taskContent.appendChild(taskInput);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");

        const taskStatus = document.createElement("input");
        taskStatus.classList.add("status");
        taskStatus.type = "checkbox";
        taskStatus.name = "taskStatus";
        taskStatus.checked = getAllData[i].completed;
        taskStatus.labels = ["completed", "in complete"];
        taskStatus.classList.add("taskStatus");
        if (taskStatus.checked) {
            taskInput.style.backgroundColor = "dodgerblue";
        }

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerText = "Edit";

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerText = "Delete";

        taskActions.appendChild(taskStatus);
        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskElem.appendChild(taskActions);

        todoElement.appendChild(taskElem);

        taskStatus.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log("pre- " + taskStatus.checked);
            taskStatus.checked = !taskStatus.checked;
            // console.log("\npost- " + taskStatus.checked);
            taskComplete(getAllData[i]._id, taskStatus.checked);

            getAll();
        });

        taskDelete.addEventListener("click", (e) => {
            e.preventDefault();
            deleteItem(getAllData[i]._id);
            getAll();
        });

        taskEdit.addEventListener("click", () => editItem());

        // console.log(getAllData)
    }
}

//clear list before reposting
function clearAll() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

function resetForm() {
    newTaskForm.title.value = "";
    newTaskForm.description.value = "";
    newTaskForm.price.value = "";
    newTaskForm.imgUrl.value = "";
}

//create item
function createItem() {
    const newItem = {
        title: newTaskForm.title.value,
        description: newTaskForm.description.value,
        price: newTaskForm.price.value,
        imgUrl: newTaskForm.imgUrl.value,
    };

    axios
        .post(API, newItem)
        .then((res) => getAll())
        .catch((err) => console.log(err));
    resetForm();
    console.log("created item");
}

function deleteItem(id) {
    console.log("attempted delete item");
    console.log(id);
    axios
        .delete(API + id)
        .then((res) => {
            console.log(res.data)
            getAll()
        })
        .catch((err) => console.log(err));
}

function taskComplete(id, completed) {
    console.log("\n*Attempted task complete*");
    console.log("id- " + id, "      status- " + completed);

    let updated = {
        completed: !completed
    }

    axios
        .put(API + id, updated)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

    clearAll();
    getAll();
}

function editItem(id) {
    console.log("attempted edit item");
    axios.put(API + id, {
        title: newTaskForm.title.value,
        description: newTaskForm.description.value,
        price: newTaskForm.price.value,
        imgUrl: newTaskForm.imgUrl.value,
    });
}

const todoForm = document.newTaskForm;

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    createItem(); //replace with createTodo

});

getAll();