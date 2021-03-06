const _assert = require('assert')
const _calculate = require('../controllers/calculate')

describe('return emitted carbon in gram if output parameter is in grams', () => {
    const params = {
        distance : 14500,
        mode : 'train',
        unit : 'm',
        output : 'g'
    }
    it('should return value in gms', () => {
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.unit,'g');
    });
    it('should not return value in kg', () => {
        const result = _calculate.calculateEmission(params);
        _assert.notStrictEqual(result.unit,'kg')
    });
});

describe('return emitted carbon in kg if output parameter is in kg', () => {
    it('should return value in kg', () => {
        const params = {
            distance : 14500,
            mode : 'train',
            unit : 'm',
            output : 'kg'
        }
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.unit,'kg');
    });
    it('should not return value in g', () => {
        const params = {
            distance : 14500,
            mode : 'train',
            unit : 'm',
            output : 'kg'
        }
        const result = _calculate.calculateEmission(params);
        _assert.notStrictEqual(result.unit,'g')
    });
});

describe('if output parameter missing return emitted carbon in kg if total emmision is 1000 gms or more and in g if emitted carbon in less than 1000 gms', () => {
    it('should return in g', () => {
        const params = {
            distance : 14500,
            mode : 'train',
            unit : 'm'
        }
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.unit,'g');
    });
    it('should return in kg', () => {
        const params = {
            distance : 15,
            mode : 'medium-diesel-car',
            unit : 'km'
        }
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.unit,'kg')
    });
});

describe('check if emitted carbon value is correct', () => {
    it('should be equal to 87g', () => {
        const params = {
            distance : 14500,
            mode : 'train',
            unit : 'm',
            output : 'g'
        }
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.value+result.unit,'87g');
    });
    it('should be equal to 0.1kg', () => {
        const params = {
            distance : 14500,
            mode : 'train',
            unit : 'm',
            output : 'kg'
        }
        const result = _calculate.calculateEmission(params);
        _assert.strictEqual(result.value+result.unit,'0.1kg')
    });
});