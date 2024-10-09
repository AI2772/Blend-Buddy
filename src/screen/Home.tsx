import { memo, useCallback, useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { generateRandomGradient } from "../utils";
import Clock from "../components/Clock";


function Home() {
    const [colors, setColors] = useState<string[]>(generateRandomGradient() || [])

    const handleClick = useCallback(() => {
        setColors(generateRandomGradient())
    }, [])

    const MemoizedClock = memo(Clock);

    return (
        <LinearGradient
            testID="home-screen"
            colors={colors}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: "center",
                gap: 4
            }}>
            <MemoizedClock />
            <View style={styles.box}>
                {colors.length ? <View style={styles.container}>
                    <View style={[styles.colorBall, { backgroundColor: colors[0] }]}></View>
                    <LinearGradient style={styles.path} colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <></>
                    </LinearGradient>
                    <View style={[styles.colorBall, { backgroundColor: colors[1] }]}></View>
                </View> : <></>}
                <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text style={styles.title}>Generate</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    box: {
        position: "absolute",
        width: '100%',
        bottom: 0,
        margin: "auto",
        paddingVertical: 20,
        backgroundColor: "white",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    container: {
        width: Dimensions.get("window").width * 0.7,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    colorBall: {
        width: 50,
        height: 40,
        borderRadius: 100,
    },
    path: {
        width: '100%',
        height: 10,
        backgroundColor: "blue",
        marginHorizontal: -20,
        zIndex: 1
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    button: {
        width: 240,
        paddingVertical: 10,
        backgroundColor: "skyblue",
        borderRadius: 10,
        marginVertical: 20

    }
})
