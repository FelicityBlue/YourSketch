
function createCanvas(canvasSize){    
    console.log("Creating new canvas");
    const container = document.querySelector(".container");
    for(let i = 0; i< canvasSize; i++){
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("square-item-container");
        container.appendChild(itemContainer);
        for(let j = 0; j < canvasSize; j++){
            let square = document.createElement("div");
            square.classList.add("square-item");
            itemContainer.appendChild(square);
        }
    }
    const colorPicker = document.getElementById('color-picker');
    draw(colorPicker.value);
}
function draw(color){
    const squares = document.querySelectorAll('.square-item');
    
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.background = color;
        
        });
    });
    
}

function destroyCanvas(){
    const squares = document.querySelectorAll('.square-item');
    const squareContainers  = document.querySelectorAll(".square-item-container");
    squares.forEach((square) => {
        square.remove();
    });
    squareContainers.forEach((square) => {
        square.remove();
    });
}


function generateNewCanvas(){
    const newCanvasBtn = document.querySelector('#new-canvas-btn');
    newCanvasBtn.addEventListener("click", () => {
        console.log("new canvas clicked");
        canvasSize = prompt("Enter Canvas Size: ");
        destroyCanvas();
        createCanvas(canvasSize);
        draw();
    });
}

function applyColorPicker(){
    const colorPicker = document.getElementById('color-picker');
    colorPicker.addEventListener('input', () =>{
        draw(colorPicker.value);
    });
}
createCanvas(16);
generateNewCanvas();
applyColorPicker();