String.prototype.multisplit = function multisplit(...arguments){
    if(arguments.length === 1)
    {
        return this.split(arguments[0]);
    }
    let delimiters = [...arguments];
    let firstDelimiter = delimiters[0];
    let output = this.split(firstDelimiter);
    for(let i = 1; i<delimiters.length; i++)
    {
        output = output.flatMap( el => el.split(delimiters[i]));
    }
    return output;

}
console.log("a b c".multisplit(" "));
console.log("a b c:d e,f g-h".multisplit(" ", ":", ",", "-"));
