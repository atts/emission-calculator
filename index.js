#!/usr/bin/env node
const _yargs = require('yargs')
const _options = _yargs
    .showHelpOnFail(true)
    .usage("Usage: --distance <distance> --transportation-method <type-of-transport> --unit-of-distance <km/m> --output <kg/g>")
    .option("distance", { alias: "distance", describe: "distance travelled", type: "number", nargs: 1, demandOption: true })
    .option("transportation-method", { alias: "mode", describe: "transportation mode", nargs: 1, type: "string", demandOption: true })
    .option("unit-of-distance", { alias: "unit", describe: "it can be km or m", type: "string", nargs: 1, demandOption: false, default: "km" })
    .option("output", { alias: "output", describe: "it can be in kg or g", type: "string", nargs: 1, demandOption: false })
    .help()
    .alias('help', 'h')
    .argv;

 const params = {
    distance : _options.distance,
    mode : _options.mode,
    unit : _options.unit.toLowerCase(),
    output : _options.output ? _options.output.toLowerCase() : null
 }

const _calculate = require('./controllers/calculate')
const _print = require('./templates/view.template')

const data = _calculate.calculateEmission(params)

_print.print(data)

