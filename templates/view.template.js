const _print = (arg) => {
    let output = arg.value + arg.unit
    console.log(`Your trip caused ${output} of CO2-equivalent.`)
}

module.exports = {
    print : _print
}