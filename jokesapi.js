async function getJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    return joke;
  }

let jokeForm = document.querySelector("#jokeForm");
let numberForm = document.querySelector("#number");
let container = document.querySelector(".container");
jokeForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let number = numberForm.value;
    let  jokes = [];
    while(number > 0)
    {
        let joke = await getJoke();
        jokes.push(joke.value);
        number--;

    }
    let ul = document.createElement('ul');
    ul.innerText = `Your jokes:`;
    jokes.forEach((joke) => {
        let li = document.createElement('li');
        li.innerText = joke;
        ul.appendChild(li);

    });
    container.innerHTML = "";
    container.appendChild(ul);

});