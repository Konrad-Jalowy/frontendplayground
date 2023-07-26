function validatePassword(password) {
    let validation = true;
    validation = password === password.trim() ? true : false;
    validation &&= password.length >= 8 ? true : false;
    validation &&= password.includes("!") ? true : false;
    validation &&= password.toLowerCase() !== password ? true : false;
    return validation;
}

console.log(validatePassword("abcabc"));
console.log(validatePassword("abcabcabc"));
console.log(validatePassword("abcabcabc!"));
console.log(validatePassword(" bcaA!     "));
console.log(validatePassword("Abcabc! "));
console.log(validatePassword("Abcabc!a"));