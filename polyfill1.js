Array.prototype.myJoin = function(sep=",")
{
    if(this.length === 0)
    {
        return "";
    }
    else if (this.length === 1) {
        return `${this[0]}`;
    }
    else {
        let lastIdx = this.length - 1;
        let output = "";
        let cnt = 0;
        while(cnt < this.length)
        {
            if(cnt === lastIdx)
            {
                output += this[cnt];
                break;
            }
            output += `${this[cnt]}${sep}`;
            cnt++;
        }
    return output;
    }
}
console.log([1,2,3].myJoin(':'));