import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: { children: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { fontSize: 36, color: Colors.accent500, fontWeight: "bold" },
});

export default NumberContainer;
