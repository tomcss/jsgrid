const { Grid } = require('./grid.js')

class Cpu {
    constructor() {
        this.cycleCount = 1
        this.x = 1
        this.grid = new Grid(40, 6)
    }

    cycle() {
        let position = (this.cycleCount-1) % 40
        let row = Math.floor( (this.cycleCount-1)/40)
        let pixel = '.'
        
        if( this.x === position-1 || this.x === position || this.x === position+1) pixel = '#'

        this.grid.setCell( position, row, pixel)

        this.cycleCount++
    }

    execute( command, ...parameters) {

        if( command === 'noop') {
            this.cycle()
        }

        if( command === 'addx') {
            this.cycle()
            this.cycle()
            this.x += parameters[0]
        }
        
    }
}


module.exports = {
    Cpu
}