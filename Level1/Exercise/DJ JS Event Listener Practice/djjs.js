

document.getElementById('box1').addEventListener('mousedown', function(){
    box1.style.backgroundColor = "red";
    console.log('mousedown');
})

document.getElementById('box1').addEventListener('mouseup', function(){
    box1.style.backgroundColor = "yellow";
    console.log('mouseup');
})

document.getElementById('box1').addEventListener('mouseover', function(){
    box1.style.backgroundColor = "blue";
    console.log('hover on')
}, function(){
    console.log('hover off')
});

document.getElementById('box1').addEventListener('mouseout', function(){
    box1.style.backgroundColor = "white";
    console.log('mouseout');
})

document.getElementById('box1').addEventListener('dblclick', function(){
    box1.style.backgroundColor = "green";
    console.log('double click');
})

document.addEventListener('wheel', function(){
    box1.style.backgroundColor = "orange";
    console.log('mouse wheel')
})

document.addEventListener('keydown', function(e){
    if (e.keyCode === 82) {
        box1.style.backgroundColor = "red"
    } else if (e.keyCode === 89) {
        box1.style.backgroundColor = "yellow"
    } else if (e.keyCode === 71) {
        box1.style.backgroundColor = "green"
    } else if (e.keyCode === 79) {
        box1.style.backgroundColor = "orange"
    } else if (e.keyCode === 66) {
        box1.style.backgroundColor = "blue"
    } else {
        box1.style.backgroundColor = "white"
    }
    console.log('keydown', e.which);
})

