const { inputs } = require('./inputs.js')
const { Cpu } = require('./cpu.js')
const { Grid } = require('./grid.js')

let cl = (...args) => console.log( ...args)

let commands = inputs[1]

let cpu = new Cpu()

for(let command of commands) {
    cpu.execute( command[0], command[1])
}

console.log( cpu.grid.toString())