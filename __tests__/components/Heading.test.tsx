
import { fireEvent, render } from '@testing-library/react-native';
import Heading from '../../src/components/Heading';
import { handleBackButton } from '../../src/utils';

jest.mock('../../src/utils', () => ({
    handleBackButton: jest.fn(),
}));

describe('App', () => {
    it('should render the Heading component', () => {
        const title = 'Heading Title';
        const { getByTestId } = render(<Heading title={title} />);

        const heading = getByTestId('heading');
        expect(heading).toBeTruthy();
    });

    it("should render default text if title not provided", () => {
        const { getByText } = render(<Heading />);
        expect(getByText("Go Back")).toBeTruthy();

    })



    it('should log button press', () => {
        const title = 'Heading Title';
        const { getByTestId } = render(<Heading title={title} />);
        const button = getByTestId('button');

        fireEvent.press(button);

        expect(handleBackButton).toHaveBeenCalled();
    });
});
