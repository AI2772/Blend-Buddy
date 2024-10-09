import React from 'react';
import { render, cleanup, act } from '@testing-library/react-native';
import Clock from '../../src/components/Clock';

jest.useFakeTimers();

describe('Clock Component', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllTimers();
    });

    it('should render correctly with initial time', () => {
        const { getByText } = render(<Clock />);
        const clockElement = getByText(/:/);
        expect(clockElement).toBeTruthy();
    });

    it('should update time every second', () => {
        const { getByText } = render(<Clock />);

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const updatedTime = getByText(/:/);
        expect(updatedTime).toBeTruthy();
    });

    it('should clear interval on unmount', () => {
        const { unmount } = render(<Clock />);
        const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

        unmount();
        expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
    });
});
