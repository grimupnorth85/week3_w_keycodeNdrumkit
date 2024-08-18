const image = document.getElementById('greirat'); //the image displayed in the html page
const button = document.getElementById('greiratButton'); //the button i will use to change it

button.addEventListener('click', function(){ //the bit that adds an action to be performed after clicking the button
    if (image.style.visibility === 'hidden'){
        image.style.visibility = 'visible';
    } else { //using an if/else function to determine whether the image is visible 
        image.style.visibility = 'hidden';
    } 
});

