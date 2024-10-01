import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Startgame from "@/screens/Startgame";

import { useState } from "react";
import Game from "@/screens/Game";
import { Colors } from "@/constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const changeUserNumberHandler = (value: number) => {
    setUserNumber(value);
  };

  let screen = <Startgame onPickNumber={changeUserNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.primary600}
      />
      <ImageBackground
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require("@/assets/images/background.png")}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
