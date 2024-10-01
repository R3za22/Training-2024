import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import Gameover from "@/screens/Gameover";
import Startgame from "@/screens/Startgame";
import Game from "@/screens/Game";

import { Colors } from "@/constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoading] = useFonts({
    "open-sans": require("@/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("@/assets/fonts/OpenSans-Bold.ttf"),
  });

  // if (!fontsLoading) {
  //   return <AppLoading />;
  // }

  const changeUserNumberHandler = (value: number) => {
    setUserNumber(value);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <Startgame onPickNumber={changeUserNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <Gameover
        onStartNewGame={startNewGameHandler}
        roundsNumber={guessRounds}
        userNumber={userNumber}
      />
    );
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
