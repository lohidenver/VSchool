airline.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = airline.firstName.value;
    const lastName = airline.lastName.value;
    const age = airline.age.value;
    const gender = airline.gender.value;
    const destination = airline.destination.value;

    const checkedFood = [];

    for (let i = 0; i < airline.food.length; i++) {
        if (airline.food[i].checked) {
            checkedFood.push(airline.food[i].value);
        }
    }

    alert(
        `First name: ${firstName} \nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDietary Restriction: ${checkedFood}`
    );
});