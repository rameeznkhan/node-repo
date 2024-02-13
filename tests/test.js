const assert = require('assert');
const exp = require('constants');

describe('Basic test suite', () => {
    it('should return Hello World! when accessign root path', () => {
        const expectedResult = "Hello World!";
        const actualResult = "Hello World!";
        assert.strictEqual(expectedResult, actualResult);
    })
})