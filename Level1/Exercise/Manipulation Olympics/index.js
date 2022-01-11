/////Qualifier
document.body.style.backgroundColor = "silver";

var headerTitle = document.getElementById("header");
headerTitle.style.textAlign = "center";
var newSpan1 = document.createElement("span");
var newSpan2 = document.createElement("span");
var newSpan3 = document.createElement("span");
var newBreak = document.createElement("br");
var creatorName = "Dave Roberts";

headerTitle.append(newSpan1, newBreak, newSpan2, newSpan3);
newSpan1.textContent = "JavaScript Made This!";
newSpan1.style.fontSize = "60px";
newSpan2.textContent = creatorName;
newSpan2.setAttribute("class", "name");
newSpan2.style.fontSize = "30px";
newSpan3.textContent = " wrote the JavaScript.";
newSpan3.style.fontSize = "30px";

/////Bronze

var mLeft1 = document.getElementsByClassName("left")[0];
mLeft1.textContent = "What did the ocean say to the beach";

var mLeft2 = document.getElementsByClassName("left")[1];
mLeft2.textContent = "Nothing, it just waved.";

var mRight = document.getElementsByClassName("right")[0];
mRight.textContent = "I have no idea. What?";

var mRight2 = document.getElementsByClassName("right")[1];
mRight2.textContent = "I understand why you have no friends.";

document.getElementById("clear-button").addEventListener("click", function () {
  console.log("clear")

  var elements = document.getElementById("main").getElementsByTagName("div");

  for (var i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]);
  }
});

/////Silver

function updateThemes() {
  var themes = document.getElementById("theme-drop-down").value;

  if (themes === "theme-two") {
    var elementsL = document
      .getElementById("main")
      .getElementsByClassName("left");

    for (var i = 0; i < elementsL.length; i++) {
      elementsL[i].style.backgroundColor = "red";
      elementsL[i].style.color = "white";
    }

    var elementsR = document
      .getElementById("main")
      .getElementsByClassName("right");

    for (var i = 0; i < elementsL.length; i++) {
      elementsR[i].style.backgroundColor = "black";
      elementsR[i].style.color = "white";
    }
  } else {
    var elementsL = document
      .getElementById("main")
      .getElementsByClassName("left");

    for (var i = 0; i < elementsL.length; i++) {
      elementsL[i].style.backgroundColor = "burlywood";
      elementsL[i].style.color = "black";
    }

    var elementsR = document
      .getElementById("main")
      .getElementsByClassName("right");

    for (var i = 0; i < elementsL.length; i++) {
      elementsR[i].style.backgroundColor = "lightblue";
      elementsR[i].style.color = "black";
    }
  }

  console.log(themes);
}

/////Gold
var count = 0;

document["message"].addEventListener("click", function (e) {
  if (count % 2 === 0) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "message left");
    newDiv.textContent = document.getElementById("input").value;
    var mainId = document.getElementById("main");
    var addMes = document.querySelector(".messages");
    addMes.append(newDiv);
    console.log("addMes");
    count++;
  } else {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "message right");
    newDiv.textContent = document.getElementById("input").value;
    var mainId = document.getElementById("main");
    var addMes = document.querySelector(".messages");
    addMes.append(newDiv);
    console.log("addMes");
    count++;
  }
  e.preventDefault();
});

// var sendButton = document.getElementById("btn");
// sendButton.addEventListener("click", function (e) {
//     if (count % 2 === 0) {
//       var newDiv = document.createElement("div");
//       newDiv.setAttribute("class", "message left");
//       newDiv.textContent = document.getElementById("input").value;
//       var mainId = document.getElementById("main");
//       var addMes = document.querySelector(".messages");
//       addMes.append(newDiv);
//       console.log("addMes");
//       count++;
//     } else {
//       var newDiv = document.createElement("div");
//       newDiv.setAttribute("class", "message right");
//       newDiv.textContent = document.getElementById("input").value;
//       var mainId = document.getElementById("main");
//       var addMes = document.querySelector(".messages");
//       addMes.append(newDiv);
//       console.log("addMes");
//       count++;
//     }
//     e.preventDefault();
//   });