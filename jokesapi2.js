let url = "https://api.chucknorris.io/jokes/random";
let categoriesUrl = "https://api.chucknorris.io/jokes/categories";
let jokeForm = document.querySelector("#jokeForm");
let numberForm = document.querySelector("#number");
let container = document.querySelector(".container");
let category = document.querySelector('#category');

async function getJoke() {
    const response = await fetch(url);
    const joke = await response.json();
    return joke;
  }

  (async () => {
    let response = await fetch(categoriesUrl);
    let categories = await response.json();
    categories.forEach((cat) => {
        let option = document.createElement('option');
        option.innerHTML = cat;
        option.value = cat;
        category.appendChild(option);
    })

    })().catch(err => {
        console.error(err);
    });
jokeForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let number = numberForm.value;
    let categoryChosen = category.value;
    if(categoryChosen !== "all")
    {
        url = "https://api.chucknorris.io/jokes/random" + `?category=${categoryChosen}`;
        console.log(url);
    }
    let  jokes = [];
    while(number > 0)
    {
        let joke = await getJoke();
        jokes.push(joke.value);
        number--;

    }
    let ul = document.createElement('ul');
    
    if(categoryChosen !== "all")
    {
        ul.innerText = `Your jokes (${categoryChosen})`;
    }
    else{
        ul.innerText = `Your jokes:`;
    }
    jokes.forEach((joke) => {
        let li = document.createElement('li');
        li.innerText = joke;
        ul.appendChild(li);

    });
    container.innerHTML = "";
    container.appendChild(ul);

});