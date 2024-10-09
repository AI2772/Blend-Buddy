export const generateRandomGradient = (): string[] => {
    const colors = [
        getRandomColor('light'),
        getRandomColor('medium'),
    ];
    return colors;
};

const getRandomColor = (brightness: string): string => {
    const randomColor = () => Math.floor(Math.random() * 156) + 100; // Generates a random value between 100 and 255

    let color: string = '';
    if (brightness === 'light') {
        color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    } else if (brightness === 'medium') {
        color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    return color;
};

export const handleBackButton = (): void => {
    console.log("navigating back")
}