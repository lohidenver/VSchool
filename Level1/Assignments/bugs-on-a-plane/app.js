console.log("app started");
var airlineForm = document.getElementById("airline-form");
var userInput = document.getElementById("submit");

function formAlert() {
 
    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
console.log(firstName);
console.log(lastName);
    var age =document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var location = document.getElementById("travel-location").value;
    
    var diet = [];
       
    if (document.getElementById('vegan').checked) {
        diet.push(document.getElementById('vegan').value);
    } 
    if (document.getElementById('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.getElementById('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }



    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

document.getElementById("submit").addEventListener("click", function(){ 
    formAlert();
})
