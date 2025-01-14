
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
    const drawBtn = document.getElementById('draw-btn');
    
    drawBtn.classList.add("current-mode");
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
    const drawBtn = document.getElementById('draw-btn');
    
    eraserBtn.addEventListener("click", () => {
        console.log("Eraser Button is Pressed!");
        
        eraserBtn.classList.add("current-mode");
        drawBtn.classList.remove("current-mode");
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
    const colorPicker = document.getElementById('color-picker');
    const drawBtn = document.getElementById('draw-btn');
    const eraserBtn = document.getElementById('eraser-btn');

    
    drawBtn.addEventListener("click", () => {
        drawBtn.classList.add("current-mode");
        eraserBtn.classList.remove("current-mode");
        console.log("Draw Button is Pressed!");
        draw(colorPicker.value);
    });
}
createCanvas(16);
generateNewCanvas();
applyColorPicker();
clearCanvas();
erase();
drawBtn();