
import { fireEvent, render } from '@testing-library/react-native';
import Heading from '../../src/components/Heading';
import { handleBackButton } from '../../src/utils';

jest.mock("../../src/utils", () => ({
    handleBackButton: jest.fn()
}))

describe('App', () => {
    it('should render the Home component', () => {
        const title = "Heading Title"
        const { getByTestId } = render(<Heading title={title} />);

        const homeScreen = getByTestId('heading');
        expect(homeScreen).toBeTruthy();
    });

    it('should log button press', () => {
        const title = "Heading Title"
        const { getByTestId } = render(<Heading title={title} />);
        const button = getByTestId('button');

        fireEvent.press(button)

        expect(handleBackButton).toHaveBeenCalled()
    })
});
