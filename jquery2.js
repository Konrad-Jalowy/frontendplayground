$(function(){

    function getRandomColor(){
        return [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255) ];
    } 

    $("#square").click(function(){
        let [red, green, blue] = getRandomColor()
        let color = `rgb(${red}, ${green}, ${blue})`;
        $("#square").css('background-color', color);
    })
});