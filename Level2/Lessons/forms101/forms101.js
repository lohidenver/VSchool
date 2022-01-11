const formResult = document.formEx;

formResult.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(formResult.gender.value);
    // console.log(formResult.entertainment);

    const checkedInputs = [];

    for (let i = 0; i < formResult.entertainment.length; i++) {
        if (formResult.entertainment[i].checked) {
            checkedInputs.push(formResult.entertainment[i].value)
        }
    }

    console.log(checkedInputs)

    console.log(formResult.city.value)
})

// const form = document.myForm

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     // console.log(form.gender.value)

//     // console.log(form.entertainment)

//     for (let i = 0; i < form.entertainment.length; i++) {
//         console.log(form.entertainment[i].checked)
//     }
// })