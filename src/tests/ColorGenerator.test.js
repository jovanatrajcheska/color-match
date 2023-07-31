import { getRandomColors } from '../helpers/ColorGenerator';

jest.useFakeTimers();

const mockMathRandom = (value) => {
    const originalMathRandom = global.Math.random;
    global.Math.random = () => value;
    return () => {
        global.Math.random = originalMathRandom;
    };
};

test('random colors for wordOne and wordTwo', () => {
    const randomG = jest.spyOn(Math, 'random').mockReturnValue(0.5);
    const colors = getRandomColors();

    expect(colors.wordOne).toMatch(/black|blue|red|green|yellow|pink|purple|cyan/);
    expect(colors.wordTwo).toMatch(/black|blue|red|green|yellow|pink|purple|cyan/);

    jest.advanceTimersByTime(1000);

    randomG.mockRestore();
    jest.clearAllTimers();
});

test('random inkColor', () => {
    const randomValue = 0.4;
    const restoreMathRandom = mockMathRandom(randomValue);

    const colors = getRandomColors();

    expect(colors.inkColor).toBe(colors.wordOne);

    restoreMathRandom();
});
