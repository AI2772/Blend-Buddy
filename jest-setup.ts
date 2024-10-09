import "@testing-library/react-native/extend-expect"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")



jest.mock("react-native-reanimated", () => {
    const Reanimated = require("react-native-reanimated/mock")
    Reanimated.default.call = () => { }
    return Reanimated
})

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")