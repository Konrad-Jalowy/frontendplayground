setInterval(function() {
    console.log("youre being hacked");
}, 2000);

process.on("SIGINT", function() {
    console.log("No way you can exit me like that");
});