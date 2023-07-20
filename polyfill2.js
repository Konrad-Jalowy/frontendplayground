String.prototype.myTrim = function(){
    let start = 0;
    let end = this.length - 1;
    while(this[start] === " ")
    {
        start++;
    }
    while(this[end] === " ")
    {
        end--;
    }
    return this.slice(start, end+1);
}

console.log("    Hello World   ".myTrim())
console.log("Hello World   ".myTrim())
console.log("    Hello World!".myTrim())
console.log("    Hello World ".myTrim())
console.log(" Hello World ".myTrim())
console.log("Hello World".myTrim())