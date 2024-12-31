const container = document.querySelector(".container");
function createCanvas(canvasSize){    
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
}

createCanvas(16);

const squares = document.querySelectorAll('.square-item');

function draw(){
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("draw")
        }
        );
        console.log('drawn over');
    });
}

draw();