Array.prototype.myLastIndex = function(callback){
    let idx = this.length - 1;
    while(idx > 0)
    {
        if(callback(this[idx]))
        {
            return idx;
        }
        idx--;
    }
    return -1;
}

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;
const isLargeNumber2 = (element) => element > 455;
console.log(array1.myLastIndex(isLargeNumber));
console.log(array1.myLastIndex(isLargeNumber2));