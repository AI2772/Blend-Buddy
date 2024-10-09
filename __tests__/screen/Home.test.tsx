import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Home from '../../src/screen/Home';
import { generateRandomGradient } from '../../src/utils';


jest.mock('../../src/utils', () => ({
    generateRandomGradient: jest.fn(),
}));

describe('Home Screen', () => {
    beforeEach(() => {
        (generateRandomGradient as jest.Mock).mockClear();
    });

    it('should render the Home component and handle click', () => {
        (generateRandomGradient as jest.Mock).mockReturnValue(['#ff0000', '#00ff00']);

        const { getByTestId, getByText } = render(<Home />);

        const homeScreen = getByTestId('home-screen');
        expect(homeScreen).toBeTruthy();

        const button = getByText('Generate');
        fireEvent.press(button);

        expect(generateRandomGradient).toHaveBeenCalled();
    });

    it('should handle if generateRandomGradient not works', () => {
        (generateRandomGradient as jest.Mock).mockReturnValue(undefined);

        const { getByTestId } = render(<Home />);

        const gradientFound = getByTestId('color-not-loaded');
        expect(gradientFound).toBeTruthy();

    });
});
