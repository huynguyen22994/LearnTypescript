import { isValid } from '../codes/1.try.jest'

describe('isValid()', () => {
    it('should return true when n > 10', () => {
        expect(isValid(12)).toBe(true)
        expect(isValid(18)).toBe(true)
        expect(isValid(13)).toBe(true)
        expect(isValid(15)).toBe(true)
    });
    it('should return false when n < 10', () => {
        expect(isValid(2)).toBe(false)
        expect(isValid(8)).toBe(false)
        expect(isValid(3)).toBe(false)
        expect(isValid(5)).toBe(false)
    });
    it('should return false when n = 10', () => {
        expect(isValid(10)).toBe(false)
    });
});