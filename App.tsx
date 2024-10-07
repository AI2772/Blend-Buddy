import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient";


function App() {
  const [colors, setColors] = useState(generateRandomGradient())

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString([], options as any));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = useCallback(() => {
    setColors(generateRandomGradient())
  }, [])
  return (
    <LinearGradient colors={colors} style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      gap: 4
    }}>
      <Text style={styles.clock}>{currentTime}</Text>
      <View style={styles.box}>
        <View style={styles.container}>

          <View style={[styles.colorBall, { backgroundColor: colors[0] }]}></View>
          <LinearGradient style={styles.path} colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <></>
          </LinearGradient>
          <View style={[styles.colorBall, { backgroundColor: colors[1] }]}></View>
        </View>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.title}>Generate</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  clock: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 100
  },
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
export const generateRandomGradient = (): any => {
  const colors = [
    getRandomColor('light'),
    getRandomColor('medium'),
  ];
  return colors;
};

const getRandomColor = (brightness: string) => {
  const randomColor = () => Math.floor(Math.random() * 156) + 100; // Generates a random value between 100 and 255

  let color;
  if (brightness === 'light') {
    color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  } else if (brightness === 'medium') {
    color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }

  return color;
};