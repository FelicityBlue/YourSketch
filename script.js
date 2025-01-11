
function createCanvas(canvasSize){    
    console.log("Creating new canvas");
    const container = document.querySelector(".container");

    container.style.setProperty('--canvas-size', canvasSize);
    container.innerHTML = '';

    for(let i = 0; i< (canvasSize*canvasSize); i++){
        let square = document.createElement("div");
        square.classList.add("square-item");
        container.appendChild(square);
    }
    const colorPicker = document.getElementById('color-picker');
    draw(colorPicker.value);
}
function draw(color){
    const squares = document.querySelectorAll('.square-item');
    
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            square.style.background = color;
        
        });
        // dragging
        square.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) { 
                square.style.background = color;
            }
        });
    });
    
}

function destroyCanvas(){
    const container = document.querySelector('.container');
    container.innerHTML = '';
}


function generateNewCanvas(){
    const newCanvasBtn = document.querySelector('#new-canvas-btn');
    newCanvasBtn.addEventListener("click", () => {
        console.log("new canvas clicked");
        canvasSize = prompt("Enter Canvas Size: ");
        destroyCanvas();
        createCanvas(canvasSize);
    });
}

function applyColorPicker(){
    const colorPicker = document.getElementById('color-picker');
    colorPicker.addEventListener('input', () =>{
        draw(colorPicker.value);
    });
}

function clearCanvas(){
    const clearBtn = document.getElementById('clear-btn');
    const squares = document.querySelectorAll('.square-item');

    clearBtn.addEventListener("click", () => {
        squares.forEach((square) => {
            square.style.background = "white";
        });
    });
    
}

function erase(){
    const eraserBtn = document.getElementById('eraser-btn');
    const squares = document.querySelectorAll('.square-item');
    
    eraserBtn.addEventListener("click", () => {
        squares.forEach((square) => {
            square.addEventListener("mouseover", () => {
                square.style.background = "white";
        
            });
        });
    });
}
createCanvas(16);
generateNewCanvas();
applyColorPicker();
clearCanvas();
erase();