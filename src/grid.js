var Square = require('./square.js')

class Grid {
    constructor(rows, lines, square) {
        this.base_square = square
        const block_size_width = square.width / rows;
        const block_size_height = square.width / lines;
        this.block_size = Math.min(block_size_width, block_size_height)
        this.rows = rows;
        this.columns = lines;
        this.block_scale = 0;
    }

    getBlockSize() {
        return this.block_size
    }
    getSquareAtCoords(row, col) {
        var sqr = new Square(
            row * this.block_size + this.base_square.x,
            col * this.block_size + this.base_square.y,
            this.block_size)

        return sqr
    }
    getAllSquares() {
        var squares = new Array(this.columns* this.rows)
        for (var col = 0; col < this.columns; col++) {
            for (var row = 0; row < this.rows; row++) {

                var sqr = new Square(
                    row * this.block_size + this.base_square.x,
                    col * this.block_size + this.base_square.y,
                    this.block_size)

                squares[row + col*this.columns]=sqr

            }
        }
        return squares
    }
}
module.exports = Grid

