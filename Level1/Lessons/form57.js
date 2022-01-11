

const form1 = document.getElementById("myForm")

const form2 = document["myForm"]

//submit event

form2.addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = form2.myName.value;
    console.log(name);
    form2.myName.value = " ";

    const age = form2.myAge.value;
    console.log(age);
    form2.myAge.value = "";

    const h1 = document.createElement("h1");

    h1.textContent = name + " " + age;

    document.body.append(h1);

    
})

