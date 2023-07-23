let textarea = document.querySelector('textarea');
    let span = document.querySelector("#word-count");
    function countWords(str) {
        return str.trim().split(/\s+/).length;
      }
    textarea.addEventListener("input",(e) => 
    { 
     let string = textarea.value;
     
     if(string.trim() == "")
     {
        span.textContent = 0;
     }
     else {

        let number = countWords(string);
        span.textContent = number;
     }
     
    });