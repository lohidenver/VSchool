// const form = document.getElementById('myForm'); //by Id
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log('Form by ID');
//     const firstName = form.firstName.value;
//     form.firstName.value = "";
//     const lastName = form.lastName.value;
//     form.lastName.value = "";

//     console.log(firstName + " " + lastName);
// })


const form2 = document['myNamedForm']; //by name <--preferred 
form2.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form by name');
    const firstName = form2.firstName.value;
    const lastName = form2.lastName.value;
    form2.firstName.value = "";
    form2.lastName.value = "";

    // 1. <h1></h1>
    const h1 = document.createElement('h1');
    // 2. <h1> Harry Potter</h1></>
    h1.textContent = firstName + " " + lastName;
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1);
    console.log("test")
})