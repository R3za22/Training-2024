import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

const Startgame = ({ onPickNumber }: { onPickNumber: any }) => {
  const [enterNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };
  const restInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number !", "Number has to be between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: restInputHandler },
      ]);
      // show alert ...
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enterNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={restInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // android
    elevation: 5,
    // ios
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default Startgame;
