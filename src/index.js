var Grid = require("../src/grid.js");
const Square = require("./square.js");

var canvas = document.getElementById("FactoryCanvas");

var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");

var rows = 10
var columns = 10

var square = new Square(0.5,0.5, Math.min(height,width))
square.scale(10)


ctx.beginPath();
ctx.lineWidth = 1;
ctx.rect(
    square.x,
    square.y,
    square.width,
    square.width,
)
ctx.closePath();
ctx.stroke();


var grid = new Grid(rows, columns, square)
var squares = grid.getAllSquares();
ctx.beginPath();
ctx.lineWidth = 1.0;
for (const square of squares) {
    ctx.rect(
        square.x,
        square.y,
        square.width,
        square.width,
    )
}
ctx.closePath();
ctx.stroke();



factories=[]
for (var r=0;r<rows;r++) {
    for (var c=0;c<columns;c++)
    {
        factories.push(
            [r,c,''+r+','+c+'']
        )
    }
}

ctx.font = "10px Arial";
ctx.textAlign = "center";
ctx.textBaseline = 'middle'; 

for (const factory of factories) {
    const square = grid.getSquareAtCoords(factory[0], factory[1])
    const center = square.getCenter()
    
    ctx.fillText(factory[2], center[0], center[1]); 
}