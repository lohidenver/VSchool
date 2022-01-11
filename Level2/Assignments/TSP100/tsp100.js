////////////////////////////////Addition
const addForm = document['addition'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Addition triggered');
    const num1 = parseInt(addForm.add1.value);
    const num2 = parseInt(addForm.add2.value);
    addForm.add1.value = "";
    addForm.add2.value = "";
    let result = num1 + num2;

    const h3 = document.createElement('h3');
    h3.textContent = (num1 + " + " + num2 + " = " + result);
    document.getElementById('addResult').append(h3);
})


////////////////////////////////Subtraction
const subForm = document['subtraction'];
subForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Subtraction triggered');
    const num1 = subForm.sub1.value;
    const num2 = subForm.sub2.value;
    subForm.sub1.value = "";
    subForm.sub2.value = "";
    let result = num1 - num2;

    const h3Result = document.createElement('h3');
    h3Result.textContent = (num1 + " - " + num2 + " = " + result);
    document.getElementById('subResult').append(h3Result);
})



////////////////////////////////Multiplication

const multForm = document['multiplication'];
multForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Multiplication triggered');
    const num1 = multForm.mult1.value;
    const num2 = multForm.mult2.value;
    multForm.mult1.value = "";
    multForm.mult2.value = "";
    let result = num1 * num2;

    const h3 = document.createElement('h3');
    h3.textContent = (num1 + " * " + num2 + " = " + result);
    document.getElementById('multResult').append(h3);
})