const button = document.getElementById('roll')
const dice = document.getElementsByClassName('dice')[0]
let diceList = document.getElementById("dicelist")
let historyList = []

function rolldice() {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    const diceFace = getDiceface(random)
    console.log(diceFace);
    dice.innerHTML = diceFace;
    historyList.push(random);
    updateRollHistory();
}

function getDiceface(random){
    switch (random) {
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
    }
}

function updateRollHistory(){
    diceList.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const newItem = document.createElement("li")
        newItem.innerHTML = `Roll ${i+1}:<span class="Value">${getDiceface(historyList[i])}</span>`
        diceList.prepend(newItem);
    }
}


button.addEventListener("click",function () {
    console.log("button clicked");
    dice.classList.add("dice-animation");
    setTimeout(()=>{dice.classList.remove("dice-animation");
        rolldice()},1000)
});