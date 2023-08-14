//kinda like Array.from... but you cannot use new Buffer. Only Buffer.from
var buff = Buffer.from("W tym zdaniu są jakieś polskie znaki.", "utf8");
//you can pass encoding in toString("utf8")
console.log(buff.toString());
//it overwrites the beginning but not deleting the rest. just like replacing first few indexes in an array
buff.write("Lorem ipsum");

console.log(buff.toString());