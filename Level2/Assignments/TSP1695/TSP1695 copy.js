console.log("connected");




const API = "https://api.vschool.io/daveroberts/todo/"
const todoElement = document.getElementById('tasks')
    //get all
function getAll() {
    axios.get(API)
        .then(res => listAll(res.data))
        .catch(err => console.log(err))

}
//list all
function listAll(getAllData) {
    clearAll();
    for (let i = 0; i < getAllData.length; i++) {

        const taskElem = document.createElement('div');
        taskElem.classList.add('task')

        const taskContent = document.createElement('div');
        taskContent.classList.add('content');

        taskElem.appendChild(taskContent);

        const taskInput = document.createElement('input');
        taskInput.classList.add('text');
        taskInput.type = 'text';
        taskInput.value = getAllData[i].title;
        taskInput.setAttribute('readonly', 'readonly');

        taskContent.appendChild(taskInput);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const taskStatus = document.createElement('input');
        taskStatus.classList.add('status');
        taskStatus.type = "checkbox";
        taskStatus.name = "taskStatus";
        taskStatus.value = getAllData[i].completed;
        taskStatus.labels = ["completed", "in complete"]
        taskStatus.classList.add('taskStatus');

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('edit');
        taskEdit.innerText = 'Edit';

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete');
        taskDelete.innerText = 'Delete';

        taskActions.appendChild(taskStatus);
        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskElem.appendChild(taskActions);

        document.getElementById('todoList').appendChild(taskElem);

        taskStatus.addEventListener('change', () => taskStatus.checked = !taskStatus.checked);
        taskDelete.addEventListener('click', () => deleteItem());
        taskEdit.addEventListener('click', () => editItem());

        console.log(getAllData)
    }

}

//create item
function createItem() {

    const newItem = {
        title: newTaskForm.title.value,
        description: newTaskForm.description.value,
        price: newTaskForm.price.value,
        imgUrl: newTaskForm.imgUrl.value,
    }

    axios.post(API, newItem)
        .then(res => getAll())
        .catch(err => console.log(err))
    resetForm();
    console.log("created item")
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

function deleteItem(e) {
    console.log("attempted delete item");

    axios.delete(API)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

function editItem() {
    console.log("attempted edit item")
    axios.put(API, {
        title: newTaskForm.title.value,
        description: newTaskForm.description.value,
        price: newTaskForm.price.value,
        imgUrl: newTaskForm.imgUrl.value,

    })
}

function taskStatus() {

}

const todoForm = document.newTaskForm;

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAll();
    createItem(); //replace with createTodo
    getAll();
})

getAll();