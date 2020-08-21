const _emissionConfig = require('../constants/emission.constant')

const _calculateEmission = (distance, mode, unit, output) => {

    const co2_quantity_gms = _emissionConfig.EMISSION_NORMS[mode]
    const total_kms = (unit == 'km') ? distance : distance / 1000
    let total_co2_gms = co2_quantity_gms * total_kms
    let total_co2_kg = total_co2_gms / 1000

    switch (output) {
        case 'kg':
            return { unit: 'kg', value: total_co2_kg.toFixed(1) }
            break
        case 'g':
            return { unit: 'g', value: total_co2_gms }
            break
        default:
            return (total_co2_gms >= 1000) ? { unit: 'kg', value: total_co2_kg.toFixed(1) } : { unit: 'g', value: total_co2_gms }
    }
}

module.exports = {
    calculateEmission: _calculateEmission
}