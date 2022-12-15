const container = document.querySelector(".container")
let squareSide = container.offsetWidth - 10;
console.log(squareSide);

let div;
let squareNumber = 16;
//create grid

for(let i = 0; i < squareNumber * squareNumber; i ++){
div = document.createElement("div");
container.appendChild(div);
div.className = "square";
div.style.width = `${squareSide / squareNumber}px`;
div.style.height = div.style.width;
console.log(`${div.style.height} and ${div.style.width}`)
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
square.addEventListener("mouseover", event => {
if(event.buttons === 1) {
square.classList.add("hovered-square");
}
})
})

//in mouseover case, you can't color 1 square, that is why I wrote that function with mousedown event
squares.forEach(square => {
square.addEventListener("mousedown", event => {
if(event.buttons === 1) {
square.classList.add("hovered-square");
}
})
})

//we can change width, height of square but can't change i < square * square, it remains as 16 * 16
function changeBoxSize(){

squares.forEach(square =>{
squareNumber = document.getElementById("myInput").value;
for(let i = 0; i < squareNumber *squareNumber; i++) {

square.style.width = `${squareSide / squareNumber}px`;
square.style.height = square.style.width; 

}
})
}