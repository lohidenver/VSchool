console.log("connected")

const formResult = document.mario;

formResult.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Goombas: " + formResult.goomba.value);
    console.log("Bob-ombs: " + formResult.bobomb.value);
    console.log("Cheep-cheeps: " + formResult.cheep.value);

    const goomba = (formResult.goomba.value * 5)
    const bobomb = (formResult.bobomb.value * 7)
    const cheep = (formResult.cheep.value * 11)
    const consTotal = (goomba + bobomb + cheep);
    console.log("Total: " + consTotal)

    const total = document.createElement('h4');

    document.getElementById('totalGoomba').textContent = (`Goombas: ${formResult.goomba.value} * 5 coins`);
    document.getElementById('totalBobomb').textContent = (`Bob-ombs: ${formResult.bobomb.value} * 7 coins`);
    document.getElementById('totalCheep').textContent = (`Cheep-cheeps: ${formResult.cheep.value} * 11 coins`);


    document.getElementById("totCoins").textContent = (`${consTotal} coins`);
})