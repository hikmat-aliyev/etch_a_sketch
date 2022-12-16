const container = document.querySelector(".container")
let squareSide = container.offsetWidth - 10;
console.log(squareSide);

let div;
let squares; // const -> let
let squareNumber = 16;

//create grid
function createGrid(squareNumber) {
    // I converted next lines into function for recalling it later.

    for (let i = 0; i < squareNumber * squareNumber; i++) {
        div = document.createElement("div");
        container.appendChild(div);
        div.className = "square";
        div.style.width = `${squareSide / squareNumber}px`;
        div.style.height = div.style.width;
        console.log(`${div.style.height} and ${div.style.width}`)
    }

    squares = document.querySelectorAll(".square");
    let color = document.getElementById("color-input").value;
    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = color;
            }
        });
    });

    //in mouseover case, you can't color 1 square, that is why I wrote that function with mousedown event
    squares.forEach(square => {
        square.addEventListener("mousedown", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = color;
            }
        });
    });
}
createGrid(squareNumber );

//we can change width, height of square but can't change i < square * square, it remains as 16 * 16
function changeBoxSize() {
    // You need to clean the container and recreate desired squares

    const cleanContainer = () => {
        document.querySelector(".container").innerHTML = "";
    }

    squareNumber = document.getElementById("myInput").value;
    //limit square value to 100
    if(squareNumber > 100){
        document.querySelector("p").textContent = "Value should be equal or less than 100"; 
        return;
    }
    else if(squareNumber <= 100){
        document.querySelector("p").textContent = ""; 
    }
    cleanContainer();
    createGrid(squareNumber);   
}

function cleanColor() {
    document.querySelector(".container").innerHTML = "";
    //checking if there is input value, else we assign default value which is 16 
    if(document.getElementById("myInput").value){
        squareNumber = document.getElementById("myInput").value; 
    }
    createGrid(squareNumber);   
}

function changeColor() {
    
    let color = document.getElementById("color-input").value;

    let squares = document.querySelectorAll(".square"); 

    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = color;
            }
        });
    });

    squares.forEach(square => {
        square.addEventListener("mousedown", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = color;
            }
        });
    });
}


function rainbow() {

    squares = document.querySelectorAll(".square");

    function randomColor() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
    }

    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = randomColor();
            }
        });
    });

    squares.forEach(square => {
        square.addEventListener("mousedown", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = randomColor();
            }
        });
    });

}

function eraser() {
    squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = "transparent";
            }
        });
    });

    squares.forEach(square => {
        square.addEventListener("mousedown", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = "transparent";
            }
        });
    });
}