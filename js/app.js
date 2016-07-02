$(document).foundation()

//sliding image js
//getting the element's id and saving it
var blue = document.getElementById("slider");
//an array of images
var orange = ["img/ben.jpg", "img/piza.jpg", "img/huberger.jpg", "img/food2.jpg", "img/full.jpg", "img/insider.jpg","img/rice.jpg","img/images%20(1).jpg"];
//counter
var counter = 0;
//function to image slider
function slidy() {
    blue.src = orange[counter];
    counter++;
    //counter reset
    if (counter >= orange.length) {
        counter = 0;
    }
}
setInterval(slidy, 3000);
