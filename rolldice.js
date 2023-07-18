async function getDice() {
    const response = await fetch("http://localhost/frontendplayground/rolldice.php");
    const roll = await response.json();
    return roll;
  }

let diceForm = document.querySelector("#diceForm");
let numberForm = document.querySelector("#number");
let container = document.querySelector(".container");
diceForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let number = numberForm.value;
    let numbers = [];
    while(number > 0)
    {
        let roll = await getDice();
        // console.log(roll.roll);
        numbers.push(roll.roll);
        number--;

    }
    // console.log(numbers.join(','));
    let text = numbers.join(',');
    let element = document.createElement('p');
    element.innerText = `Dice rolled: ${text}`;
    container.innerHTML = "";
    container.appendChild(element);

});