function validateUser(req,res,next){
    // get info out of the req object
    // do some stuff with the DB
    res.locals.validated = true
    console.log("VALIDATED RAN!")
    next();
}

// This will run validateUser on ALL paths, all methods!
app.use(validateUser)