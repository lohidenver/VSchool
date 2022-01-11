



var newLi = document.createElement("li");
var myList = document.getElementById("my-list");
myList.append(newLi);
newLi.textContent = "3";

var newLi2 = document.createElement("li");
myList.prepend(newLi2);
newLi2.textContent = "4";

var newPara = document.createElement("p");
newPara.textContent = "He swung back the fishing pole and cast the line which fell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear.";

newPara.style.textAlign = "center";
newPara.style.fontSize = "20px";
newPara.style.color = "red";
document.body.append(newPara);