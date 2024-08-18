// WELCOME BOX

alert("Welcome to k3y{c0d3}")

// DYNAMIC X,Y, SEPARATE BOXES

const coordinate = (event) =>{
let x = event.clientX;
let y = event.clientY;

document.getElementById("X").value = x;
document.getElementById("Y").value = y;
}

// LAST KEY PRESSED

let lastKey ='';

document.addEventListener('keydown', function(event){
    lastKey = event.key;
    //event.code;event.which;
    document.getElementById('keyDisplay').textContent = lastKey;
    
})

let code = '';

document.addEventListener('keydown', function(event){
    code = event.code;
    document.getElementById('keyCode').textContent = code;
    
})

let bigNum = '';

document.addEventListener('keydown', function(event){
    bigNum = event.which;
    document.getElementById('keyNum').textContent = bigNum;
    
})

// LAST X,Y, CLICK LOCATION

document.addEventListener('click', function(event) {
let x = event.clientX;
let y = event.clientY;
    
document.getElementById('coordinates').innerText=`X = ${x}, Y = ${y}`
});
    