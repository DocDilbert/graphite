

class Square {
    constructor(x, y, width) {
        this.x = x
        this.y = y
        this.width = width
    }
 
    getType() {
        return "Square"
    }
    getCenter() {
        return [this.x + this.width/2.0, this.y + this.width/2.0]
    }
    scale(pixel) {
        this.width= this.width - pixel
        this.x = this.x + pixel/2.0
        this.y = this.y+ pixel/2.0
    }
}
module.exports = Square

