const _emissionConfig = require('../constants/emission.constant')

const _calculateEmission = (params) => {
    const co2_quantity_gms = _emissionConfig.EMISSION_NORMS[params.mode]
    const total_kms = (params.unit == 'km') ? params.distance : params.distance / 1000
    let total_co2_gms = co2_quantity_gms * total_kms
    let total_co2_kg = total_co2_gms / 1000

    switch (params.output) {
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