import { generateRandomGradient, handleBackButton } from '../../src/utils/index';

describe('Utility Functions', () => {
    describe('generateRandomGradient', () => {
        it('should return an array of two colors', () => {
            const result = generateRandomGradient();
            expect(result).toHaveLength(2);
            result.forEach((color: string) => {
                expect(color).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
            });
        });

        it('should return different colors on consecutive calls', () => {
            const result1 = generateRandomGradient();
            const result2 = generateRandomGradient();
            expect(result1).not.toEqual(result2);
        });
    });
});

describe('handleBackButton', () => {
    it('should log "navigating back"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        handleBackButton();
        expect(consoleSpy).toHaveBeenCalledWith("navigating back");
        consoleSpy.mockRestore();
    });
});
