

//Selectors

const listInput = document.querySelector(".input");
const listButton = document.querySelector(".subButton");
const listItem = document.querySelector(".list");

//Event Listeners
listButton.addEventListener("click", createItem);
listItem.addEventListener("click", deleteItem);
listItem.addEventListener("click", editItem);

//Functions
function createItem(e) {
  e.preventDefault();
  
  const item = document.getElementById("title").value;

  if (!item) {
      alert("Please input a grocery item");
      return;
  }
  //item div
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("listItem");
  //item li
  const newItem = document.createElement("li");
  let userInput = document.getElementById("title").value;
  newItem.textContent = userInput;
  newItem.classList.add("listItem");
  itemDiv.appendChild(newItem);
  

  //Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("editButton");
  itemDiv.appendChild(editButton);



  //Delete Button
  const delButton = document.createElement("button");
  delButton.textContent = "X";
  delButton.classList.add("delButton");
  itemDiv.appendChild(delButton);

  //append to list

  listItem.appendChild(itemDiv);
  //clear input value
   listInput.value = "";
  
}




  //Edit Button
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.classList.add("editButton");
//   itemDiv.appendChild(editButton);
  
function editItem(e) {
  e.preventDefault();

  const item = e.target;

  if(item.classList[0] === "editButton") {
    e.target.textContent = "Save";
   
    let itemValue = "hello";
    document.getElementById("title").setAttribute('value', itemValue);
    const itemDiv = prompt("What would you like it to say?")
    const listItem = item.parentElement;
    listItem.textContent =itemDiv;
    

    //e.target.textContent = "Edit";
  }
}

function deleteItem(e) {
  e.preventDefault();
  const item = e.target;
  if(item.classList[0] === "delButton") {
      const listItem = item.parentElement;
      listItem.remove();
  }

}
