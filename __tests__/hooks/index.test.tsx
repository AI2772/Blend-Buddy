import { act, renderHook } from '@testing-library/react-native';
import { useCount } from '../../src/hooks';

it('should increment count', () => {
    const { result } = renderHook(() => useCount());

    expect(result.current.count).toBe(0);
    act(() => {
        // Note that you should wrap the calls to functions your hook returns with `act` if they trigger an update of your hook's state to ensure pending useEffects are run before your next assertion.
        result.current.increment();
    });
    expect(result.current.count).toBe(1);
});