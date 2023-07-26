function once(str, char) {
    let output = true;
    output = str.indexOf(char) === -1 ? false : true;
    output &&= str.indexOf(char) === str.lastIndexOf(char) ? true: false;
    return output;
}

console.log(once("hello", "l"));
console.log(once("helo", "l"));
console.log(once("hi", "l"));