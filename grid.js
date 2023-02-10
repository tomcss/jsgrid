class Grid {
    #grid
    
    constructor( width, height) {
        this.#grid = new Array( height)
            .fill(0)
            .map( _ => new Array( width).fill(0))
    }

    get width() {
        return this.#grid[0].length
    }

    get height() {
        return this.#grid.length
    }

    setCell( x, y, value) {
        this.#grid[y][x] = value
    }

    getCell( x, y) {
        return this.#grid[y][x]
    }

    toString() {
        return this.#grid
            .map( row => row.join(' '))
            .join( "\n")
    }

    inBoundsX( x) {
        return x >= 0 && x < this.width
    }

    inBoundsY( y) {
        return y >= 0 && y < this.height
    }

    pathExecute( startPosition, direction, func) {

        let x = startPosition.x
        let y = startPosition.y

        if( !this.inBoundsX( x) || !this.inBoundsY( y)) throw "X or Y out of bounds"

        while( this.inBoundsX( x) && this.inBoundsY( y)) {
            func( x, y, this.getCell( x, y))

            x += direction.x
            y += direction.y
        }
    }

    clone() {
        let grid = new Grid( this.height, this.width)

        for(let x=0; x<this.width; x++) {
            for(let y=0; y<this.height; y++) {
                grid.setCell( x, y, this.getCell( x, y))
            }
        }

        return grid
    }

    fillFromRows( rows) {
        for(let y=0; y<rows.length; y++) {
            for(let x=0; x<rows[y].length; x++) {
                this.setCell( x,y, rows[y][x])
            }
        }
        
    }
}

module.exports = {
    Grid
}