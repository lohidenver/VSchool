

function logToConsole() { 
    var userInput = document.getElementById('text1').value;
    console.log(userInput);
    document.body.append(userInput);
    var newPara = document.createElement("p");
    newPara.textContent += userInput+ " ";
    document.createElement("br")
}

