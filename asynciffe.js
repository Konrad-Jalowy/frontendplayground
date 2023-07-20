async function getDice() {
    const response = await fetch("http://localhost/frontendplayground/rolldice.php");
    const roll = await response.json();
    return roll;
  }
let info = document.querySelector("#info");
let yourRoll = document.querySelector("#yourRoll");
let btn = document.querySelector("#btn");
let opponent = 0;
let you = 0;

  (async () => {
    let response = await getDice();
    
    info.textContent = `Your opponent rolled ${response.roll}`;
    })();
    

btn.addEventListener('click', async function(e) {
    let response = await getDice();
  
    yourRoll.textContent = `You rolled ${response.roll}`;

});