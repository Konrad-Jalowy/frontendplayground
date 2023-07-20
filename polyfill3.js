Array.prototype.myFlat = function(){
    let result = [];
    this.forEach( (element) => {
        if(Array.isArray(element))
        {
            result.push(...element.myFlat());
        }
        else {
            result.push(element);
        }
    });
    return result;
}

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.myFlat());
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.myFlat());
