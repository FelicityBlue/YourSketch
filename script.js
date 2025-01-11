
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
        canvasSize = -1;
        while(canvasSize < 1 || canvasSize > 100){
            canvasSize = prompt("Enter Canvas Size(1-100): ");
        }
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
        square.addEventListener("click", () => {
            square.style.background = "white";
        
        });
        // dragging
        square.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) { 
                square.style.background = "white";
            }
        });
    });
    });
}
function drawBtn(){
    const drawBtn = document.getElementById('draw-btn');
    const colorPicker = document.getElementById('color-picker');

    drawBtn.addEventListener("click", () => {
        draw(colorPicker.value);
    });
}
createCanvas(16);
generateNewCanvas();
applyColorPicker();
clearCanvas();
erase();