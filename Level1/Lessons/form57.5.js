
const form = document.myForm;

form.addEventListener("submit", event => {
    event.preventDefault();


    console.log(form.gender.value)//only one outcome
    console.log(form.entertainment)//multiple possible inputs

const checkedInputs = [];

for (let i = 0; i < form.entertainment.length; i++) {
    //.checked
    console.log(form.entertainment[i].checked);
    if(form.entertainment[i].checked) {
        checkedInputs.push(form.entertainment[i].value)
    }
}
 
console.log(checkedInputs)
console.log(myForm.city.value)
})