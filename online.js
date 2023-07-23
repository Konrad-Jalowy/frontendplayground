let conn = document.querySelector("#conn");
let btn = document.querySelector("#btn");

btn.addEventListener('click', function(e){
    conn.textContent = navigator.onLine ? "Online" : "Offline";
});