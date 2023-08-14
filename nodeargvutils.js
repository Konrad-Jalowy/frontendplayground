//thats the blueprint for cmd node app. getting and validating argv


//depends on the number of args you want to take
const args = process.argv.slice(2);

function argv(arg) {
    //args must start with -- in this version
    var index = args.indexOf("--" + arg);

    if(index !== -1 && args[index + 1] !== undefined) {
        return args[index + 1];
    } else {
        return null;
    }

}

function validateArgs(args) {

    var valid = true;

    args.forEach(function(arg) {

        if(!argv(arg)) {
            valid = false;
        }

    });

    return valid;

}

module.exports = {
    get: argv,
    validate: validateArgs
};